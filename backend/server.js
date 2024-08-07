import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./database/connectMongoDB.js"


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
    connectMongoDB();
});

