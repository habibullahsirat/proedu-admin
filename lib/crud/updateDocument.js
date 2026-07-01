import { connectDB } from "@/lib/mongodb";
import { success, error } from "@/lib/apiResponse";
import { validate } from "@/lib/validate";
import { deleteImage } from "@/lib/deleteImage";

export async function updateDocument(
  request,
  Model,
  updateSchema,
  id,
  imageField = "image",
) {
  try {
    await connectDB();

    const auth = await requireAdmin();

    if (!auth.success) {
      return auth.response;
    }

    const body = await request.json();

    // Validate only the incoming fields
    const validationError = validate(updateSchema, body);

    if (validationError) {
      return validationError;
    }

    const document = await Model.findById(id);

    if (!document) {
      return error("Document not found", 404);
    }

    // Save old image public_id in case image is replaced
    const oldPublicId = document[imageField]?.public_id;

    // Apply updates
    Object.assign(document, body);

    // Save document (runs mongoose validation & middleware)
    await document.save();

    // Delete old Cloudinary image only after successful save
    if (
      body[imageField] &&
      oldPublicId &&
      body[imageField].public_id !== oldPublicId
    ) {
      try {
        await deleteImage(oldPublicId);
      } catch (cloudinaryError) {
        console.error(
          "Failed to delete old Cloudinary image:",
          cloudinaryError,
        );
      }
    }

    return success(document, "Updated successfully");
  } catch (err) {
    console.error(err);

    // Duplicate key (e.g. email)
    if (err.code === 11000) {
      const field = Object.keys(err.keyPattern)[0];

      return error(`${field} already exists`, 409);
    }

    return error(err.message);
  }
}
