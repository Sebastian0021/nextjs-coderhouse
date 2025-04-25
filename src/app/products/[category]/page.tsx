export const dynamic = "force-dynamic";
import ProductsAside from "@/app/components/ProductsAside";
import Products from "../../components/Products";
import { Product } from "@/types/product";
import React from "react";

const Caregory = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const { category } = await params;

  let products: Product[] = [];
const baseUrl = typeof window === "undefined" ? process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000" : "";
try {
  const res = await fetch(`${baseUrl}/api/products/${category}`);
  if (!res.ok) throw new Error('Failed to fetch products');
  products = await res.json();
} catch (error) {
  // Puedes mostrar un mensaje de error o dejar el array vacío
  console.error('Error fetching products:', error);
}

  return (
    <div className="container mx-auto p-4 grid grid-cols-12 gap-4">
      <ProductsAside currentCategory={category} />
      <div className="col-span-9">
        <Products products={products} />
      </div>
    </div>
  );
};

export default Caregory;
