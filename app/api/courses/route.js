import { connectDB } from "@/lib/mongodb";
import { success, error } from "@/lib/apiResponse";
import Course from "@/models/Course";

export async function GET() {
  try {
    await connectDB();

    const courses = await Course.find().sort({ createdAt: -1 });

    return success(courses);
  } catch (err) {
    return error(err.message);
  }
}

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();

    const course = await Course.create(body);

    return success(course, "Course created", 201);
  } catch (err) {
    return error(err.message);
  }
}
