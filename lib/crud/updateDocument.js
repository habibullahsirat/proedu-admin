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
  options = {},
) {
  try {
    await connectDB();

    const body = await request.json();

    const document = await Model.findById(id);

    if (!document) {
      return error("Document not found", 404);
    }

    // Merge current data with updates
    const mergedData = {
      ...document.toObject(),
      ...body,
    };

    // Validate merged data
    const validationError = validate(updateSchema, mergedData);

    if (validationError) {
      return validationError;
    }

    // Delete old Cloudinary image if changed
    if (
      body[imageField] &&
      document[imageField]?.public_id &&
      body[imageField].public_id !== document[imageField].public_id
    ) {
      await deleteImage(document[imageField].public_id);
    }

    // Only one active document
    if (options.activeField && body[options.activeField] === true) {
      await Model.updateMany(
        {
          _id: { $ne: id },
        },
        {
          [options.activeField]: false,
        },
      );
    }

    // Apply updates
    Object.assign(document, body);

    await document.save();

    return success(document, "Updated successfully");
  } catch (err) {
    console.error(err);

    return error(err.message);
  }
}
