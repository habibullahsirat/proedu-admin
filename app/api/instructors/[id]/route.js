import Instructor from "@/models/Instructor";

import { getDocument } from "@/lib/crud/getDocument";
import { updateDocument } from "@/lib/crud/updateDocument";
import { deleteDocument } from "@/lib/crud/deleteDocument";

import { updateInstructorSchema } from "@/validations/instructor";

export async function GET(request, { params }) {
  const { id } = await params;

  return getDocument(Instructor, id);
}

export async function PATCH(request, { params }) {
  const { id } = await params;
  return updateDocument(request, Instructor, updateInstructorSchema, id);
}

export async function DELETE(request, { params }) {
  const { id } = await params;
  return deleteDocument(Instructor, id);
}
