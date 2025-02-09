import Products from "../components/Products";
import { Product } from "@/types/product";
import ProductsAside from "../components/ProductsAside";
// const prouctsKeyWords = products.map((product) => product.name);

export const metadata = {
  title: "Products",
  description: "Products page",
  keywords: ["products", "tienda", "tienda online"],
};

const ProductsPage = async () => {
  const products = await fetch(
    `http://${process.env.NEXT_PUBLIC_VERCEL_URL}}/api/products`
  ).then((res) => res.json() as Promise<Product[]>);

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
