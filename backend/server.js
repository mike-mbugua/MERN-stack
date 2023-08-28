const express= require("express");
const dotenv=require("dotenv").config();
const app=express();
const port=process.env.PORT || 5000;

app.use('/api/goals',require('./routes/routes.js'))


app.listen(port,()=> console.log(`server listening to port ${port}`))