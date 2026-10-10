import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-700 text-slate-100">
      <h1 className="text-3xl font-bold mb-4 text-center">Welcome to My App</h1>
      <p className="text-lg bg-sky-200 text-sky-900 p-2 mx-auto max-w-7xl">
        This is a simple Next.js page.Next. js is a React framework that enables
        several extra features, including server-side rendering and static
        rendering. React is a JavaScript library that is traditionally used to
        build web applications rendered in the client's browser with JavaScript.
      </p>
      <div className="mt-6 marker mx-auto max-w-7xl bg-sky-200 text-sky-900 p-2 flex gap-2">
        <Image
          src="/next.js image.jfif"
          alt="Next.js Logo"
          width={700}
          height={500}
          className="rounded-lg"
        />
      <p className="mt-4 text-lg bg-sky-200 text-sky-900 p-2 mx-auto max-w-7xl">
        Next.js is a React framework that enables several extra features, including
        server-side rendering and static rendering. React is a JavaScript library
        that is traditionally used to build web applications rendered in the
        client's browser with JavaScript.
      </p>
      </div>
  

      <div>
      <ul className="list-disc list-inside mt-4 bg-sky-200 text-sky-900 p-2 mx-auto max-w-7xl">
        <li>Data Fetching. Make your React component async and await your data.</li>
        <li>Server Actions. Run server code by calling a function.</li>
        <li>Static Site Generation. Generate static HTML at build time.</li>
        <li>Advanced Routing & Nested Layouts.</li>
        <li>Client-side Rendering. Render content in the browser.</li>
      </ul>
      </div>

      
    </main>
  );
}

   

