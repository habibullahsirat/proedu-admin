import { error } from "./apiResponse";

export function validate(schema, data) {
  const result = schema.safeParse(data);

  if (!result.success) {
    return error(result.error.errors.map((err) => err.message).join(", "), 400);
  }

  return null;
}
