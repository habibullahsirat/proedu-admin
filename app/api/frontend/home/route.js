import { connectDB } from "@/lib/mongodb";
import { success, error } from "@/lib/apiResponse";

import Hero from "@/models/Hero";
import About from "@/models/About";
import Course from "@/models/Course";
import SuccessfulStudent from "@/models/SuccessfulStudent";
import Feedback from "@/models/Feedback";
import FAQ from "@/models/FAQ";
import Company from "@/models/Company";

export async function GET() {
  try {
    await connectDB();

    const [hero, about, courses, successfulStudents, feedback, faq, companies] =
      await Promise.all([
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
      ]);

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
