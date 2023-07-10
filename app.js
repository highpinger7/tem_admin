require("dotenv").config()
const express = require('express');
const app = express();

app.get('/api',(req,res)=>{
    res.send("Welcome to tem2 backend")
    
})

app.listen(process.env.APP_PORT,()=>{
    console.log("TEM2 node is running in port:",process.env.APP_PORT);
})