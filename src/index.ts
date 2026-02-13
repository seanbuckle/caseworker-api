import * as dotenv from 'dotenv';
dotenv.config();

import app from './app';
import { config } from './config/env'; // 👈 Import your new config

// Use config.port instead of process.env.PORT
app.listen(config.port, () => {
  console.log(`🚀 Server running on http://localhost:${config.port}`);
});