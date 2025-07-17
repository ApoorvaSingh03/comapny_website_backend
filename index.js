import express from 'express';
import cors from 'cors';
import bookDemoRoutes from './routes/bookDemoRoutes.js';

const app = express();

app.use(express.json());
app.use(cors({
    origin: ["https://netfotechsolutions.vercel.app"],
    credentials: true, 
    methods: ["GET", "POST", "PUT", "DELETE"],
  }));

app.use('/api/bookDemoForm', bookDemoRoutes);

app.get('/', (req, res) => {
  res.send("Hello from backend!");
});

export default app;
