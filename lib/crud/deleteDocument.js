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

    if (document[imageField] && document[imageField].public_id) {
      await deleteImage(document[imageField].public_id);
    }

    await Model.findByIdAndDelete(id);

    return success({}, "Deleted successfully");
  } catch (err) {
    console.error(err);

    return error(err.message);
  }
}
