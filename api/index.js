// mongodb+srv://blog-app:<password>@cluster0.atgnbdl.mongodb.net/?retryWrites=true&w=majority

import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
//import router
import authRoute from './routes/auth.js';


//initialize app
const app = express();

dotenv.config();

//allow the app to send json objects
app.use(express.json());

//using mongoose to connect to database
mongoose.connect(process.env.MONGO_URL)
    .then(console.log("Connected to mongodb....."))
    .catch((error) => console.log(`${error} did not connect`));

    app.use("/api/auth", authRoute)

app.listen("5000", () => {
    console.log("server is running... ");
});