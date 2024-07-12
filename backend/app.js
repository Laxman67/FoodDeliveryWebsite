import express from 'express';
import cors from 'cors';
import { connectDB } from './config/DB.js';
import { configDotenv } from 'dotenv';
import foodRouter from './routes/foodRoute.js';

// App Configuration
const app = express();

// middleware
app.use(express.json());
app.use(cors());
configDotenv();

// DB Connection
connectDB();

// API End-Points
app.use('/api/food', foodRouter);
// Exposing uplods folder to `http://localhost/images/xxxxx.png`
app.use('/images', express.static('uploads'));

// Routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

export default app;
