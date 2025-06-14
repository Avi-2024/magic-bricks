import express from 'express';
import cors from 'cors';
import authRoute from "./routes/auth-route.js"
import propertyRoute from "./routes/property-route.js"
import { connectDB } from "./config/db.js";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads")); 

app.use("/api",authRoute)
app.use("/api/property",propertyRoute)

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, (err) => {
    if (err) {
      console.log(err);
    }
    console.log(`Sever Listening on PORT ${PORT}`);
  });
});