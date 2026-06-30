import { z } from "zod";

export const courseSchema = z.object({
  image: z.object({
    url: z.string().url(),
    public_id: z.string(),
  }),

  title: z.string().min(3).max(150),

  description: z.string().min(10),

  price: z.number().positive(),
});
