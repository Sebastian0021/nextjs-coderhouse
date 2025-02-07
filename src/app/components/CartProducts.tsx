"use client";

import Link from "next/link";
import Image from "next/image";
import { useCartContext } from "../context/CartContext";

const CartProducts = () => {
  const { cart, removeProductFromCart } = useCartContext();

  if (cart.length === 0) {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <p className="text-lg">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <ul className="space-y-4">
      {cart.map((item) => (
        <li key={item.id} className="flex items-center justify-between">
          <Link href={`/products/${item.category}/${item.id}`}>
            <div className="flex items-center">
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className="rounded-lg"
              />
              <span className="ml-4">
                {item.name} ({item.quantity})
              </span>
            </div>
          </Link>
          <div className="flex items-center">
            <span className="font-bold mr-4">${item.price}</span>
            <button
              onClick={() => removeProductFromCart(item.id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
            >
              Remove
            </button>
          </div>
        </li>
      ))}
      <p className="text-lg text-right">
        Total: $
        {cart.reduce((total, item) => total + item.price * item.quantity, 0)}
      </p>
    </ul>
  );
};

export default CartProducts;
