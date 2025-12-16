import express from 'express';
import type { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import env from '@/config/env.js';

const router = express.Router();

router.post('/login', (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400);
    throw new Error('El usuario o la contraseña son obligatorios');
  }

  const token: string = jwt.sign({ id: 1, username }, env.JWT_SECRET_KEY, {
    expiresIn: '30d',
  });

  res.json({ token });
});

export default router;
