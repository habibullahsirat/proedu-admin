import { connectDB } from "@/lib/mongodb";
import { success, error } from "@/lib/apiResponse";

export async function getDocument(Model, id, options = {}) {
  try {
    await connectDB();

    const { select = "", populate = "" } = options;

    let query = Model.findById(id);

    if (select) {
      query = query.select(select);
    }

    if (populate) {
      query = query.populate(populate);
    }

    const document = await query;

    if (!document) {
      return error("Document not found", 404);
    }

    return success(document);
  } catch (err) {
    console.error(err);

    return error(err.message);
  }
}
