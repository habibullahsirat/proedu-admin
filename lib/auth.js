import { cookies } from "next/headers";
import { verifyToken } from "./jwt";
import { error } from "./apiResponse";
import { AUTH_COOKIE_NAME } from "./constants";

export async function requireAdmin() {
  try {
    const cookieStore = await cookies();

    const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;

    if (!token) {
      return {
        success: false,
        response: error("Unauthorized", 401),
      };
    }

    const payload = await verifyToken(token);

    return {
      success: true,
      payload,
    };
  } catch (err) {
    return {
      success: false,
      response: error("Unauthorized", 401),
    };
  }
}
