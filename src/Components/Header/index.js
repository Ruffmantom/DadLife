import React from 'react';
import "./style.css";
// this will have the logo and sign in or sign out button
export default function Header() {
    return (
        <div>
            <div className="header">
                <div className="logoDiv">
                    <img id="headLogo" src="./src/assets/images/newicons/logo-dk-blue.png" alt="logo" />
                </div>
                <p id="title">DAD JOKES</p>
            </div>
        </div>
    )
}
