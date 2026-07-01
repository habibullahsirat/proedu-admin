import SuccessfulStudent from "@/models/SuccessfulStudent";

import { getDocument } from "@/lib/crud/getDocument";
import { updateDocument } from "@/lib/crud/updateDocument";
import { deleteDocument } from "@/lib/crud/deleteDocument";

import { updateSuccessfulStudentSchema } from "@/validations/successfulStudent";

export async function GET(request, { params }) {
  const { id } = await params;

  return getDocument(SuccessfulStudent, id);
}

export async function PATCH(request, { params }) {
  const { id } = await params;

  return updateDocument(
    request,
    SuccessfulStudent,
    updateSuccessfulStudentSchema,
    id,
  );
}

export async function DELETE(request, { params }) {
  const { id } = await params;

  return deleteDocument(SuccessfulStudent, id);
}
