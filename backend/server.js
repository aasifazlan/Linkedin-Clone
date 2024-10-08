import express from 'express';
import dotenv from 'dotenv'
import { connectDB } from './lib/db.js';
import authRoutes from './routes/auth.route.js'

dotenv.config();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});
const PORT= process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB()
});

app.use('/api/v1/auth', authRoutes)