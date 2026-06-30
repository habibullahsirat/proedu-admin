import { connectDB } from "@/lib/mongodb";
import { success, error } from "@/lib/apiResponse";
import Course from "@/models/Course";

export async function GET(req, { params }) {
  try {
    await connectDB();

    const course = await Course.findById(params.id);

    if (!course) return error("Course not found", 404);

    return success(course);
  } catch (err) {
    return error(err.message);
  }
}

export async function PATCH(req, { params }) {
  try {
    await connectDB();

    const body = await req.json();

    const course = await Course.findByIdAndUpdate(params.id, body, {
      new: true,
    });

    if (!course) return error("Course not found", 404);

    return success(course, "Course updated");
  } catch (err) {
    return error(err.message);
  }
}

export async function DELETE(req, { params }) {
  try {
    await connectDB();

    const course = await Course.findByIdAndDelete(params.id);

    if (!course) return error("Course not found", 404);

    return success({}, "Course deleted");
  } catch (err) {
    return error(err.message);
  }
}
