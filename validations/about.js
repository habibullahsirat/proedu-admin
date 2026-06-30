import { z } from "zod";

export const aboutSchema = z.object({
  image: z.object({
    url: z.string().url(),
    public_id: z.string(),
  }),

  title: z.string().min(3),

  description: z.string().min(20),

  buttonText: z.string().min(2),
});
