import { connectDB } from "@/lib/mongodb";
import { success, error } from "@/lib/apiResponse";

import Instructor from "@/models/Instructor";

export async function GET(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);

    const limit = Number(searchParams.get("limit"));

    let query = Instructor.find().select("image name department details").sort({
      createdAt: -1,
    });

    if (limit > 0) {
      query = query.limit(limit);
    }

    const instructors = await query;

    return success(instructors);
  } catch (err) {
    console.error(err);

    return error(err.message);
  }
}
