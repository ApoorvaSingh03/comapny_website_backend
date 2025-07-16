import express from 'express';
import cors from 'cors';
import bookDemoRoutes from './routes/bookDemoRoutes.js';

const app = express();

const PORT = 8080 || process.env.PORT;

app.use(express.json());
app.use(cors());

app.use('/api/bookDemoForm',bookDemoRoutes)

app.get('/', (req, res) => {
    res.send("Hello");
})

app.listen(PORT, console.log(`Server running on port http://localhost:${PORT}`));