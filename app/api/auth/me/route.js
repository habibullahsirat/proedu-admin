import { requireAdmin } from "@/lib/auth";
import { success } from "@/lib/apiResponse";

export async function GET() {
  const auth = await requireAdmin();

  if (!auth.success) {
    return auth.response;
  }

  return success({
    authenticated: true,
    email: auth.payload.email,
    role: auth.payload.role,
  });
}
