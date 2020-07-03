import React from 'react';
import "./style.css";
// this will have just the three icons
export default function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="icon-div plus">
                    <img src="./src/assets/images/newicons/plus.png" alt="jokes" />
                </div>
                <div className="icon-div comment">
                    <img src="./src/assets/images/newicons/comment.png" alt="jokes" />
                </div>
                <div className="icon-div profile">
                    <img src="./src/assets/images/newicons/profile.png" alt="jokes" />
                </div>
            </div>

        </div>
    )
}
