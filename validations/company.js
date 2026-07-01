import { z } from "zod";

const logoSchema = z.object({
  url: z.string().url(),
  public_id: z.string().min(1),
});

export const createCompanySchema = z.object({
  logo: logoSchema,

  name: z.string().min(2),

  isActive: z.boolean().optional(),
});

export const updateCompanySchema = createCompanySchema.partial();
