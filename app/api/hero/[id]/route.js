import Hero from "@/models/Hero";

import { getDocument } from "@/lib/crud/getDocument";
import { updateDocument } from "@/lib/crud/updateDocument";
import { deleteDocument } from "@/lib/crud/deleteDocument";

import { updateHeroSchema } from "@/validations/hero";

export async function GET(request, { params }) {
  const { id } = await params;

  return getDocument(Hero, id);
}

export async function PATCH(request, { params }) {
  return updateDocument(request, Hero, updateHeroSchema, params.id);
}

export async function DELETE(request, { params }) {
  return deleteDocument(Hero, params.id);
}
