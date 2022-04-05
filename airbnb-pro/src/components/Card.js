import React from "react";
import Swimmer from "../images/st-card.png"
import Star from "../images/star.png"


export default function Body(){
    return (
        <section className="card--container">
            <div className="card--card-item">
                <p className="card--tagline">SOLD OUT</p>
                <img className="card--photo" src={Swimmer} alt="Swimmer photo"/>
                <div className="card--rating">
                    <img className="card--rating-star" src={Star} alt="Star Icon"/>
                    <p className="card--text">5.0 <span  className="card--rating-details">(6)•USA</span></p>
                </div>
                <p className="card--text">Life lessons with Katie Zaferes</p>
                <p className="card--text">
                        <span className="card--cost-destaq">From $136</span> 
                        / person</p>
            </div>
        </section>
    )
}