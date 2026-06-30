import { connectDB } from "@/lib/mongodb";
import { uploadImage } from "@/lib/uploadImage";
import { success, error } from "@/lib/apiResponse";

export async function POST(request) {
  try {
    await connectDB();

    const formData = await request.formData();

    const file = formData.get("image");

    if (!file) {
      return error("Image is required", 400);
    }

    const image = await uploadImage(file);

    return success(image, "Image uploaded successfully", 201);
  } catch (err) {
    console.error(err);

    return error(err.message);
  }
}
