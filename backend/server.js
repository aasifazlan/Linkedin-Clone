import express from 'express';
import dotenv from 'dotenv'
import { connectDB } from './lib/db.js';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});
const PORT= process.env.PORT
app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB()
});
