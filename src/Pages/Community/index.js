import React from 'react';
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
// import components
import CommunityCard from "../../Components/CommunityCard";
import "./style.css";


// ajax call to get posts from the users
// order posts from newest to oldest
// get the like button to work
export default function Community() {
    var communityTitle = "Community";
    return (
        <div className="community-body">
            <Header
            pageTitle = {communityTitle.toUpperCase()}
            />
            <CommunityCard/>
            {/* content here */}
            <Footer/>
        </div>
    )
}
