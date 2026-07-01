import FAQ from "@/models/FAQ";

import { getDocument } from "@/lib/crud/getDocument";
import { updateDocument } from "@/lib/crud/updateDocument";
import { deleteDocument } from "@/lib/crud/deleteDocument";

import { updateFaqSchema } from "@/validations/faq";

export async function GET(request, { params }) {
  const { id } = await params;

  return getDocument(FAQ, id);
}

export async function PATCH(request, { params }) {
  const { id } = await params;

  return updateDocument(request, FAQ, updateFaqSchema, id, null);
}

export async function DELETE(request, { params }) {
  const { id } = await params;

  return deleteDocument(FAQ, id, null);
}
