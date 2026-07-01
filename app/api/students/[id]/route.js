import Student from "@/models/Student";

import { getDocument } from "@/lib/crud/getDocument";
import { updateDocument } from "@/lib/crud/updateDocument";
import { deleteDocument } from "@/lib/crud/deleteDocument";

import { updateStudentSchema } from "@/validations/student";

export async function GET(request, { params }) {
  const { id } = await params;

  return getDocument(Student, id);
}

export async function PATCH(request, { params }) {
  const { id } = await params;

  return updateDocument(request, Student, updateStudentSchema, id);
}

export async function DELETE(request, { params }) {
  const { id } = await params;

  return deleteDocument(Student, id);
}
