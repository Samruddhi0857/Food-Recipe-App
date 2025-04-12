const express= require("express")
const app=express()
const dotenv=require("dotenv").config()
const connectiondb=require("./config/connectiondb")
const PORT=process.env.PORT || 3000
connectiondb()

app.use(express.json())
//app.get("/", (req,res)=>{
  //  res.json({message:"hello"})
//})
app.use("/recipe",require("./routes/recipe"))
app.listen(PORT,(err)=>{
    console.log(`app is listening on port ${PORT}`)
})  