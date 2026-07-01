import Feedback from "@/models/Feedback";

import { getDocument } from "@/lib/crud/getDocument";
import { updateDocument } from "@/lib/crud/updateDocument";
import { deleteDocument } from "@/lib/crud/deleteDocument";

import { updateFeedbackSchema } from "@/validations/feedback";

export async function GET(request, { params }) {
  const { id } = await params;

  return getDocument(Feedback, id);
}

export async function PATCH(request, { params }) {
  const { id } = await params;

  return updateDocument(request, Feedback, updateFeedbackSchema, id);
}

export async function DELETE(request, { params }) {
  const { id } = await params;

  return deleteDocument(Feedback, id);
}
