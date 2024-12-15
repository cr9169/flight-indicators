import { Request, Response, NextFunction } from "express";

/**
 * A higher-order function to handle asynchronous middleware functions in Express.
 * This ensures that any errors occurring in the asynchronous function are caught
 * and passed to the next error-handling middleware.
 *
 * @param fn - The asynchronous function to wrap.
 * @returns A new middleware function that catches errors and passes them to `next`.
 */
export const asyncHandler =
  (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
