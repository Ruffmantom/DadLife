import React from 'react'
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
// image imports

export default function Profile() {
    var profileTitle = "Profile"
    return (
        <div>
            <Header
            pageTitle = {profileTitle.toUpperCase()}
            />

            {/* content here */}
            <Footer/>
        </div>
    )
}
