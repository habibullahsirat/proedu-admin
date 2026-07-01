import { connectDB } from "@/lib/mongodb";
import { success, error } from "@/lib/apiResponse";
import { validate } from "@/lib/validate";

export async function createDocument(
  request,
  Model,
  createSchema,
  imageField = "image",
  options = {},
) {
  try {
    await connectDB();

    const body = await request.json();

    const validationError = validate(createSchema, body);

    if (validationError) {
      return validationError;
    }

    // Image validation
    if (
      !body[imageField] ||
      !body[imageField].url ||
      !body[imageField].public_id
    ) {
      return error(`${imageField} is required`);
    }

    // Only one active document (Hero, About, etc.)
    if (options.activeField && body[options.activeField] === true) {
      await Model.updateMany(
        {},
        {
          [options.activeField]: false,
        },
      );
    }

    const document = await Model.create(body);

    return success(document, "Created successfully", 201);
  } catch (err) {
    console.error(err);

    return error(err.message);
  }
}
