import { z } from "zod";

const imageSchema = z.object({
  url: z.string().url(),
  public_id: z.string().min(1),
});

export const createFeedbackSchema = z.object({
  feedback: z.string().min(5),

  rating: z.number().min(1).max(5),

  image: imageSchema,

  name: z.string().min(2),

  department: z.string().min(2),
});

export const updateFeedbackSchema = createFeedbackSchema.partial();
