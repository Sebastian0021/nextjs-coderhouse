export const dynamic = "force-dynamic";
// "use client";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { Product } from "@/types/product";
// import { db } from "@/firebase/config";
// import { collection, addDoc } from "firebase/firestore";

export const metadata = {
  title: "Home",
  description: "Home de la tienda",
  keywords: ["home", "tienda", "tienda online"],
};

export default async function Home() {
  let products: Product[] = [];
const baseUrl = typeof window === "undefined" ? process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000" : "";
try {
  const res = await fetch(`${baseUrl}/api/products`);
  if (!res.ok) throw new Error('Failed to fetch products');
  products = await res.json();
} catch (error) {
  // Puedes mostrar un mensaje de error o dejar el array vacío
  console.error('Error fetching products:', error);
}
  console.log("PRODUCTS HOME:", products);
  return (
    <main>
      <Hero />
      <Products products={products} />
      {/* <button
        onClick={() => {
          const collectionRef = collection(db, "products");
          products.forEach((product) => {
            addDoc(collectionRef, product);
          });
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Products
      </button> */}
    </main>
  );
}
