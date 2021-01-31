import React, { useState, useEffect } from "react";
import Layout from "../../components/userComponents/Layout";
import Jokecard from "../../components/jokeCards";

var queryURL = "https://icanhazdadjoke.com/";

// need to make a loading animation when the post is posing to db

export default function JokePage() {

  const [jokeList, setJokeList] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [loaded, setLoaded] = useState(false);
// the goal is to get ten jokes loaded in and set them into the joke card

const init=()=>{
  !(jokeList || error) && fetch(queryURL,{
    method:"GET",
    headers:{
      "Accept": "text/plain"
    }
  }).then(res=> res.json())
  .then(setJokeList
).catch(setError)
}

  useEffect(()=>{
    init();
    console.log(jokeList)
  },[])

  return (
    <Layout title="Dad Jokes" page="dlj">
      {/* {!loaded? <p>{JSON.stringify(jokeList)}</p>:"Loading..." } */}
      
    </Layout>
  );
}
