import EditForm from "@/app/components/admin/edit/EditForm";

const page = async ({
  params,
}: {
  params: Promise<{ productId: string; category: string }>;
}) => {
  const { productId, category } = await params;

  let product = null;
try {
  const res = await fetch(`/api/products/${category}/${productId}`);
  if (!res.ok) throw new Error('Failed to fetch product');
  product = await res.json();
} catch (error) {
  console.error('Error fetching product:', error);
  // Puedes mostrar un mensaje de error o devolver null
}
  console.log(product);

  if (!product) {
    return <div className="text-center text-3xl">Product not found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Edit Product</h1>
      <EditForm product={product} />
    </div>
  );
};

export default page;
