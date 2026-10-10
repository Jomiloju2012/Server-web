import { NextResponse } from "next/server";

const API_BASE_URL = process.env.PRODUCTS_API_URL || "http://localhost:8000";

export async function POST(request) {
    try {
        const { type, product } = await request.json();

        if (!["phone", "laptop"].includes(type)) {
            return NextResponse.json({ error: "Choose a phone or laptop." }, { status: 400 });
        }

        if (
            !product ||
            typeof product.brand !== "string" ||
            !product.brand.trim() ||
            typeof product.model !== "string" ||
            !product.model.trim()
        ) {
            return NextResponse.json({ error: "Brand and model are required." }, { status: 400 });
        }

        const response = await fetch(`${API_BASE_URL}/api/${type}s`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product),
            cache: "no-store",
        });
        const responseText = await response.text();
        let result = null;

        if (responseText) {
            try {
                result = JSON.parse(responseText);
            } catch {
                result = { message: responseText };
            }
        }

        if (!response.ok) {
            return NextResponse.json(
                { error: result?.message || result?.error || "The product server rejected the listing." },
                { status: response.status },
            );
        }

        return NextResponse.json(result || { success: true }, {
            status: response.status === 204 ? 201 : response.status,
        });
    } catch (error) {
        console.error("Error creating product:", error);
        return NextResponse.json(
            { error: "Could not reach the product server. Check that it is running and try again." },
            { status: 502 },
        );
    }
}

export async function PUT(request) {
    try {
        const { type, id, product } = await request.json();

        if (!["phone", "laptop"].includes(type)) {
            return NextResponse.json({ error: "Choose a phone or laptop." }, { status: 400 });
        }

        if (id === undefined || id === null || String(id).trim() === "") {
            return NextResponse.json({ error: "A product ID is required." }, { status: 400 });
        }

        if (
            !product ||
            typeof product.brand !== "string" ||
            !product.brand.trim() ||
            typeof product.model !== "string" ||
            !product.model.trim()
        ) {
            return NextResponse.json({ error: "Brand and model are required." }, { status: 400 });
        }

        const updateUrl = `${API_BASE_URL}/api/${type}/${encodeURIComponent(id)}`;
        const requestOptions = {
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product),
            cache: "no-store",
        };
        let response = await fetch(updateUrl, { ...requestOptions, method: "PATCH" });

        if (response.status === 405 || response.status === 501) {
            response = await fetch(updateUrl, { ...requestOptions, method: "PUT" });
        }

        const responseText = await response.text();
        let result = null;

        if (responseText) {
            try {
                result = JSON.parse(responseText);
            } catch {
                result = { message: responseText };
            }
        }

        if (!response.ok) {
            return NextResponse.json(
                { error: result?.message || result?.error || "The product server rejected the update." },
                { status: response.status },
            );
        }

        return NextResponse.json(result || { success: true });
    } catch (error) {
        console.error("Error updating product:", error);
        return NextResponse.json(
            { error: "Could not reach the product server. Check that it is running and try again." },
            { status: 502 },
        );
    }
}