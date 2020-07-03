import React from 'react';
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
// will need ajax call to get jokes
// ajax call to save saved joke to database
// get save button to work
export default function Jokes() {
    var jokesTitle = "Dad Jokes"
    return (
        <div>
            <Header
            pageTitle = {jokesTitle.toUpperCase()}
            />

            {/* content here */}
            <Footer/>
        </div>
    )
}
