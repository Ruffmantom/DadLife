var queryURL = "https://icanhazdadjoke.com/";

// export const queryTheJokes = () => {
//     // for(var i = 0; i <= 10; i++){
//         fetch(queryURL,{
//             method:"GET",
//             headers:{
//                 Accept: 'application/json',
//             }
//         })
//         .then(res => {
//             return res.json()
//         })
//         .catch(err => {
//             console.log(err)
//         })
//     // }
// };
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
