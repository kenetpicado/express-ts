import express from 'express';
import helmet from 'helmet';
import type { Request, Response } from 'express';

import notFoundMiddleware from "./middleware/notFound.middleware.js";
import errorHandlerMiddleware from "./middleware/errorHandler.middleware.js";

import auth from './routes/auth.js';

const app = express();

app.use(helmet());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'API is running successfully',
  });
});

app.use('/auth', auth);

app.use(notFoundMiddleware);

app.use(errorHandlerMiddleware);

export default app;