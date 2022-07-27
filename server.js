
const path=require('path');

const express=require('express') 
const app=express();

const cors=require('cors')
app.use(cors());

const port=process.env.PORT
require('./server/DB/db');

// app.get("/",(req ,res)=>{
//     console.log("Hello")
//     // res.status(200).send("Hi")
//     res.status(500).json({massage:"MyServer"})
// })





// app.listen(8000)















