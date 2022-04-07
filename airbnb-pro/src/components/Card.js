import React from "react";
import Star from "../images/star.png"


export default function Body(props){
    return (
        <section className="card--body">
            <div className="card--card-item">
                <p className="card--tagline">SOLD OUT</p>
                <img className="card--photo" src={`../images/${props.img}`} alt="Swimmer photo"/>
                <div className="card--rating">
                    <img className="card--rating-star" src={Star} alt="Star Icon"/>
                    <span className="card--text">{props.rating}</span>
                    <span className="card--count-review">({props.countReview})• </span>
                    <span className="card--country">{props.location}</span>
                </div>
                <p className="card--text">{props.title}</p>
                <p className="card--text">
                        <span className="card--cost-destaq">From ${props.price}</span> 
                        / person</p>
            </div>
        </section>
    )
}