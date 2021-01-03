import React, { useState,useEffect } from "react";
import Layout from "../../components/userComponents/Layout";
import Jokecard from "../../components/jokeCards";
import { getJokes } from "../../core/jokeSearch";
const jokes = [
  "Had this one Had this one Had this one Had this one",
  "Had this one Had this one Had this one Had this one",
  "Had this one Had this one Had this one Had this one",
  "Had this one Had this one Had this one Had this one",
  "Had this one Had this one Had this one Had this one",
  "Had this one Had this one Had this one Had this one",
  "Had this one Had this one Had this one Had this one",
  "Had this one Had this one Had this one Had this one",
  "Had this one Had this one Had this one Had this one",
  "Had this one Had this one Had this one Had this one",
];
export default function JokePage() {
  const [JData, setJData] = useState([]);
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(true);

//   const init = () => {
//       let jokes = []
//     for(var i = 0; i < 10; i++){
//         jokes.push(getJokes())
//     }
//     console.log(jokes)
//   };

  useEffect(()=>{
    // init();
  },[])
//   useEffect(()=>{
//     console.log(JData)
    
//   },[loaded])

 

  return (
    <Layout title="Dad Jokes" page="dlj">
      {loaded? jokes.map((j, i) => (
        <Jokecard joke={j} key={i} />
      )): ""}
    </Layout>
  );
}
