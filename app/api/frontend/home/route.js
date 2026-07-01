import { connectDB } from "@/lib/mongodb";
import { success, error } from "@/lib/apiResponse";

import Hero from "@/models/Hero";
import About from "@/models/About";
import Course from "@/models/Course";
import Instructor from "@/models/Instructor";
import SuccessfulStudent from "@/models/SuccessfulStudent";
import Feedback from "@/models/Feedback";
import FAQ from "@/models/FAQ";
import Company from "@/models/Company";

export async function GET() {
  try {
    await connectDB();

    const [
      hero,
      aboutDoc,
      courses,
      successfulStudents,
      feedback,
      faq,
      companies,
      totalCourses,
      totalExperts,
      totalReviews,
    ] = await Promise.all([
      Hero.findOne({ isActive: true }),

      About.findOne({ isActive: true }),

      Course.find().sort({
        createdAt: -1,
      }),

      SuccessfulStudent.find(),

      Feedback.find(),

      FAQ.find(),

      Company.find({
        isActive: true,
      }),

      Course.countDocuments(),

      Instructor.countDocuments(),

      Feedback.countDocuments(),
    ]);

    // Sum of all ratings
    const totalRatings = feedback.reduce((sum, item) => sum + item.rating, 0);

    const about = aboutDoc
      ? {
          ...aboutDoc.toObject(),

          totalCourses,

          totalExperts,

          totalRatings,

          totalReviews,
        }
      : null;

    return success({
      hero,
      about,
      courses,
      successfulStudents,
      feedback,
      faq,
      companies,
    });
  } catch (err) {
    console.error(err);

    return error(err.message);
  }
}

// import { NextResponse } from "next/server";

// export async function GET() {
//   return NextResponse.json({
//     success: true,
//     message: "Frontend Home API is working",
//   });
// }
