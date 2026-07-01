import { connectDB } from "@/lib/mongodb";
import { success, error } from "@/lib/apiResponse";
import { deleteImage } from "@/lib/deleteImage";

export async function deleteDocument(Model, id, imageField = "image") {
  try {
    await connectDB();

    const document = await Model.findById(id);

    if (!document) {
      return error("Document not found", 404);
    }

    // Delete Cloudinary image only if this model has one
    if (imageField) {
      const image = document[imageField];

      if (image?.public_id) {
        try {
          await deleteImage(image.public_id);
        } catch (cloudinaryError) {
          console.error("Cloudinary delete failed:", cloudinaryError);
        }
      }
    }

    await document.deleteOne();

    return success({}, "Deleted successfully");
  } catch (err) {
    console.error(err);

    return error(err.message);
  }
}
