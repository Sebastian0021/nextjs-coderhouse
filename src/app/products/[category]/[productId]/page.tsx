import React from "react";
import Image from "next/image";
// import Link from "next/link";
import QtySelector from "@/app/components/QtySelector";

const page = async ({
  params,
}: {
  params: Promise<{ productId: string; category: string }>;
}) => {
  const { productId, category } = await params;

  const product = await fetch(
    `http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/products/${category}/${productId}`
  ).then((res) => res.json());

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
      {/* <Link href={`/cart?productId=${product.id}`}> */}
      <QtySelector product={product} />
      {/* </Link> */}
    </div>
  );
};

export default page;
