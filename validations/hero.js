import { z } from "zod";

const imageSchema = z.object({
  url: z.string().url(),
  public_id: z.string().min(1),
});

export const createHeroSchema = z.object({
  image: imageSchema,

  title: z.string().min(3).max(150),

  description: z.string().min(10),

  buttonText: z.string().min(2).max(50),

  isActive: z.boolean().optional(),
});

export const updateHeroSchema = createHeroSchema.partial();
