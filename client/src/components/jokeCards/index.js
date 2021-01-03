import React, {useState} from 'react';
import likeIconActive from "../../assets/images/newicons/feather-heart.svg"
import likeIcon from "../../assets/images/newicons/feather-heart-filled.svg"
import "./style.css"
export default function Jokecard({joke}) {
    const [liked,setLiked] = useState(false);
    return (
        <div className="dl-j-card">
            <div className="dl-j-c-t-cont">
                <p className="dl-j-c-text">{joke}</p>
            </div>
            <div className="dl-j-c-like">
                <img src={liked? likeIcon: likeIconActive} alt="#" />
            </div>
        </div>
    )
}
