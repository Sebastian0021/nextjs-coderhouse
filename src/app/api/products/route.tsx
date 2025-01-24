import { NextResponse } from "next/server";
import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";

export async function GET() {
  const productsRef = collection(db, "products");
  const productsSnapshot = await getDocs(productsRef);
  const products = productsSnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return NextResponse.json(products);
}
