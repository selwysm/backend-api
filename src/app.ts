import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/routes.js';

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api', routes);

export default app;
