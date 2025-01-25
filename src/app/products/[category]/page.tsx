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

  const products = await fetch(
    `http://localhost:3000/api/products/${category}`
  ).then((res) => res.json() as Promise<Product[]>);

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
