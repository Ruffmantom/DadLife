import React, { useState, useEffect } from "react";
import Layout from "../../components/userComponents/Layout";
import Jokecard from "../../components/jokeCards";
import { initial } from "lodash";
var queryURL = "https://icanhazdadjoke.com/";
// const jokes = [
//   "Had this one Had this one Had this one Had this one",
//   "Had this one Had this one Had this one Had this one",
//   "Had this one Had this one Had this one Had this one",
//   "Had this one Had this one Had this one Had this one",
//   "Had this one Had this one Had this one Had this one",
//   "Had this one Had this one Had this one Had this one",
//   "Had this one Had this one Had this one Had this one",
//   "Had this one Had this one Had this one Had this one",
//   "Had this one Had this one Had this one Had this one",
//   "Had this one Had this one Had this one Had this one",
// ];
export default function JokePage() {
  const [jokeList, setJokeList] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [loaded, setLoaded] = useState(false);


const init=()=>{
  !(jokeList || error) && fetch(queryURL,{
    method:"GET",
    headers:{
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept": "application/json"
    }
  }).then(res=>res.json())
  .then(setJokeList
).catch(setError)
}

  useEffect(()=>{
    init();
  },[])

  return (
    <Layout title="Dad Jokes" page="dlj">
      {!loaded? <p>{JSON.stringify(jokeList)}</p>:"Loading..." }
    </Layout>
  );
}
