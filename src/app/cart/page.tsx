import CartProducts from "../components/CartProducts";

export const metadata = {
  title: "Cart",
  description: "Ver y manejar items en carrito",
};

const Cart = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Cart</h1>
      <ul className="space-y-4">
        <CartProducts />
      </ul>
    </div>
  );
};

export default Cart;
