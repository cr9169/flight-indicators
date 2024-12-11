import { z } from "zod";

export const indicatorsSchema = z.object({
  altitude: z.number(),
  his: z.number(),
  adi: z.number(),
});

export const updateIndicatorsSchema = z.object({
  body: indicatorsSchema,
  query: z.object({}),
  params: z.object({}),
});
