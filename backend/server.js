const express = require('express');
const dotenv = require('dotenv');
const chats = require('./data/data.js');
const connectDB= require("./config/db.js")
const colors = require("colors")
const cors =require("cors")
const userRoute = require("./routes/userRoutes.js")
const app = express();

app.use(cors());
const PORT = process.env.PORT || 3000;

connectDB();
dotenv.config();
app.get('/' ,(req, res) => {
    res.send('Hello World');
})
app.use('/api/user',userRoute);
app.get('/api/chat' ,(req, res) => {

    res.send(chats);
})
app.listen(PORT,console.log(`listening on port ${PORT}`.green.bold));