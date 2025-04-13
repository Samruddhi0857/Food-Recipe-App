import React from "react"
import { Outlet } from "react-router-dom"
//if error shows here then change navbar =>Navbar
// Footer => footer
import Navbar from '../components/navbar'
import Footer from "../components/Footer"
export default function MainNavigation(){
    return(
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    )

}