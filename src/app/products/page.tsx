import { products } from "../../mock/mock";
import Products from "../components/Products";

const prouctsKeyWords = products.map((product) => product.name);

export const metadata = {
  title: "Products",
  description: "Products page",
  keywords: ["products", "tienda", "tienda online", ...prouctsKeyWords],
};

const ProductsPage = () => {
  return <Products products={products} />;
};

export default ProductsPage;
