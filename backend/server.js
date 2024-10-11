import express from 'express';
import dotenv from 'dotenv'
import { connectDB } from './lib/db.js';
import authRoutes from './routes/auth.route.js'
import userRoutes from "./routes/user.route.js";
import postRoutes from "./routes/post.route.js";
import notificationRoutes from "./routes/notification.route.js";
import connectionRoutes from "./routes/connection.route.js";
import cors from 'cors'
import cookieParser from 'cookie-parser'

dotenv.config();

const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
    // Add other origins as needed, depending on your frontend application
}));
app.use(express.json());

app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});
const PORT= process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB()
});

app.use('/api/v1/auth', authRoutes)
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/notifications", notificationRoutes);
app.use("/api/v1/connections", connectionRoutes);