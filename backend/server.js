const express= require("express");
const dotenv=require("dotenv").config();
const app=express();
const colors=require('colors')
const connectDB = require('./config/db')
const {errorHandler} = require('./middleware/errorMiddleare')
const port=process.env.PORT || 5000;

connectDB()

// here isthe middleware to allow to post goals with body
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/api/goals',require('./routes/routes.js'))

app.use(errorHandler)

app.listen(port,()=> console.log(`server listening to port ${port}`))