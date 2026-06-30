import { z } from "zod";

export const feedbackSchema = z.object({
  feedback: z.string().min(10),

  rating: z.number().min(1).max(5),

  image: z.object({
    url: z.string().url(),
    public_id: z.string(),
  }),

  name: z.string().min(2),

  department: z.string().min(2),
});

export const updateFeedbackSchema = feedbackSchema.partial();
