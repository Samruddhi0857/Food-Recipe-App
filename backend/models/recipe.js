const mongoose=require("mongoose")
const recipeSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    Ingredients:{
        type:[String],
        required:true
    },
    instructions:{
        type:[String],
        required:true
    },
    time_required:{
        type:String,
        
    },
    coverimage:{
        type:String,
       
    }
},{timestamps:true})

module.exports=mongoose.model("Recipes", recipeSchema)