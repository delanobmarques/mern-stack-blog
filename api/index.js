// mongodb+srv://blog-app:<password>@cluster0.atgnbdl.mongodb.net/?retryWrites=true&w=majority

import express from 'express';

//initialize app
const app = express();

app.listen("5000", () => {
    console.log("server is running... ")
});