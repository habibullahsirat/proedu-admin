import { connectDB } from "@/lib/mongodb";
import { success, error } from "@/lib/apiResponse";

import FAQ from "@/models/FAQ";

export async function GET() {
  try {
    await connectDB();

    const faq = await FAQ.find().select("question answer").sort({
      createdAt: -1,
    });

    return success(faq);
  } catch (err) {
    console.error(err);

    return error(err.message);
  }
}
