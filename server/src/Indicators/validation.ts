import { z } from "zod";

export const indicatorsSchema = z.object({
  altitude: z.number().min(0).max(3000),
  his: z.number().min(-100).max(100),
  adi: z.number().min(0).max(100),
});

export const getIndicatorsSchema = z.object({
  body: z.object({}),
  query: z.object({}),
  params: z.object({}),
});

export const updateIndicatorsSchema = z.object({
  body: indicatorsSchema,
  query: z.object({}),
  params: z.object({}),
});
