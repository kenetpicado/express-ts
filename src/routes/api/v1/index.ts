import express from 'express';
import type { Request, Response } from 'express';
import auth from './auth.js';
import { authMiddleware } from '@/middleware/auth.middleware.js';

const router = express.Router();

router.get('/status', (req: Request, res: Response) => {
  res.json({ status: 'status: ok' });
});

router.use(authMiddleware);

router.use('/auth', auth);

export default router;
