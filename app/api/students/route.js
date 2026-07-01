import Student from "@/models/Student";

import { getDocuments } from "@/lib/crud/getDocuments";
import { createDocument } from "@/lib/crud/createDocument";

import { createStudentSchema } from "@/validations/student";

export async function GET() {
  return getDocuments(Student);
}

export async function POST(request) {
  return createDocument(request, Student, createStudentSchema);
}
