const express=require("express")
const {getRecipes,getRecipe,editRecipe,addRecipe,deleteRecipe} =require("../controller/recipe")
const router = express.Router()
//router.get("/", (req,res)=>{
  //  res.json({message:"hello"})
//})

router.get("/" , getRecipes) //get all recipes
router.get("/:id",getRecipe) //get recipe by id
router.post("/",addRecipe) //add recipe
router.put("/:id",editRecipe)
router.delete(":/id",deleteRecipe)
module.exports=router