import React from "react"
import foodImg from '../assets/foodRecipe.png'
import { useLoaderData } from "react-router-dom"
import { FaHeart } from "react-icons/fa";
import { FaStopwatch } from "react-icons/fa6";
export default function RecipeItems(){
    const allRecipes = useLoaderData()
    console.log(allRecipes);
    
    return(
      <>
      <div className="card-container">
     {
    allRecipes?.map((item, index) => {
    return (
        <div key={index} className="card">
<img src={`http://localhost:5000/images/${item.coverimage}`} width="120px" height="100px"></img>
                <div className="card-body">
                   <div className="title">{item.title}</div>
                   <div className="icons">
                    <div className="timer"><FaStopwatch />30min</div>
                    <FaHeart />
                   </div>
               </div>
        </div>
       
    )
})}
     
      </div>
      </>
    )
}