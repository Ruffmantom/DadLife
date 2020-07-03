import React from 'react';
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
// ajax call to get posts from the users
// order posts from newest to oldest
// get the like button to work
export default function Community() {
    var communityTitle = "Community";
    return (
        <div>
            <Header
            pageTitle = {communityTitle.toUpperCase()}
            />

            {/* content here */}
            <Footer/>
        </div>
    )
}
