import Company from "@/models/Company";

import { getDocuments } from "@/lib/crud/getDocuments";
import { createDocument } from "@/lib/crud/createDocument";

import { createCompanySchema } from "@/validations/company";

export async function GET() {
  return getDocuments(Company);
}

export async function POST(request) {
  return createDocument(request, Company, createCompanySchema, "logo");
}
