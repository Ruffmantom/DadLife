import { IMGBBAPI_KEY, IMGBBAPI, API } from "../config";
import Axios from "axios";
var queryURL = "https://icanhazdadjoke.com/";

var imgQuery = `${IMGBBAPI}?key=${IMGBBAPI_KEY}`;

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
//  -------------____SCRAPING_____-------------
// // so when the add Post btn get pushed (steps)
// // .. 1st it will have you choose a photo
// // .. 2nd once photo is choosen it will upload to imgBB, and return the URL for editing
// // .. 3rd once it is edited, it will replace the photo that just got uploaded and return the new URL
// // .. 4th once that is done it there will be the screen that shows the photo and add a description box

// export const postPosts = (userId, token, postData) => {
//   // var image = postData.image;
//   return fetch(`${API}/post/create/${userId}`, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify(postData),
//   })
//     .then((res) => {
//       return res.json();
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   // what I want to accomplish
//   //post the image first
//   //get the responce and take the direct Image URL and then do another post to the DB
//   //post to the DB with all the attributes needed for the user post
// };
//  -------------____SCRAPING_____-------------
export const postPosts = (userId, token, postData) => {
    return fetch(`${API}/post/create/${userId}`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "content-Type": 'application/json',
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(postData),
    }).then((res) => {
        return res.json({
            data:postData
        });
      }).catch((err) => {
        console.log(err);
      });

  };
