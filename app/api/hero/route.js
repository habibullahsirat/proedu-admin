import Hero from "@/models/Hero";

import { getDocuments } from "@/lib/crud/getDocuments";
import { createDocument } from "@/lib/crud/createDocument";

import { heroSchema } from "@/validations/hero";

export async function GET() {
  return getDocuments(Hero);
}

export async function POST(request) {
  return createDocument(request, Hero, heroSchema);
}
