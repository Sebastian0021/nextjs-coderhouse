"use client";
import { RiDeleteBin2Line } from "react-icons/ri";
import { db } from "@/firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

const DeleteProductBtn = ({ productId }: { productId: string }) => {
  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "products", productId));
      alert("Product deleted successfully");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <button
      className="w-4 mr-2 transform hover:text-red-500 hover:scale-110"
      onClick={handleDelete}
    >
      <RiDeleteBin2Line />
    </button>
  );
};

export default DeleteProductBtn;
