import React from 'react';
import "./style.css";
// image import
import logo from "../../assets/images/newicons/logo-dk-blue.png";
// this will have the logo and sign in or sign out button
export default function Header(props) {
    return (
        <div>
            <div className="header">
                <div className="logoDiv">
                    <img id="headLogo" src={logo} alt="logo" />
                </div>
                <p id="title">{props.pageTitle}</p>
            </div>
        </div>
    )
}
