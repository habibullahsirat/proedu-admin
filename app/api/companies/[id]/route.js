import Company from "@/models/Company";

import { getDocument } from "@/lib/crud/getDocument";
import { updateDocument } from "@/lib/crud/updateDocument";
import { deleteDocument } from "@/lib/crud/deleteDocument";

import { updateCompanySchema } from "@/validations/company";

export async function GET(request, { params }) {
  const { id } = await params;

  return getDocument(Company, id);
}

export async function PATCH(request, { params }) {
  const { id } = await params;

  return updateDocument(request, Company, updateCompanySchema, id, "logo");
}

export async function DELETE(request, { params }) {
  const { id } = await params;

  return deleteDocument(Company, id);
}
