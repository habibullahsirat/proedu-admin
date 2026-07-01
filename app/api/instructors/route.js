import Instructor from "@/models/Instructor";

import { getDocuments } from "@/lib/crud/getDocuments";
import { createDocument } from "@/lib/crud/createDocument";

import { instructorSchema } from "@/validations/instructor";

export async function GET() {
  return getDocuments(Instructor);
}

export async function POST(request) {
  return createDocument(request, Instructor, instructorSchema);
}
