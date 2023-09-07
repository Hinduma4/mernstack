import express from "express"; 
const app = express();
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors";
import route from "./Route/routes.js";
dotenv.config()

app.use(express.json());
app.use(cors());
app.use("/info",route);

const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO);
      console.log("connected to Mongo");
    } catch (err) {
      console.log(err);
    }
  };

app.listen(5000, () => {
    connect();
    console.log("Server is running");
  });