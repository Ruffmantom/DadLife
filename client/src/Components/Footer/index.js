import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";

// this will have just the three icons
export default function Footer(props) {


    return (
        <div>
            <div className="footer">
                <Link to="/jokes" className="icon-div plus">

                    <img src={props.jokes} alt="jokes" />

                </Link>

                <Link to="/community" className="icon-div comment">

                    <img src={props.community} alt="jokes" />

                </Link>

                <Link to="/profile" className="icon-div profile">

                    <img src={props.profile} alt="jokes" />

                </Link>

            </div>

        </div>
    )
}
