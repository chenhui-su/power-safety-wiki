import { defineCollection, z } from "astro:content";

const dateField = z.union([z.string(), z.date()]).transform((value) => {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }

  return value;
});

const cases = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    titleEn: z.string().optional(),
    date: dateField,
    year: z.number().int(),
    location: z.string(),
    affectedLabel: z.string(),
    affectedCount: z.number().nonnegative(),
    duration: z.string(),
    cause: z.string(),
    hook: z.string(),
    act: z.number().int().min(1).max(5),
    coordinates: z.tuple([z.number(), z.number()]),
    status: z.enum(["latest"]).optional(),
    code: z.string().optional(),
    lead: z.string().optional(),
    impact: z.string().optional(),
    trigger: z.string().optional(),
    lesson: z.string().optional(),
    docs: z.array(z.string()).default([]),
    videoTitle: z.string().optional(),
    videoUrl: z.string().optional(),
    videoNote: z.string().optional(),
    tags: z.array(z.string()).default([]),
    updatedAt: dateField.optional(),
  }),
});

export const collections = { cases };
