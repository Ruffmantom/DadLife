import React from 'react';
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
// import components
import JokeCard from "../../Components/JokeCard";
import "./style.css";
// will need ajax call to get jokes
// ajax call to save saved joke to database
// get save button to work
export default function Jokes() {
    var jokesTitle = "Dad Jokes"
    return (
        <div className="joke-body">
            <Header
            pageTitle = {jokesTitle.toUpperCase()}
            />
            {/* content here */}
            <JokeCard/>
            <Footer/>
        </div>
    )
}
