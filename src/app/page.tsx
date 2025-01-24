// "use client";
import Hero from "./components/Hero";
import Products from "./components/Products";
// import { db } from "@/firebase/config";
// import { collection, addDoc } from "firebase/firestore";

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
