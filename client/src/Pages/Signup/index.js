import React from 'react';
import "./style.css";
import logo from "../../assets/images/icons/blackIcons/logoBK.png"


export default function Signup() {
    

    const moveUp=()=>{
        console.log("moving up")
    }
    return (
        <div>
            <div className="container">
                <div className="logoContainer">
                    <img src={logo} alt="dadlife logo" id="logo" />
                </div>
                <div className="form-container">
                    <h2 className="leadTitle">Welcome to DadLife</h2>
                    <p className="desc">Sign In</p>
                    <form className="sign-in" action="submit">
                        <p className="label">Username</p>
                        <input type="text" name="username" placeholder="Username" />
                        <p className="label">Password</p>
                        <input type="password" name="password" placeholder="Password" />
                        <br />
                        <button type="submit" className="main-btn">Log In</button>
                    </form>
                    <div id="slider" className="slider" onClick={moveUp()}>
                        <div className="slide-icon">
                        </div>
                        <p id="slide-up-desc" className="desc">Click to sign up</p>
                        <div id="sign-up-container">
                            <h2 className="leadTitle sign-up-title">Sign Up</h2>
                            <p className="desc">Join the DadLife Community</p>
                            <form className="sign-up-form" action="submit">
                                <p className="label">Username</p>
                                <input type="text" name="username" placeholder="Choose a username" />
                                <p className="label">Password</p>
                                <input type="password" name="password" placeholder="Choose a password" />
                                <p className="label">Confirm Password</p>
                                <input type="password" name="password" placeholder="Re enter password" />
                                <br />
                                <button type="submit" className="main-btn">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
