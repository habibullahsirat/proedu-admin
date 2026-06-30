import { z } from "zod";

export const heroSchema = z.object({
  image: z.object({
    url: z.string().url(),
    public_id: z.string(),
  }),

  title: z.string().min(3).max(150),

  description: z.string().min(10),

  buttonText: z.string().min(2).max(50),
});

export const updateHeroSchema = heroSchema.partial();
