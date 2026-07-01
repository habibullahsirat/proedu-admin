import { cookies } from "next/headers";

import { success, error } from "@/lib/apiResponse";
import { validate } from "@/lib/validate";
import { loginSchema } from "@/validations/login";

import { createToken } from "@/lib/jwt";
import { AUTH_COOKIE_NAME } from "@/lib/constants";

export async function POST(request) {
  try {
    const body = await request.json();

    const validationError = validate(loginSchema, body);

    if (validationError) {
      return validationError;
    }

    const { email } = body;

    // Skip authentication for now
    const token = await createToken({
      email,
      role: "admin",
    });

    const cookieStore = await cookies();

    cookieStore.set(AUTH_COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return success(
      {
        authenticated: true,
        email,
      },
      "Login successful",
    );
  } catch (err) {
    console.error(err);

    return error(err.message);
  }
}
