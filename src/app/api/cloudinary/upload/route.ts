import { NextResponse } from "next/server";
import { v2 as cloudinary, UploadApiResponse } from "cloudinary";

// Configuration
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_CLOUDINARY_API_SECRET,
});

export async function POST(request: Request) {
  const data = await request.formData();

  const file = data.get("file") as File;

  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const response = await new Promise<UploadApiResponse | undefined>(
    (resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { resource_type: "image" },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
      uploadStream.end(buffer);
    }
  );

  if (!response) {
    return NextResponse.json(
      { error: "Error uploading file" },
      { status: 500 }
    );
  }

  return NextResponse.json({
    message: "success",
    url: response.secure_url as string,
  });
}
