import React from "react";
import Link from "next/link";

const ProductsAside = ({ currentCategory }: { currentCategory: string }) => {
  const categories = [
    { name: "Todos", href: "/products" },
    { name: "Camisas", href: "/products/camisas" },
    { name: "Pantalones", href: "/products/pantalones" },
    { name: "Gorras", href: "/products/gorras" },
  ];

  return (
    <aside className="col-span-3">
      <h2 className="text-2xl font-bold">Categorías</h2>
      <ul className="mt-4 space-y-2">
        {categories.map((category) => (
          <li key={category.name}>
            <Link
              href={category.href}
              className={`block p-2 rounded-md ${
                currentCategory === category.name.toLowerCase()
                  ? "bg-gray-100"
                  : ""
              } hover:bg-gray-100 transition-colors duration-300`}
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ProductsAside;
