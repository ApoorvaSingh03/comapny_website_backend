import dotenv from "dotenv"
import express from 'express';
import cors from 'cors';
import bookDemoRoutes from './routes/bookDemoRoutes.js';

dotenv.config();
const PORT = process.env.PORT || 8080
const app = express();

app.use(express.json());
app.use(cors({
    origin: ["https://netfotechsolutions.vercel.app"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use('/api/bookDemoForm', bookDemoRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send("Hello from backend!");
});

export default app;
