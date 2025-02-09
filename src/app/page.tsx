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
  const products = await fetch(
    `http://${process.env.VERCEL_URL}}/api/products`
  ).then((res) => res.json() as Promise<Product[]>);
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
