import { z } from "zod";

const imageSchema = z.object({
  url: z.string().url(),
  public_id: z.string().min(1),
});

export const createAboutSchema = z.object({
  image: imageSchema,

  title: z.string().min(2),

  description: z.string().min(10),

  buttonText: z.string().min(1),

  isActive: z.boolean().optional(),
});

export const updateAboutSchema = createAboutSchema.partial();
