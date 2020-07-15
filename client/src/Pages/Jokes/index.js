import React, { Component } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
// import components
import JokeCard from "../../Components/JokeCard";
import "./style.css";
import { startSession } from "mongoose";
// images
import comment from "../../assets/images/newicons/comment.png";
import profile from "../../assets/images/newicons/profile.png";
import plusFilled from "../../assets/images/newicons/plus-filled.png";
// import function for API call
// import jokeSearch from "../../utils/jokeSearch";

var jokesTitle = "Dad Jokes";
var queryURL = "https://icanhazdadjoke.com/slack";

// const [jokeArr, setJokeArr] = useState([]);
// jokeSearch.jokeSearch(jokeArr, setJokeArr);
// console.log(jokeArr)

class Jokes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jokeList: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch(queryURL)
      .then((res) => {
        res.json();
      })
      .then((json) => {
        this.setState({
          isLoaded: true,
          jokeList: json,
        });
      });
  }

  render() {
    const { isLoaded, jokeList } = this.state;
    if (!isLoaded) {
      return <div>loading..</div>;
    } else {
      return (
        <div className="joke-body">
          <Header pageTitle={jokesTitle.toUpperCase()} />
          {/* content here */}
          {jokeList.map((item) => (
            <JokeCard joke={item} />
          ))}
          <Footer jokes={plusFilled} community={comment} profile={profile} />
        </div>
      );
    }
  }
}

export default Jokes;
