
import Link from "next/link";
import { Plus } from "lucide-react";
import ProductEditor from "@/Components/ProductEditor";

const API_BASE_URL = process.env.PRODUCTS_API_URL || "http://localhost:8000";

const fallbackImages = {
    phone:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1000&q=85",
    laptop:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=85",
};

async function getProducts(type) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/${type}s`, {
            cache: "no-store",
        });

        if (!response.ok) return { products: [], connected: false };

        const data = await response.json();
        return {
            products: Array.isArray(data) ? data : [],
            connected: true,
        };
    } catch {
        return { products: [], connected: false };
    }
}

function getImage(product, type) {
    return (
        product.image ||
        product.imageUrl ||
        product.photo ||
        product.thumbnail ||
        fallbackImages[type]
    );
}

function formatPrice(price) {
    if (price === undefined || price === null || price === "") {
        return "Price on request";
    }

    const numericPrice = Number(String(price).replace(/[$,]/g, ""));
    if (Number.isFinite(numericPrice)) {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
        }).format(numericPrice);
    }

    return price;
}

function ProductCard({ product, type, index }) {
    const brand = product.brand || product.make || "Unbranded";
    const model = product.model || product.modelName || "Model not listed";
    const image = getImage(product, type);
    const id = product.id ?? product._id ?? `${type}-${index + 1}`;

    return (
        <article className="group overflow-hidden border border-[#d8ddd5] bg-white transition-transform duration-300 hover:-translate-y-1">
            <div className="relative aspect-[1.45] overflow-hidden bg-[#e9ece5]">
                <img
                    src={image}
                    alt={`${brand} ${model}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                />
                <span className="absolute left-4 top-4 bg-[#f6c453] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#24332b]">
                    {type}
                </span>
            </div>
            <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#637066]">
                            {brand}
                        </p>
                        <h3 className="mt-1 text-xl font-semibold leading-tight text-[#17251e]">
                            {model}
                        </h3>
                    </div>
                    <p className="shrink-0 text-lg font-semibold text-[#17634d]">
                        {formatPrice(product.price)}
                    </p>
                </div>
                <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-[#e4e8e1] pt-4 text-sm">
                    <div>
                        <dt className="text-xs uppercase tracking-[0.12em] text-[#7a857b]">ID</dt>
                        <dd className="mt-1 truncate font-medium text-[#34443a]">{id}</dd>
                    </div>
                    <div>
                        <dt className="text-xs uppercase tracking-[0.12em] text-[#7a857b]">Year</dt>
                        <dd className="mt-1 font-medium text-[#34443a]">
                            {product.year || product.releaseYear || "Not listed"}
                        </dd>
                    </div>
                </dl>
                {product.id != null || product._id != null ? (
                    <div className="mt-5 border-t border-[#e4e8e1] pt-4">
                        <ProductEditor product={product} type={type} />
                    </div>
                ) : null}
            </div>
        </article>
    );
}

function ProductSection({ id, title, eyebrow, type, products }) {
    return (
        <section id={id} className="scroll-mt-8 py-12 sm:py-16">
            <div className="mb-7 flex flex-wrap items-end justify-between gap-4 border-b border-[#cfd7ce] pb-4">
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#47725d]">
                        {eyebrow}
                    </p>
                    <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#17251e] sm:text-4xl">
                        {title}
                    </h2>
                </div>
                <div className="flex items-center gap-4">
                    <Link
                        href={`/London?type=${type}`}
                        aria-label={`Create a ${type}`}
                        className="inline-flex min-h-10 items-center gap-2 border border-[#1d5944] px-3 text-sm font-semibold text-[#1d5944] transition-colors hover:bg-[#1d5944] hover:text-white"
                    >
                        <Plus size={17} aria-hidden="true" />
                        <span>Create</span>
                    </Link>
                    <p className="text-sm font-medium text-[#637066]">
                        {String(products.length).padStart(2, "0")} items
                    </p>
                </div>
            </div>
            {products.length ? (
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {products.map((product, index) => (
                        <ProductCard
                            key={`${type}-${product.id ?? product._id ?? index}`}
                            product={product}
                            type={type}
                            index={index}
                        />
                    ))}
                </div>
            ) : (
                <div className="border border-dashed border-[#bec9bd] bg-white/60 px-6 py-10 text-center">
                    <p className="font-medium text-[#34443a]">No {type} in the catalog yet.</p>
                    <p className="mt-1 text-sm text-[#718075]">
                        Add products to the server to see them listed here.
                    </p>
                </div>
            )}
        </section>
    );
}

export default async function ServerPage() {
    const [phoneResult, laptopResult] = await Promise.all([
        getProducts("phone"),
        getProducts("laptop"),
    ]);
    const connected = phoneResult.connected && laptopResult.connected;

    return (
        <main className="min-h-screen bg-[#f3f4ee] text-[#17251e]">
            <div className="mx-auto max-w-7xl px-5 pb-10 sm:px-8 lg:px-10">
                <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[#d6ddd4] py-5">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#35493d]">
                        67 / Device index
                    </p>
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em]">
                        <span
                            className={`h-2 w-2 rounded-full ${connected ? "bg-[#25825e]" : "bg-[#d28a36]"}`}
                            aria-hidden="true"
                        />
                        <span className="text-[#526257]">
                            {connected ? "Server connected" : "Server unavailable"}
                        </span>
                    </div>
                </header>

                <section className="relative overflow-hidden border-b border-[#d6ddd4] py-12 sm:py-16 lg:py-20">
                    <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full border border-[#cbd5c9] sm:right-10 sm:top-2" />
                    <div className="pointer-events-none absolute -right-2 top-0 h-48 w-48 rounded-full border border-[#dce2d9] sm:right-18 sm:top-10" />
                    <div className="relative max-w-3xl">
                        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#47725d]">
                            Phones &amp; laptops / Curated inventory
                        </p>
                        <h1 className="mt-5 max-w-2xl text-5xl font-semibold leading-[1.02] tracking-tight text-[#17372b] sm:text-6xl lg:text-7xl">
                            Good devices.
                            <br />
                            Clear details.
                        </h1>
                        <p className="mt-5 max-w-xl text-base leading-7 text-[#59675c] sm:text-lg">
                            Explore the collection by brand, model, year, and price. Every listing is pulled straight from your product server.
                        </p>
                        <nav aria-label="Product categories" className="mt-8 flex flex-wrap gap-3">
                            <a
                                href="#phones"
                                className="border border-[#1d5944] bg-[#1d5944] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#164632]"
                            >
                                Browse phones <span aria-hidden="true">↘</span>
                            </a>
                            <a
                                href="#laptops"
                                className="border border-[#b9c5b9] px-5 py-3 text-sm font-semibold text-[#294336] transition-colors hover:border-[#1d5944]"
                            >
                                Browse laptops <span aria-hidden="true">↘</span>
                            </a>
                        </nav>
                    </div>
                    {!connected && (
                        <p className="relative mt-8 max-w-2xl border-l-2 border-[#d49b48] pl-4 text-sm leading-6 text-[#6c6554]">
                            Connect your product server at {API_BASE_URL} to load live inventory.
                            You can change this address with the PRODUCTS_API_URL environment variable.
                        </p>
                    )}
                </section>

                <ProductSection
                    id="phones"
                    title="Phones"
                    eyebrow="Pocket-sized, ready for anything"
                    type="phone"
                    products={phoneResult.products}
                />
                <ProductSection
                    id="laptops"
                    title="Laptops"
                    eyebrow="Built for the bigger picture"
                    type="laptop"
                    products={laptopResult.products}
                />

                <footer className="flex flex-wrap justify-between gap-2 border-t border-[#d6ddd4] py-5 text-xs font-medium uppercase tracking-[0.12em] text-[#778278]">
                    <span>67 Device index</span>
                    <span>Phone + computer collection</span>
                </footer>
            </div>
        </main>
    );
}