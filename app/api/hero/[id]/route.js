import Hero from "@/models/Hero";

import { getDocument } from "@/lib/crud/getDocument";

import { updateDocument } from "@/lib/crud/updateDocument";

import { deleteDocument } from "@/lib/crud/deleteDocument";

import { heroSchema } from "@/validations/hero";

export async function GET(req, { params }) {
  return getDocument(Hero, params.id);
}

export async function PATCH(req, { params }) {
  return updateDocument(req, Hero, heroSchema, params.id);
}

export async function DELETE(req, { params }) {
  return deleteDocument(Hero, params.id);
}
