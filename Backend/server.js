import express from "express";
import dotenv from 'dotenv';
import router from './routes/user.routes.js';
import prodrouter from "./routes/product.routes.js";
import DataBaseConnection from './database/database.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express()
const corsOptions = [
    "http://localhost:5173",
    "http://localhost:5174"

]

app.use(express.json());
app.use(cors({
    origin:corsOptions,
    credentials:true
}))
app.use('/user', router );
app.use('/product',prodrouter)



const port = process.env.PORT || 8009
app.listen(port, ()=>{
    DataBaseConnection();
    console.log("Conneceting please wait...")
})




// Resolve the __dirname of the current file
const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

// Define the path to the 'media' folder using an absolute path from the project root
const mediaPath = path.join(_dirname, '..', 'media');

// Serve the 'media' folder as static content
app.use('/media', express.static(mediaPath));


  app.use(cors({
    origin: function(origin, callback) {
      if (corsOptions.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
  }));
// app.use("/media", express.static(path.join(__dirname, "media")));
app.use(express.json({limit:process.env.LIMITS}));
app.use(express.urlencoded({extended:true,limit:process.env.LIMITS}));
app.use(cookieParser())