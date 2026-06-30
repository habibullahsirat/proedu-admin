import { connectDB } from "@/lib/mongodb";
import { success, error } from "@/lib/apiResponse";

export async function getDocuments(Model, options = {}) {
  try {
    await connectDB();

    const {
      filter = {},
      sort = { createdAt: -1 },
      select = "",
      populate = "",
    } = options;

    let query = Model.find(filter);

    if (select) {
      query = query.select(select);
    }

    if (populate) {
      query = query.populate(populate);
    }

    query = query.sort(sort);

    const documents = await query;

    return success(documents);
  } catch (err) {
    console.error(err);

    return error(err.message);
  }
}
