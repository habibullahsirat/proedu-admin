import { connectDB } from "@/lib/mongodb";
import { success, error } from "@/lib/apiResponse";

import Feedback from "@/models/Feedback";

export async function GET(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);

    const limit = Number(searchParams.get("limit"));

    let query = Feedback.find()
      .select("feedback rating image name department")
      .sort({
        createdAt: -1,
      });

    if (limit > 0) {
      query = query.limit(limit);
    }

    const feedback = await query;

    return success(feedback);
  } catch (err) {
    console.error(err);

    return error(err.message);
  }
}
