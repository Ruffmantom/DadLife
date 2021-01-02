var queryURL = "https://icanhazdadjoke.com/slack";
// jokeArr, setJokeArr
// export default {
//     // get all posts
//     search:  () =>  {
//         // for some reason the slack api link works best
//         let joke = [];
//         // for (var i = 0; i < 5; i++) {
//             console.log("about to fetch")
//             fetch(
//                 queryURL,
//                 {
//                     method: "GET",
//                 }
//             )
//                 .then(res => res.json())
//                 .then(response =>
//                     // setJokeArr(joke.push(response.attachments[0].text)),
//                     joke.push(response.attachments[0].text),
//                     console.log("fetched")
//                 )
//                 .catch(error => console.log(error));
//                 return joke
//         // }

//     }
// }
export const getJokes = () => {
    fetch(queryURL,{
        method:"GET"
    })
    .then(res => {
        return res.json()
    })
    .catch(err => {
        console.log(err)
    })

};

