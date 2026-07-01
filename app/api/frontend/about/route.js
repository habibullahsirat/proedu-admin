import { connectDB } from "@/lib/mongodb";
import { success, error } from "@/lib/apiResponse";

import About from "@/models/About";
import Course from "@/models/Course";
import Instructor from "@/models/Instructor";
import Feedback from "@/models/Feedback";

export async function GET() {
  try {
    await connectDB();

    const [about, totalCourses, totalExperts, totalReviews, feedback] =
      await Promise.all([
        About.findOne({ isActive: true }).select(
          "image title description buttonText",
        ),

        Course.countDocuments(),

        Instructor.countDocuments(),

        Feedback.countDocuments(),

        Feedback.find().select("rating"),
      ]);

    if (!about) {
      return success(null);
    }

    const totalRatings = feedback.reduce((sum, item) => sum + item.rating, 0);

    return success({
      ...about.toObject(),

      totalCourses,

      totalExperts,

      totalRatings,

      totalReviews,
    });
  } catch (err) {
    console.error(err);

    return error(err.message);
  }
}
