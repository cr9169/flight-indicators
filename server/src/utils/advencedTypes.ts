import { Request } from "express";
import { z, AnyZodObject } from "zod";

/**
 * A utility type to simplify and "prettify" complex types.
 * This helps make types more readable and manageable in development tools.
 *
 * @template T - The type to prettify.
 */
export type Prettify<T> = {
  [K in keyof T]: T[K];
} & object;

/**
 * A type-safe version of an Express Request object.
 * This type uses a Zod schema to infer the structure of `params`, `body`, and `query`,
 * ensuring they match the schema's structure at compile time.
 *
 * @template T - A Zod schema extending AnyZodObject.
 */
export type TypedRequest<T extends AnyZodObject> = Prettify<
  Request<
    z.infer<T>["params"],
    unknown,
    z.infer<T>["body"],
    z.infer<T>["query"]
  >
>;
