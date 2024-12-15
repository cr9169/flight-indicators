import { Request, Response, NextFunction } from "express";
import { NotFoundError } from "./customErrors";

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
const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  console.error(err);

  if (err instanceof NotFoundError) {
    res.status(404).json({
      error: err.message,
    });
  }

  res.status(500).json({
    message: "Internal Server Error",
    error: err.message,
  });
};

export default errorHandler;
