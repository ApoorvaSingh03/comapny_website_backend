import express from 'express';
import { bookDemo } from '../controller/BookDemoController.js';

const router = express.Router();

router.post('/bookDemo', bookDemo);

export default router;