import { NextResponse } from "next/server";
import { db } from "@/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ category: string }> }
): Promise<NextResponse> {
  const { category } = await params;

  try {
    const productCollection = collection(db, "products");

    const q = query(productCollection, where("category", "==", category));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return NextResponse.json({ error: "No products found" }, { status: 404 });
    }

    const products = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    return NextResponse.json(products);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error fetching products" },
      { status: 500 }
    );
  }
}
