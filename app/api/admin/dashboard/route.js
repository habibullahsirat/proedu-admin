import { connectDB } from "@/lib/mongodb";
import { success, error } from "@/lib/apiResponse";

import Course from "@/models/Course";
import Instructor from "@/models/Instructor";
import Student from "@/models/Student";
import Feedback from "@/models/Feedback";
import Company from "@/models/Company";

export async function GET() {
  try {
    await connectDB();

    const [
      totalCourses,
      totalInstructors,
      totalStudents,
      totalReviews,
      totalCompanies,
      recentCourses,
      recentStudents,
    ] = await Promise.all([
      Course.countDocuments(),

      Instructor.countDocuments(),

      Student.countDocuments(),

      Feedback.countDocuments(),

      Company.countDocuments(),

      Course.find()
        .sort({
          createdAt: -1,
        })
        .limit(5)
        .select("title price createdAt"),

      Student.find()
        .sort({
          createdAt: -1,
        })
        .limit(5)
        .select("name department createdAt"),
    ]);

    return success({
      statistics: {
        totalCourses,
        totalInstructors,
        totalStudents,
        totalReviews,
        totalCompanies,
      },

      recentCourses,

      recentStudents,
    });
  } catch (err) {
    console.error(err);

    return error(err.message);
  }
}
