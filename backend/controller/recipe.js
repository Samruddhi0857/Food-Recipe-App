
const Recipes=require("../models/recipe")
const getRecipes=async (req,res)=>{
    const recipes=await Recipes.find()
    return res.json(recipes)
}
getRecipe=async (req,res)=>{
    const recipes=await Recipes.findById(req.params.id)
     res.json(recipes)
}
addRecipe=async(req,res)=>{
    const  {title, ingredients,instructions,time_required} =req.body

    if(!title || !ingredients || !instructions){
        res.json({message:"required fields are empty"})
    }

    const newRecipe=await Recipes.create({
        title, ingredients,instructions,time_required
    })
    return res.json(newRecipe)
}
editRecipe=async (req,res)=>{
    const  {title, ingredients,instructions,time_required} =req.body
    let recipe=await Recipes.findByIdAndUpdate(req.params.id)
    try{
    if(recipe){
        await Recipes.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json({title, ingredients,instructions,time_required})
    }
}
catch(err){
    return res.status(404).json({message:"error not found recipe"})
}
}
deleteRecipe=(req,res)=>{
    res.json({message:"hello"})
}

module.exports={getRecipes,getRecipe,addRecipe,editRecipe,deleteRecipe}