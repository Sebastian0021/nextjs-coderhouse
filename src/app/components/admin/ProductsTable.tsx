// "use client";
// import { useState, useEffect } from "react";
// import { db } from "@/firebase/config";
// import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
import { Product } from "@/types/product";
import Image from "next/image";
import { RiEdit2Line, RiDeleteBin2Line } from "react-icons/ri";

export default async function ProductsTable() {
  //   const [products, setProducts] = useState<Product[]>([]);
  //   const [search, setSearch] = useState("");

  //   useEffect(() => {
  //     const getProducts = async () => {
  //       const q = query(
  //         collection(db, "products"),
  //         where("published", "==", true),
  //         orderBy("created_at", "desc")
  //       );
  //       const querySnapshot = await getDocs(q);
  //       setProducts(querySnapshot.docs.map((doc) => doc.data() as Product));
  //     };
  //     getProducts();
  //   }, []);

  const products = await fetch("http://localhost:3000/api/products").then(
    (res) => res.json() as Promise<Product[]>
  );

  return (
    <div className="overflow-x-auto">
      <div className="min-w-screen min-h-screen bg-gray-100 text-gray-900 flex justify-center bg-gray-100 font-sans overflow-hidden">
        <div className="w-full lg:w-5/6">
          <div className="bg-white shadow-md rounded my-6">
            <table className="min-w-max w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Nombre</th>
                  <th className="py-3 px-6 text-left">Precio</th>
                  <th className="py-3 px-6 text-left">Categoría</th>
                  <th className="py-3 px-6 text-left">Acciones</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {products.map((product) => (
                  <tr
                    key={product.id}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <Image
                            className="w-6 h-6 rounded-full"
                            src={product.image}
                            alt={product.name}
                            width={100}
                            height={100}
                          />
                        </div>
                        <span className="font-medium">{product.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">${product.price}</td>
                    <td className="py-3 px-6 text-left">{product.category}</td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex item-center justify-center">
                        <button className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                          <RiEdit2Line />
                        </button>
                        <button className="w-4 mr-2 transform hover:text-red-500 hover:scale-110">
                          <RiDeleteBin2Line />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <div className="w-full lg:w-5/6">
        <div className="bg-white shadow-md rounded my-6">
          <div className="flex justify-between p-4">
            <span className="text-xl font-bold">Productos</span>
            <input
              type="search"
              //   value={search}
              //   onChange={(e) => setSearch(e.target.value)}
              className="border-2 border-gray-300 rounded-md p-2"
              placeholder="Buscar producto"
            />
          </div>
        </div>
      </div> */}
    </div>
  );
}
