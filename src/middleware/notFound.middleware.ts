import type { Request, Response, NextFunction } from 'express';

/**
 * Middleware for handling 404 Not Found errors.
 * This function must be the last middleware loaded before any centralized error handler.
 * It creates an Error object with the 404 status and passes it to the next function (usually a global error handler).
 */
export const notFoundMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const error = new Error(`Not Found: ${req.originalUrl}`);
  res.status(404);
  next(error);
};
