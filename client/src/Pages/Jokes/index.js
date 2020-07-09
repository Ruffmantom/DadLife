import React, { useState, useEffect } from 'react';
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
// import components
import JokeCard from "../../Components/JokeCard";
import "./style.css";
import { startSession } from 'mongoose';


// ajax call to save saved joke to database
// get save button to work


export default function Jokes() {
    var jokesTitle = "Dad Jokes";
    let [jokeArr, setJokeArr] = useState([]);

    useEffect(() => {
        jokeSearch()
        console.log("jokeArr inside of useEffect")
        console.log(jokeArr)
        console.log("----------------------------")
    }, [])

    // joke api call
    function jokeSearch() {
        // for some reason the slack api link works best
        var queryURL = "https://icanhazdadjoke.com/slack";
        for (var i = 0; i < 10; i++) {
            fetch(
                queryURL,
                {
                    method: "GET",
                }
            )
                .then(res => res.json())
                .then(response =>
                    setJokeArr(jokeArr.push(response.attachments[0].text))
                )
                .catch(error => console.log(error));
        }


    };

    return (
        <div className="joke-body">
            <Header
                pageTitle={jokesTitle.toUpperCase()}
            />
            {/* content here */}

            <JokeCard
                joke={jokeArr}
            />

            <Footer />
        </div>
    )
}
