import SuccessfulStudent from "@/models/SuccessfulStudent";

import { getDocuments } from "@/lib/crud/getDocuments";
import { createDocument } from "@/lib/crud/createDocument";

import { createSuccessfulStudentSchema } from "@/validations/successfulStudent";

export async function GET() {
  return getDocuments(SuccessfulStudent);
}

export async function POST(request) {
  return createDocument(
    request,
    SuccessfulStudent,
    createSuccessfulStudentSchema,
  );
}
