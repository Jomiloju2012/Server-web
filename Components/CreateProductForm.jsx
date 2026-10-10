'use client';

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Plus } from "lucide-react";

export default function CreateProductForm({ initialType }) {
    const [deviceType, setDeviceType] = useState(initialType);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [feedback, setFeedback] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();
        setIsSubmitting(true);
        setFeedback(null);

        const form = event.currentTarget;
        const formData = new FormData(form);
        const product = {
            brand: formData.get("brand").trim(),
            model: formData.get("model").trim(),
            price: formData.get("price") ? Number(formData.get("price")) : undefined,
            year: formData.get("year") ? Number(formData.get("year")) : undefined,
            imageUrl: formData.get("image").trim() || undefined,
        };

        try {
            const response = await fetch("/api/products", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ type: deviceType, product }),
            });
            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "The device could not be created.");
            }

            form.reset();
            setFeedback({
                type: "success",
                message: `${product.brand} ${product.model} was added to the ${deviceType} catalog.`,
            });
        } catch (error) {
            setFeedback({ type: "error", message: error.message });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <main className="min-h-screen bg-[#f3f4ee] px-5 pb-16 text-[#17251e] sm:px-8">
            <div className="mx-auto max-w-5xl">
                <header className="flex items-center justify-between border-b border-[#d6ddd4] py-5">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#35493d]">
                        67 / Device index
                    </p>
                    <Link
                        href="/67"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#42614f] transition-colors hover:text-[#17372b]"
                    >
                        <ArrowLeft size={16} aria-hidden="true" />
                        Back to catalog
                    </Link>
                </header>

                <section className="grid gap-10 py-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16 md:py-16">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#47725d]">
                            Catalog / New listing
                        </p>
                        <h1 className="mt-4 text-4xl font-semibold leading-tight text-[#17372b] sm:text-5xl">
                            Add a device.
                        </h1>
                        <p className="mt-4 max-w-sm text-base leading-7 text-[#59675c]">
                            Enter the details for a phone or laptop. Brand and model can be set to any value.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="border border-[#d6ddd4] bg-white p-5 sm:p-8">
                        <div className="grid gap-5 sm:grid-cols-2">
                            <label className="grid gap-2 text-sm font-semibold text-[#34443a] sm:col-span-2">
                                Device type
                                <select
                                    name="type"
                                    value={deviceType}
                                    onChange={(event) => setDeviceType(event.target.value)}
                                    className="h-12 w-full border border-[#cbd5c9] bg-[#fbfcf9] px-3 font-normal outline-none focus:border-[#1d5944] focus:ring-2 focus:ring-[#1d5944]/15"
                                >
                                    <option value="phone">Phone</option>
                                    <option value="laptop">Laptop</option>
                                </select>
                            </label>

                            <label className="grid gap-2 text-sm font-semibold text-[#34443a]">
                                Brand
                                <input
                                    name="brand"
                                    type="text"
                                    placeholder="e.g. Apple"
                                    autoComplete="organization"
                                    required
                                    className="h-12 w-full border border-[#cbd5c9] bg-[#fbfcf9] px-3 font-normal outline-none placeholder:text-[#9aa49a] focus:border-[#1d5944] focus:ring-2 focus:ring-[#1d5944]/15"
                                />
                            </label>
                            <label className="grid gap-2 text-sm font-semibold text-[#34443a]">
                                Model
                                <input
                                    name="model"
                                    type="text"
                                    placeholder="e.g. MacBook Air"
                                    required
                                    className="h-12 w-full border border-[#cbd5c9] bg-[#fbfcf9] px-3 font-normal outline-none placeholder:text-[#9aa49a] focus:border-[#1d5944] focus:ring-2 focus:ring-[#1d5944]/15"
                                />
                            </label>
                            <label className="grid gap-2 text-sm font-semibold text-[#34443a]">
                                Price (USD)
                                <input
                                    name="price"
                                    type="number"
                                    min="0"
                                    step="0.01"
                                    placeholder="Optional"
                                    className="h-12 w-full border border-[#cbd5c9] bg-[#fbfcf9] px-3 font-normal outline-none placeholder:text-[#9aa49a] focus:border-[#1d5944] focus:ring-2 focus:ring-[#1d5944]/15"
                                />
                            </label>
                            <label className="grid gap-2 text-sm font-semibold text-[#34443a]">
                                Year
                                <input
                                    name="year"
                                    type="number"
                                    min="1970"
                                    max="2100"
                                    placeholder="Optional"
                                    className="h-12 w-full border border-[#cbd5c9] bg-[#fbfcf9] px-3 font-normal outline-none placeholder:text-[#9aa49a] focus:border-[#1d5944] focus:ring-2 focus:ring-[#1d5944]/15"
                                />
                            </label>
                            <label className="grid gap-2 text-sm font-semibold text-[#34443a] sm:col-span-2">
                                Image URL
                                <input
                                    name="image"
                                    type="url"
                                    placeholder="https://example.com/device.jpg"
                                    className="h-12 w-full border border-[#cbd5c9] bg-[#fbfcf9] px-3 font-normal outline-none placeholder:text-[#9aa49a] focus:border-[#1d5944] focus:ring-2 focus:ring-[#1d5944]/15"
                                />
                            </label>
                        </div>

                        {feedback && (
                            <p
                                role={feedback.type === "error" ? "alert" : "status"}
                                className={`mt-5 border-l-2 px-3 py-2 text-sm ${feedback.type === "error" ? "border-[#b24c3e] bg-[#fff5f2] text-[#873c31]" : "border-[#25825e] bg-[#f0f8f2] text-[#245b42]"}`}
                            >
                                {feedback.message}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 bg-[#1d5944] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#164632] disabled:cursor-wait disabled:opacity-60"
                        >
                            <Plus size={17} aria-hidden="true" />
                            {isSubmitting ? "Adding device..." : "Add to catalog"}
                        </button>
                    </form>
                </section>
            </div>
        </main>
    );
}