import Hero from "./components/Hero";
import Products from "./components/Products";
import { products } from "../mock/mock";

export const metadata = {
  title: "Home",
  description: "Home de la tienda",
  keywords: ["home", "tienda", "tienda online"],
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Products products={products} />
    </main>
  );
}
