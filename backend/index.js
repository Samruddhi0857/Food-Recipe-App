// this is actually server.js 
const express= require("express")
const app=express()
const dotenv=require("dotenv").config()

const connectiondb=require("./config/connectiondb")
const cors = require('cors')
const PORT=process.env.PORT || 3000
connectiondb()

app.use(express.json())
//app.get("/", (req,res)=>{
  //  res.json({message:"hello"})
//})
app.use(cors())
app.use(express.static("public"))
app.use("/",require("./routes/user"))
app.use("/recipe",require("./routes/recipe"))
app.listen(PORT,(err)=>{
    console.log(`app is listening on port ${PORT}`)
})  