import Feedback from "@/models/Feedback";

import { getDocuments } from "@/lib/crud/getDocuments";
import { createDocument } from "@/lib/crud/createDocument";

import { createFeedbackSchema } from "@/validations/feedback";

export async function GET() {
  return getDocuments(Feedback);
}

export async function POST(request) {
  return createDocument(request, Feedback, createFeedbackSchema);
}
