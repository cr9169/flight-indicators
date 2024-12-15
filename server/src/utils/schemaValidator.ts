import { ZodError, AnyZodObject } from "zod";
import { Request, Response, NextFunction } from "express";

/**
 * Middleware for validating requests against a Zod schema.
 *
 * This middleware validates the `body`, `query`, and `params` of an incoming request
 * against the provided Zod schema. If the validation passes, the request is forwarded
 * to the next middleware or route handler. If validation fails, it responds with a
 * 400 Bad Request status and a detailed error message.
 *
 * @param schema - The Zod schema to validate the request against. It should define
 *                 the expected structure of `body`, `query`, and `params`.
 *
 * @returns A middleware function that validates the request and either forwards it to the next handler
 *          or returns a 400 error if the validation fails.
 *
 * @throws {ZodError} If the request does not conform to the schema,
 *                    an error response is sent with the validation details.
 */
const validateSchema =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction): void => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          message: "Validation error",
          errors: error.errors.map((err) => ({
            path: err.path.join("."),
            message: err.message,
          })),
        });

        return;
      }

      next(error);
    }
  };

export default validateSchema;
