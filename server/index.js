import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoute from './routes/userRouter.js'

const app = express();
dotenv.config();
const corsOptions = {
  // origin: 'http://localhost:3000',
  Credential: true,
  // optionSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use("/user", userRoute)

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

const PORT = Number(process.env.PORT) || 6000;

const DATABASE_URL = process.env.MONGO_URL;

mongoose
  .connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}, ${DATABASE_URL}`))
  )
  .catch((err) => console.log(err));
