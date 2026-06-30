import { z } from "zod";

export const successfulStudentSchema = z.object({
  image: z.object({
    url: z.string().url(),
    public_id: z.string(),
  }),

  name: z.string().min(2),

  department: z.string().min(2),
});
