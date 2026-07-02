import { z } from "zod";

export const createHeroSchema = z.object({
  image: z.object({
    url: z.string().url(),
    public_id: z.string(),
  }),

  title: z.string().min(3).max(150),

  description: z.string().min(10),

  buttonText: z.string().min(2).max(50),

  isActive: z.boolean().default(false),
});

export const updateHeroSchema = createHeroSchema.partial();
