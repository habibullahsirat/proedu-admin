import Course from "@/models/Course";

import { getDocument } from "@/lib/crud/getDocument";
import { updateDocument } from "@/lib/crud/updateDocument";
import { deleteDocument } from "@/lib/crud/deleteDocument";

import { updateCourseSchema } from "@/validations/course";

export async function GET(request, { params }) {
  const { id } = await params;

  return getDocument(Course, id);
}

export async function PATCH(request, { params }) {
  return updateDocument(request, Course, updateCourseSchema, params.id);
}

export async function DELETE(request, { params }) {
  return deleteDocument(Course, params.id);
}
