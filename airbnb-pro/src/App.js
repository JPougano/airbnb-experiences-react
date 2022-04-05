import React from "react";
import Navbar from "./components/Navbar"
import Body from "./components/Body"
import Card from "./components/Card"

export default function App(){
    return (
        <main className="app--container">
            < Navbar /> 
            < Body /> 
            < Card /> 
        </main>
    )
}