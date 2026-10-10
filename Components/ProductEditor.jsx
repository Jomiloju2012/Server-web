'use client';

import { useState } from "react";
import { Pencil, X } from "lucide-react";

export default function ProductEditor({ product, type }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        setIsSaving(true);
        setError("");

        const formData = new FormData(event.currentTarget);
        const price = formData.get("price");
        const year = formData.get("year");
        const updatedProduct = {
            brand: formData.get("brand").trim(),
            model: formData.get("model").trim(),
            price: price ? Number(price) : null,
            year: year ? Number(year) : null,
            imageUrl: formData.get("image").trim() || null,
        };
        const productUrl = `/api/${type}s/${encodeURIComponent(product.id ?? product._id)}`;
        try {
            const response = await fetch(productUrl, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    type,
                    id: product.id ?? product._id,
                    product: updatedProduct,
                }),
            });
            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "The device could not be updated.");
            }

            window.location.reload();
        } catch (submitError) {
            setError(submitError.message);
            setIsSaving(false);
        }
    }

    return (
        <>
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="inline-flex min-h-10 items-center gap-2 border border-[#1d5944] px-3 text-sm font-semibold text-[#1d5944] transition-colors hover:bg-[#1d5944] hover:text-white"
            >
                <Pencil size={15} aria-hidden="true" />
                Edit
            </button>

            {isOpen && (
                <div
                    className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-[#17251e]/55 p-4"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) setIsOpen(false);
                    }}
                >
                    <section
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="edit-product-title"
                        className="my-auto w-full max-w-xl border border-[#d6ddd4] bg-[#f3f4ee] p-5 shadow-xl sm:p-8"
                    >
                        <div className="mb-6 flex items-start justify-between gap-4">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#47725d]">
                                    {type} / Update listing
                                </p>
                                <h2 id="edit-product-title" className="mt-2 text-2xl font-semibold text-[#17372b]">
                                    Edit device
                                </h2>
                            </div>
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                aria-label="Close edit form"
                                className="grid size-10 shrink-0 place-items-center text-[#526257] transition-colors hover:bg-[#e4e8e1] hover:text-[#17251e]"
                            >
                                <X size={19} aria-hidden="true" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <label className="grid gap-2 text-sm font-semibold text-[#34443a]">
                                    Brand
                                    <input
                                        name="brand"
                                        defaultValue={product.brand || product.make || ""}
                                        required
                                        className="h-11 min-w-0 border border-[#cbd5c9] bg-white px-3 font-normal outline-none focus:border-[#1d5944] focus:ring-2 focus:ring-[#1d5944]/15"
                                    />
                                </label>
                                <label className="grid gap-2 text-sm font-semibold text-[#34443a]">
                                    Model
                                    <input
                                        name="model"
                                        defaultValue={product.model || product.modelName || ""}
                                        required
                                        className="h-11 min-w-0 border border-[#cbd5c9] bg-white px-3 font-normal outline-none focus:border-[#1d5944] focus:ring-2 focus:ring-[#1d5944]/15"
                                    />
                                </label>
                                <label className="grid gap-2 text-sm font-semibold text-[#34443a]">
                                    Price (USD)
                                    <input
                                        name="price"
                                        type="number"
                                        min="0"
                                        step="0.01"
                                        defaultValue={String(product.price ?? "").replace(/[$,]/g, "")}
                                        className="h-11 min-w-0 border border-[#cbd5c9] bg-white px-3 font-normal outline-none focus:border-[#1d5944] focus:ring-2 focus:ring-[#1d5944]/15"
                                    />
                                </label>
                                <label className="grid gap-2 text-sm font-semibold text-[#34443a]">
                                    Year
                                    <input
                                        name="year"
                                        type="number"
                                        min="1970"
                                        max="2100"
                                        defaultValue={product.year || product.releaseYear || ""}
                                        className="h-11 min-w-0 border border-[#cbd5c9] bg-white px-3 font-normal outline-none focus:border-[#1d5944] focus:ring-2 focus:ring-[#1d5944]/15"
                                    />
                                </label>
                                <label className="grid gap-2 text-sm font-semibold text-[#34443a] sm:col-span-2">
                                    Image URL
                                    <input
                                        name="image"
                                        type="url"
                                        defaultValue={product.imageUrl || product.image || product.photo || product.thumbnail || ""}
                                        className="h-11 min-w-0 border border-[#cbd5c9] bg-white px-3 font-normal outline-none focus:border-[#1d5944] focus:ring-2 focus:ring-[#1d5944]/15"
                                    />
                                </label>
                            </div>

                            {error && (
                                <p role="alert" className="mt-4 border-l-2 border-[#b24c3e] bg-[#fff5f2] px-3 py-2 text-sm text-[#873c31]">
                                    {error}
                                </p>
                            )}

                            <div className="mt-6 flex flex-wrap justify-end gap-3">
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    className="min-h-11 border border-[#b9c5b9] px-4 text-sm font-semibold text-[#294336] transition-colors hover:border-[#1d5944]"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSaving}
                                    className="min-h-11 bg-[#1d5944] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#164632] disabled:cursor-wait disabled:opacity-60"
                                >
                                    {isSaving ? "Saving..." : "Save changes"}
                                </button>                            </div>
                        </form>
                    </section>
                </div>
            )}
        </>
    );
}