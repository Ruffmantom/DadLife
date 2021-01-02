import React from 'react'
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
// image imports
import plus from "../../assets/images/newicons/plus.png";
import comment from "../../assets/images/newicons/comment.png";
import profileFilled  from "../../assets/images/newicons/profile-filled.png";
export default function Profile() {
    var profileTitle = "Profile"
    return (
        <div>
            <Header
            pageTitle = {profileTitle.toUpperCase()}
            />

            {/* content here */} 
            <Footer
            jokes={plus}
            community={comment}
            profile={profileFilled}
            />
        </div>
    )
}
