import Course from "@/models/Course";

import { getDocuments } from "@/lib/crud/getDocuments";
import { createDocument } from "@/lib/crud/createDocument";

import { courseSchema } from "@/validations/course";

export async function GET() {
  return getDocuments(Course);
}

export async function POST(request) {
  return createDocument(request, Course, courseSchema);
}
