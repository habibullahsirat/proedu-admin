import { connectDB } from "@/lib/mongodb";
import { success, error } from "@/lib/apiResponse";

import SuccessfulStudent from "@/models/SuccessfulStudent";

export async function GET(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);

    const limit = Number(searchParams.get("limit"));

    let query = SuccessfulStudent.find().select("image name department").sort({
      createdAt: -1,
    });

    if (limit > 0) {
      query = query.limit(limit);
    }

    const students = await query;

    return success(students);
  } catch (err) {
    console.error(err);

    return error(err.message);
  }
}
