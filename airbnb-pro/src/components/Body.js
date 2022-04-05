import React from "react";
import Grid from "../images/photo-grid.png"


export default function Body(){
    return (
        <section className="body--container">
            <img className="body--logo" src={Grid} alt="Group image"/>
            <h1 className="body--title">Online Experiences</h1>
            <p className="body--text">
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    )
}