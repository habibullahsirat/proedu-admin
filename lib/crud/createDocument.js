import { connectDB } from "@/lib/mongodb";
import { success, error } from "@/lib/apiResponse";
import { validate } from "@/lib/validate";
import { requireAdmin } from "@/lib/auth";

export async function createDocument(request, Model, schema) {
  try {
    await connectDB();
    const auth = await requireAdmin();

    if (!auth.success) {
      return auth.response;
    }

    const body = await request.json();

    const validationError = validate(schema, body);

    if (validationError) {
      return validationError;
    }

    const document = await Model.create(body);

    return success(document, "Created successfully", 201);
  } catch (err) {
    console.error(err);

    if (err.code === 11000) {
      const field = Object.keys(err.keyPattern)[0];

      return error(`${field} already exists`, 409);
    }

    return error(err.message);
  }
}
