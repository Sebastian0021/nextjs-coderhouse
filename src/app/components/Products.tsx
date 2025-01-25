import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/product";

const Products: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <section className="bg-white py-8 px-4">
      <h2 className="text-3xl font-bold mb-4">Products</h2>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <li key={product.id} className="bg-gray-100 p-4 rounded-lg">
            <Link href={`/products/${product.category}/${product.id}`}>
              <div className="block w-full h-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 md:h-96 lg:h-120 object-cover"
                  width={400}
                  height={267}
                />
                <h3 className="text-lg font-bold my-2">{product.name}</h3>
                <p className="text-gray-600">${product.price}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Products;
