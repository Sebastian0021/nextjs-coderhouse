import Hero from "./components/Hero";
import Products from "./components/Products";

export const metadata = {
  title: "Home",
  description: "Home de la tienda",
  keywords: ["home", "tienda", "tienda online"],
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Products />
    </main>
  );
}
