import express from 'express';
import type { Request, Response } from 'express';

const router = express.Router();

router.get('/profile', (req: Request, res: Response) => {
  res.json({ message: 'Ruta de autenticación funcionando' });
});

export default router;