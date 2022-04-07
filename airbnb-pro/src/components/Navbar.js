import React from "react";
import Airbnb from "../imgs/airbnb-logo.svg"


export default function Navbar(){
    return (
        <nav className="navbar--container">
            <img className="navbar--logo" src={Airbnb} alt="Airbnb's logo"/>
        </nav>
    )
}
