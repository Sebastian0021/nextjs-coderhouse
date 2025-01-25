import { NextResponse } from "next/server";
import { db } from "@/firebase/config";
import { collection, doc, getDoc } from "firebase/firestore";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ productId: string; category: string }> }
) {
  try {
    const { productId, category } = await params;
    const productCollection = collection(db, "products");
    const refDoc = doc(productCollection, productId);
    const product = await getDoc(refDoc);

    if (!product.exists() || product.data().category !== category) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ ...product.data(), id: product.id });
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
