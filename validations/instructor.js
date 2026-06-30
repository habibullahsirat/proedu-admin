export const instructorSchema = z.object({
  image: z.object({
    url: z.string().url(),
    public_id: z.string(),
  }),

  name: z.string().min(2),

  email: z.string().email(),

  department: z.string().min(2),

  details: z.string().min(20),
});

export const updateInstructorSchema = instructorSchema.partial();
