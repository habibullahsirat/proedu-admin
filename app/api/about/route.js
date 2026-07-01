import About from "@/models/About";

import { getDocuments } from "@/lib/crud/getDocuments";
import { createDocument } from "@/lib/crud/createDocument";

import { createAboutSchema } from "@/validations/about";

export async function GET() {
  return getDocuments(About);
}

// export async function POST(request) {
//   return createDocument(request, About, createAboutSchema);
// }

export async function POST(request) {
  return createDocument(request, About, createAboutSchema, "image", {
    activeField: "isActive",
  });
}
