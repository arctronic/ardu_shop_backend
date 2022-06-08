import path from "path";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

dotenv.config()

const app = express();

app.use(express.json());
app.use(cors())
connectDB();

const PORT = process.env.PORT || 5000;

app.get("/",(rerq,res)=>{
    res.status(200).send("API is RUNNING");
})

app.listen(5000, console.log(`Server running on port ${PORT}`.yellow.bold));