import express, { Application, Request, Response } from 'express';
import helmet from 'helmet';

const app: Application = express();

// Security Middleware
app.use(helmet()); 
app.use(express.json()); // Allows the server to read JSON bodies

// Initial Test Route
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'Security-hardened API is online'
  });
});

export default app;