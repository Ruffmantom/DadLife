import React, { useState, useEffect } from 'react';
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import API from "../../utils/API";
// import components
import CommunityCard from "../../Components/CommunityCard";
import "./style.css";


// order posts from newest to oldest
// get the like button to work
export default function Community() {
    var communityTitle = "Community";
    const [posts, setPosts] = useState([]);
    
    // load all posts when page is loaded
    useEffect(()=>{
        loadPosts()
    }, [])

    // ajax call to get posts from the users
    function loadPosts() {
        API.getPosts()
            .then(res => {
                setPosts(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err));
    }
    return (
        <div className="community-body">
            <Header
                pageTitle={communityTitle.toUpperCase()}
            />
            <CommunityCard />
            {/* content here */}
            <Footer />
        </div>
    )
}
