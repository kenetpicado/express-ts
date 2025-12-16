import express from 'express';
import type { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: '¡Servidor Express con TypeScript y tsx --watch funcionando!',
  });
});

app.get('/:name', (req: Request, res: Response) => {
  const { name } = req.params;
  res.json({ message: `¡Hola, ${name}!` });
});

export default app;