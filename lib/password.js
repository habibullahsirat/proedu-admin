import bcrypt from "bcryptjs";

export async function verifyPassword(password) {
  const hash = process.env.ADMIN_PASSWORD_HASH;

  if (!hash) {
    throw new Error("ADMIN_PASSWORD_HASH is not configured");
  }

  return await bcrypt.compare(password, hash);
}
