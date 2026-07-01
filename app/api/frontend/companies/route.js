import { connectDB } from "@/lib/mongodb";
import { success, error } from "@/lib/apiResponse";

import Company from "@/models/Company";

export async function GET(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);

    const limit = Number(searchParams.get("limit"));

    let query = Company.find({
      isActive: true,
    })
      .select("logo name")
      .sort({
        createdAt: -1,
      });

    if (limit > 0) {
      query = query.limit(limit);
    }

    const companies = await query;

    return success(companies);
  } catch (err) {
    console.error(err);

    return error(err.message);
  }
}
