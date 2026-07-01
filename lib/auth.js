import { cookies } from "next/headers";
import { verifyToken } from "./jwt";

export async function requireAdmin() {
  const cookieStore = await cookies();

  const token = cookieStore.get("admin-token")?.value;

  if (!token) {
    throw new Error("Unauthorized");
  }

  return await verifyToken(token);
}
