import React from 'react';
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
// import components
import JokeCard from "../../Components/JokeCard";
import "./style.css";
import { startSession } from 'mongoose';
// images
import comment from "../../assets/images/newicons/comment.png";
import profile from "../../assets/images/newicons/profile.png";
import plusFilled from "../../assets/images/newicons/plus-filled.png";
// import function for API call
import jokeSearch from "../../utils/jokeSearch";

var jokesTitle = "Dad Jokes";
// const [jokeArr, setJokeArr] = useState([]);
// jokeSearch.jokeSearch(jokeArr, setJokeArr);
// console.log(jokeArr)


class Jokes extends React.Component {

    state = {
        jokes: []
    };
    componentDidMount(){
        for (var i = 0; i < 5; i++) (
            jokeSearch.search()
            
        )
        .then(res=>{
            this.state.jokes.push(res)
        }) 
    }

    render() {
        const j = this.state;
        // jokeSearch.jokeSearch(this.state.jokes)
        console.log(j)
        return (
            <div className="joke-body">
                <Header
                    pageTitle={jokesTitle.toUpperCase()}
                />
                {/* content here */}
                {
                 j.jokes.map(item=>(<JokeCard joke={item}/>))   
                }
                <Footer
                    jokes={plusFilled}
                    community={comment}
                    profile={profile}
                />
            </div>

        )

    }

}


export default Jokes;
