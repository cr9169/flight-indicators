import { Request, Response, NextFunction } from "express";

/**
 * Express error-handling middleware.
 *
 * Handles errors thrown in the application and formats them into
 * a standardized JSON response.
 *
 * @param err - The error object passed to the middleware.
 * @param req - The current HTTP request.
 * @param res - The HTTP response object.
 * @param next - The next middleware (unused in this case).
 */
export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  res.status(500).json({
    message: "Internal Server Error",
    error: err.message,
  });
};
