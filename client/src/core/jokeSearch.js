import { method } from "lodash";

var queryURL = "https://icanhazdadjoke.com/";

const IMGBB_KEY = process.env.REACT_APP_IMGBB_KEY; 
const IMGBB_URL = process.env.REACT_APP_IMGBB_URL;

var imgQuery = `${IMGBB_URL}?key=${IMGBB_KEY}`;

async function getJ() {
  const jokeData = await fetch(queryURL, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const jokeObj = await jokeData.json();
  console.log(jokeObj);
}
export const getJokes = () => {
  getJ();
};



const postPosts = (formData, userId, token) => {
  fetch(imgQuery,{
    method:'POST',
    headers: {
      Accept: "application/json",
    }
  })
  .then(res.json)
  .then(console.log(data))
// what I want to accomplish
//post the image first
//get the responce and take the direct Image URL and then do another post to the DB
//post to the DB with all the attributes needed for the user post
};
