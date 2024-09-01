import express from 'express';
import dataRoutes from './routes/data';
import authRoutes from './routes/auth';

const app = express();

app.use(express.json());

app.use('/api/data', dataRoutes);
app.use('/api/auth', authRoutes);

export default app;
