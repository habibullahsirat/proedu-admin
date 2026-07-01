import About from "@/models/About";

import { getDocument } from "@/lib/crud/getDocument";
import { updateDocument } from "@/lib/crud/updateDocument";
import { deleteDocument } from "@/lib/crud/deleteDocument";

import { updateAboutSchema } from "@/validations/about";

export async function GET(request, { params }) {
  const { id } = await params;

  return getDocument(About, id);
}

export async function PATCH(request, { params }) {
  const { id } = await params;

  return updateDocument(request, About, updateAboutSchema, id, "image", {
    activeField: "isActive",
  });
}

export async function DELETE(request, { params }) {
  const { id } = await params;

  return deleteDocument(About, id);
}
