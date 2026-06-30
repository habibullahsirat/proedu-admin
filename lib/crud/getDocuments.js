import { connectDB } from "@/lib/mongodb";
import { success, error } from "@/lib/apiResponse";

export async function getDocuments(Model) {
  try {
    await connectDB();

    const documents = await Model.find().sort({
      createdAt: -1,
    });

    return success(documents);
  } catch (err) {
    console.error(err);

    return error(err.message);
  }
}
