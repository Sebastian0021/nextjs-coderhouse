"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { db } from "@/firebase/config";
import { updateDoc, doc } from "firebase/firestore";
import { Product } from "@/types/product";

const EditForm: React.FC<{ product: Product }> = ({ product }) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [category, setCategory] = useState(product.category);
  const [image, setImage] = useState<File | null>(null);
  const [description, setDescription] = useState(product.description);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await updateDoc(doc(db, "products", product.id), {
        name,
        price,
        category,
        image: image ? await uploadImage(image) : product.image,
        description,
      });

      console.log("Document written with ID: ", product.id);
      router.push("/admin");
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  };

  const uploadImage = async (image: File) => {
    const formData = new FormData();
    formData.append("file", image);

    const response = await fetch(
      `/api/cloudinary/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const file = await response.json();
    return file.url;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Category:
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="gorras">Gorras</option>
            <option value="pantalones">Pantalones</option>
            <option value="camisas">Camisas</option>
          </select>
        </label>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Image:
          <input
            type="file"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
        </label>
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Edit
      </button>
    </form>
  );
};

export default EditForm;
