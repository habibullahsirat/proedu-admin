import cloudinary from "./cloudinary";

export async function deleteImage(public_id) {
  if (!public_id) return;

  return await cloudinary.uploader.destroy(public_id);
}
