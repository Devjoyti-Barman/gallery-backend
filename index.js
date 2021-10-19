import cors from 'cors';
import express from "express";
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';

import ExpressFormidable from 'express-formidable';
import connectDB from "./connections/db.js";
import galleryRouter from './routes/gallery.js';
dotenv.config();


const app=express();

app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.urlencoded({ extended: false }));
//app.use(fileUpload());

app.use(express.json());

app.use("/api",galleryRouter);

connectDB();

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server is started at https://localhost:${PORT}`);
})



