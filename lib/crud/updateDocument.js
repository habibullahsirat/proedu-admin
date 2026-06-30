import { connectDB } from "@/lib/mongodb";
import { success, error } from "@/lib/apiResponse";
import { validate } from "@/lib/validate";
import { deleteImage } from "@/lib/deleteImage";

export async function updateDocument(
  request,
  Model,
  schema,
  id,
  imageField = "image",
) {
  try {
    await connectDB();

    const body = await request.json();

    const validationError = validate(schema, body);

    if (validationError) {
      return validationError;
    }

    const oldDocument = await Model.findById(id);

    if (!oldDocument) {
      return error("Document not found", 404);
    }

    if (
      body[imageField] &&
      oldDocument[imageField]?.public_id &&
      body[imageField].public_id !== oldDocument[imageField].public_id
    ) {
      await deleteImage(oldDocument[imageField].public_id);
    }

    const updated = await Model.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    return success(updated, "Updated successfully");
  } catch (err) {
    console.error(err);

    return error(err.message);
  }
}
