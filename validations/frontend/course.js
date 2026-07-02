import { z } from "zod";

export const courseFormSchema = z.object({
  image: z.object({
    url: z.string().min(1, "Image is required"),
    public_id: z.string().min(1),
  }),

  title: z.string().min(3, "Title must be at least 3 characters"),

  description: z.string().min(10, "Description must be at least 10 characters"),

  price: z.coerce.number().positive("Price must be greater than 0"),
});
