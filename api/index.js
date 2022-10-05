// mongodb+srv://blog-app:<password>@cluster0.atgnbdl.mongodb.net/?retryWrites=true&w=majority

import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
//import routes
import authRoute from './routes/auth.js';
import userRoute from './routes/users.js';
import postRoute from './routes/posts.js';
import categoryRoute from './routes/categories.js';

//initialize app
const app = express();

dotenv.config();

//allow the app to send json objects
app.use(express.json());

//using mongoose to connect to database
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
    })
    .then(console.log("Connected to mongodb....."))
    .catch((error) => console.log(`${error} did not connect`));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen("5000", () => {
    console.log("Server is running... ");
});