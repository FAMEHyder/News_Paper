import express from "express";
import dotenv from 'dotenv';
import router from './routes/user.routes.js';
import prodrouter from "./routes/product.routes.js";
import DataBaseConnection from './database/database.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

// ✅ Set allowed frontend origins
const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:5174"
];

// ✅ Middleware setup
app.use(express.json({ limit: process.env.LIMITS }));
app.use(express.urlencoded({ extended: true, limit: process.env.LIMITS }));
app.use(cookieParser());
app.use(cors({
    origin: allowedOrigins,
    credentials: true
}));

// ✅ API Routes
app.use('/user', router);
app.use('/product', prodrouter);


// ✅ Static file serving setup for media folder
const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

// 👉 If your 'media' folder is in the same folder as server.js, use this:
const mediaPath = path.join(_dirname, 'media');

// If 'media' is one level up, use this instead:
// const mediaPath = path.join(_dirname, '..', 'media');

app.use('/media', express.static(mediaPath));

// ✅ Start the server
const port = process.env.PORT || 8009;
app.listen(port, () => {
    DataBaseConnection();
    console.log(`✅ Server running at http://localhost:${port}`);
});
