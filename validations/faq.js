import { z } from "zod";

export const createFaqSchema = z.object({
  question: z.string().min(5),

  answer: z.string().min(5),
});

export const updateFaqSchema = createFaqSchema.partial();
