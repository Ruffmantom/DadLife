import React, { Component } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
// import components
import JokeCard from "../../Components/JokeCard";
import "./style.css";
import { startSession } from "mongoose";
// import jokes
import jokeList from '../../assets/details/index.json'
// images
import comment from "../../assets/images/newicons/comment.png";
import profile from "../../assets/images/newicons/profile.png";
import plusFilled from "../../assets/images/newicons/plus-filled.png";
// import function for API call
// import jokeSearch from "../../utils/jokeSearch";

var jokesTitle = "Dad Jokes";
console.log(jokeList.jokes[0].text)
class Jokes extends React.Component {



  render() {
    const jokes = jokeList.jokes;

    return (
      <div className="joke-body">
        <Header pageTitle={jokesTitle.toUpperCase()} />
        {/* content here */}
        {jokes.map(item => (
          <JokeCard
            joke={item.text}
          />
        ))}
        <Footer jokes={plusFilled} community={comment} profile={profile} />
      </div>
    );

  }
}

export default Jokes;
