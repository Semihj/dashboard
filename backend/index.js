import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import User from "./models/user.model.js";
import AuthRouter from "./routes/auth.js"
import morgan from "morgan"
import cookieParser from "cookie-parser";
const app = express();
dotenv.config()
app.use(express.json())
app.use(cookieParser())
mongoose.connect(process.env.MONGO_URL).then( async (data) => {
    console.log("connected to Mongoose");

  });
app.use(morgan("common"))
app.use("/api/auth",AuthRouter)

app.listen(process.env.PORT,() => {
    console.log("listening on port "+process.env.PORT);
})

app.use((err,req,res,next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
      success:false,
      statusCode,
      message,
  });

})