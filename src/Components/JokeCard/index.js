import React from 'react';
import "./style.css";
export default function JokeCard(props) {
    return (
        <div>
            <div className="joke-container">
                <p className="joke">{joke}</p>
                <img id="joke-add" data-jokenum={1} src="./src/assets/images/newicons/plus-filled.png" alt="plus" />
            </div>
        </div>
    )
}
