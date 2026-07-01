import { z } from "zod";

const imageSchema = z.object({
  url: z.string().url(),
  public_id: z.string().min(1),
});

export const createSuccessfulStudentSchema = z.object({
  image: imageSchema,

  name: z.string().min(2),

  department: z.string().min(2),
});

export const updateSuccessfulStudentSchema =
  createSuccessfulStudentSchema.partial();
