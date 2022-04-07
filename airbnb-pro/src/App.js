import React from "react";
import Navbar from "./components/Navbar"
import Body from "./components/Body"
import Card from "./components/Card"
import data from "./data"



export default function App(){
    const cardElements = data.map(a =>(
        <Card 
            img = {a.coverImg}
            title = {a.title}
            price = {a.price}
            rating = {a.stats.rating}
            countReview = {a.stats.rating}
        />
    ))


    return (
        <main className="app--container">
            < Navbar /> 
            < Body /> 
            <div className="card--container">
                {cardElements} 
            </div>
            
        </main>
    )
}