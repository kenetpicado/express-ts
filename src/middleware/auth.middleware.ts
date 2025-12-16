import type { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import env from '@/config/env.js';

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    res.status(401);
    return next(new Error('Unauthorized: Missing token'));
  }

  try {
    req.auth = jwt.verify(token, env.JWT_SECRET_KEY) as IAuth;
    next();
  } catch (error) {
    res.status(401);
    const message = error instanceof Error ? error.message : 'Invalid token';
    next(new Error(`Unauthorized: ${message}`));
  }
};
