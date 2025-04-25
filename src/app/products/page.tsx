import Products from "../components/Products";
import { Product } from "@/types/product";
export const dynamic = "force-dynamic";
import ProductsAside from "../components/ProductsAside";
// const prouctsKeyWords = products.map((product) => product.name);

export const metadata = {
  title: "Products",
  description: "Products page",
  keywords: ["products", "tienda", "tienda online"],
};

const ProductsPage = async () => {
  let products: Product[] = [];
try {
  const res = await fetch(`/api/products`);
  if (!res.ok) throw new Error('Failed to fetch products');
  products = await res.json();
} catch (error) {
  // Puedes mostrar un mensaje de error o dejar el array vacío
  console.error('Error fetching products:', error);
}

  return (
    <div className="container mx-auto p-4 grid grid-cols-12 gap-4">
      <ProductsAside currentCategory={"todos"} />
      <div className="col-span-9">
        <Products products={products} />
      </div>
    </div>
  );
};

export default ProductsPage;
