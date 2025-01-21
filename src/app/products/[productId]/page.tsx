import React from "react";
import { products } from "../../../mock/mock";
import Image from "next/image";
import Link from "next/link";

const page = ({ params }: { params: { productId: string } }) => {
  const product = products.find((p) => p.id === params.productId);

  if (!product) {
    return <div className="text-center text-3xl">Product not found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <Image
        className="rounded-lg"
        src={product.image}
        alt={product.name}
        width={400}
        height={267}
      />
      <p className="text-lg my-4">{product.description}</p>
      <p className="text-2xl font-bold">${product.price}</p>
      <Link href={`/cart?productId=${product.id}`}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add to cart
        </button>
      </Link>
    </div>
  );
};

export default page;
