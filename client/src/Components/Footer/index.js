import React from 'react';
import "./style.css";
// import images
import plus from "../../assets/images/newicons/plus.png";
import comment from "../../assets/images/newicons/comment.png";
import profile from "../../assets/images/newicons/profile.png";
// this will have just the three icons
export default function Footer(props) {
    return (
        <div>
            <div className="footer">
                <div className="icon-div plus">
                    <img src={plus} alt="jokes" />
                </div>
                <div className="icon-div comment">
                    <img src={comment} alt="jokes" />
                </div>
                <div className="icon-div profile">
                    <img src={profile} alt="jokes" />
                </div>
            </div>

        </div>
    )
}
