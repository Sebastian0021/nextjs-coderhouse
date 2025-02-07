"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/types/product";
type CartProductType = Product & {
  quantity: number;
};

type CartContextType = {
  cart: CartProductType[];
  addProductToCart: (product: CartProductType) => void;
  removeProductFromCart: (productId: string) => void;
  getProductQuantity: (productId: string) => number;
};

const CartContext = createContext<CartContextType>({
  cart: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  getProductQuantity: () => 0,
});

export const useCartContext = () => useContext(CartContext);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartProductType[]>([]);

  const addProductToCart = (product: CartProductType) => {
    if (!cart.some((item) => item.id === product.id)) {
      setCart([...cart, product]);
    } else {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: product.quantity }
            : item
        )
      );
    }
  };

  const removeProductFromCart = (productId: string) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  const getProductQuantity = (productId: string) => {
    return cart.find((product) => product.id === productId)?.quantity || 0;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        removeProductFromCart,
        getProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
