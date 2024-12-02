const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require('cors');
const app = express();
const connectToDb = require('./db/db');
const userRoutes = require("./routes/user.routes");

connectToDb();

app.use(cors());   // cross origin resource supply
app.use(express.json());
app.use(express.urlencoded({required: true}));




app.get("/", (req, res) => {
    res.send("Hello jee")
})

app.use('/users', userRoutes);


module.exports = app;