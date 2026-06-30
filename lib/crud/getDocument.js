import { connectDB } from "@/lib/mongodb";
import { success, error } from "@/lib/apiResponse";

export async function getDocument(Model, id) {
  try {
    await connectDB();

    const document = await Model.findById(id);

    if (!document) {
      return error("Document not found", 404);
    }

    return success(document);
  } catch (err) {
    console.error(err);

    return error(err.message);
  }
}
