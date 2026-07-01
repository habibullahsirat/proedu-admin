export async function requireAdmin() {
  return {
    success: true,
    payload: {
      email: "admin@example.com",
      role: "admin",
    },
  };
}
