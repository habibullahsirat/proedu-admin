import bcrypt from "bcryptjs";

export async function verifyPassword(password) {
  return bcrypt.compare(password, process.env.ADMIN_PASSWORD_HASH);
}
