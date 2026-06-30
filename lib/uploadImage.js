import cloudinary from "./cloudinary";

export async function uploadImage(file) {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "education",
      },
      (err, result) => {
        if (err) return reject(err);
        resolve(result.secure_url);
      },
    );

    stream.end(buffer);
  });
}
