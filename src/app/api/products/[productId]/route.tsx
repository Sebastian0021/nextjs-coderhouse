import { NextResponse } from "next/server";
import { db } from "@/firebase/config";
import { collection, doc, getDoc } from "firebase/firestore";

export async function GET(
  _req: Request,
  { params }: { params: { productId: string } }
) {
  const productCollection = collection(db, "products");
  const refDoc = doc(productCollection, params.productId);
  const product = await getDoc(refDoc);

  return NextResponse.json({ ...product.data(), id: product.id });
}
