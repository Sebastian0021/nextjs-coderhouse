"use client";
import { useState } from "react";
import { useCartContext } from "../context/CartContext";
import { Product } from "@/types/product";
import Link from "next/link";
interface QtySelectorProps {
  product: Product;
}

const QtySelector: React.FC<QtySelectorProps> = ({ product }) => {
  const { addProductToCart, getProductQuantity } = useCartContext();

  const [quantity, setQuantity] = useState<number>(
    getProductQuantity(product.id) || 0
  );

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    addProductToCart({ ...product, quantity });
  };

  return (
    <div className="flex items-center">
      <button
        onClick={handleDecrement}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
      >
        -
      </button>
      <span className="bg-gray-200 px-4 py-2 rounded-t">{quantity}</span>
      <button
        onClick={handleIncrement}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
      >
        +
      </button>
      <Link href="/cart">
        <button
          onClick={handleAddToCart}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded"
        >
          Agregar al carrito
        </button>
      </Link>
    </div>
  );
};

export default QtySelector;
