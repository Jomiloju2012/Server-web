import CreateProductForm from "@/Components/CreateProductForm";

export default async function CreateProductPage({ searchParams }) {
	const query = await searchParams;
	const initialType = query?.type === "laptop" ? "laptop" : "phone";

	return <CreateProductForm initialType={initialType} />;
}
