import React from "react"
import foodRecipe from '../assets/foodRecipe.png'
import MainNavigation from "../components/MainNavigation"
//import Navbar from "./components/Navbar";
import { useNavigate } from 'react-router-dom';

//import Footer  from "../components/Footer"
import RecipeItems from "../components/RecipeItems"
export default function Home(){
    
    const navigate = useNavigate()
    return(
        <>

        <section className="home">
            <div className="left">
        <h1>Food Recipe</h1>
        <h5>Your go-to destination for mouthwatering recipes, easy cooking tips, and kitchen inspiration! Whether you're a beginner or a seasoned chef, our blog brings you a wide variety of dishes—from traditional comfort foods to trendy modern meals.
        Explore, cook, and share delicious moments with us. Because every recipe tells a story, and every meal brings people together.</h5>
        <button onClick={()=> navigate("/addRecipe")}>Share Your Recipe</button>
            </div>
            <div className="right">
            <img src={foodRecipe} width="320px" height="300px"></img>
            </div>
        </section>
        <div className='bg'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d4f6e8" fillOpacity="1" d="M0,32L40,32C80,32,160,32,240,58.7C320,85,400,139,480,149.3C560,160,640,128,720,101.3C800,75,880,53,960,80C1040,107,1120,181,1200,213.3C1280,245,1360,235,1400,229.3L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            </div>
            <div className="recipe">
                <RecipeItems/>
            </div>
        </>
    )
}