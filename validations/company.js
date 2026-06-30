import { z } from "zod";

export const companySchema = z.object({
  logo: z.object({
    url: z.string().url(),
    public_id: z.string(),
  }),

  name: z.string().min(2),
});
