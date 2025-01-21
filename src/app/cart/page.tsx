import { FC } from "react";
import { Product } from "@/types/product";
import Link from "next/link";
import Image from "next/image";

interface CartProps {
  items: Product[];
}

const Cart: FC<CartProps> = ({ items = [] }) => {
  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Cart</h1>
        <p className="text-lg">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Cart</h1>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.id} className="flex items-center justify-between">
            <Link href={`/products/${item.id}`}>
              <div className="flex items-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
                <span className="ml-4">{item.name}</span>
              </div>
            </Link>
            <span className="font-bold">${item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
