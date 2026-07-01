import FAQ from "@/models/FAQ";

import { getDocuments } from "@/lib/crud/getDocuments";
import { createDocument } from "@/lib/crud/createDocument";

import { createFaqSchema } from "@/validations/faq";

export async function GET() {
  return getDocuments(FAQ);
}

export async function POST(request) {
  return createDocument(request, FAQ, createFaqSchema, null);
}
