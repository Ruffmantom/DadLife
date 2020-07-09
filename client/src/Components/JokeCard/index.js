import React from 'react';
import "./style.css";
// image import
import add from "../../assets/images/newicons/plus-filled.png";
// var joke = "This is a joke but I dont know what to joke about"
export default function JokeCard(props) {
    return (
        <div >
            <div className="joke-container">
                <p className="joke">{props.joke}</p>
                <img id="joke-add" data-jokenum={1} src={add} alt="plus" />
            </div>
        </div>
    )
}
