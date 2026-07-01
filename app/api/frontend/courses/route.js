import { connectDB } from "@/lib/mongodb";
import { success, error } from "@/lib/apiResponse";

import Course from "@/models/Course";

export async function GET(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);

    const limit = Number(searchParams.get("limit"));

    let query = Course.find().select("image title description price").sort({
      createdAt: -1,
    });

    if (limit > 0) {
      query = query.limit(limit);
    }

    const courses = await query;

    return success(courses);
  } catch (err) {
    console.error(err);

    return error(err.message);
  }
}
