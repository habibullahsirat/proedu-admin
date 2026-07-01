import Instructor from "@/models/Instructor";

import { getDocument } from "@/lib/crud/getDocument";
import { updateDocument } from "@/lib/crud/updateDocument";
import { deleteDocument } from "@/lib/crud/deleteDocument";

import { updateInstructorSchema } from "@/validations/instructor";

export async function GET(request, { params }) {
  return getDocument(Instructor, params.id);
}

export async function PATCH(request, { params }) {
  return updateDocument(request, Instructor, updateInstructorSchema, params.id);
}

export async function DELETE(request, { params }) {
  return deleteDocument(Instructor, params.id);
}
