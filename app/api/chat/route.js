import { NextResponse } from 'next/server'

function createFallbackReply(messages = []) {
  const lastUserMessage = [...messages].reverse().find((message) => {
    const role = message?.sender || message?.role
    return role === 'user'
  })

  const prompt = lastUserMessage?.text || lastUserMessage?.content || ''

  if (prompt) {
    return `I’m running in fallback mode right now because the OpenRouter service is unavailable. Your message was: "${prompt}"`
  }

  return 'I’m running in fallback mode right now because the OpenRouter service is unavailable.'
}

export async function POST(request) {
  try {
    const body = await request.json()
    const messages = Array.isArray(body?.messages) ? body.messages : []
    const apiKey = process.env.OPENROUTER_API_KEY
    const model = process.env.OPENROUTER_MODEL || 'openai/gpt-4o-mini'

    if (!apiKey) {
      return NextResponse.json(
        {
          reply: createFallbackReply(messages),
          fallback: true,
          error: 'OPENROUTER_API_KEY is not set in your environment.',
        },
        { status: 200 }
      )
    }

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
        'HTTP-Referer': process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
        'X-Title': 'Sabiai Chat',
      },
      body: JSON.stringify({
        model,
        messages: messages.map((message) => ({
          role: message.sender === 'user' ? 'user' : 'assistant',
          content: message.text || message.content || '',
        })),
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      const errorMessage = data?.error?.message || 'OpenRouter request failed.'

      if (/credit|credits|insufficient|unauthorized|api key|forbidden/i.test(errorMessage)) {
        return NextResponse.json(
          {
            reply: createFallbackReply(messages),
            fallback: true,
            error: errorMessage,
          },
          { status: 200 }
        )
      }

      return NextResponse.json({ error: errorMessage }, { status: response.status })
    }

    const reply = data.choices?.[0]?.message?.content || 'No response from OpenRouter.'

    return NextResponse.json({ reply })
  } catch (error) {
    console.error('Error in /api/chat route:', error)
    return NextResponse.json(
      {
        reply: createFallbackReply(),
        fallback: true,
        error: error.message || 'Something went wrong.',
      },
      { status: 200 }
    )
  }
}