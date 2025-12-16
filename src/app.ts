import express from 'express';
import helmet from 'helmet';
import v1 from './routes/api/v1/index.js';
import type { Request, Response } from 'express';

import { notFoundMiddleware } from './middleware/notFound.middleware.js';
import { errorHandlerMiddleware } from './middleware/errorHandler.middleware.js';

const app = express();

app.use(helmet());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Running successfully',
  });
});

app.use('/api/v1', v1);

app.use(notFoundMiddleware);

app.use(errorHandlerMiddleware);

export default app;
