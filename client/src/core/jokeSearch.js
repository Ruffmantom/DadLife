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
export const getJokes = () => {
  fetch(queryURL, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    //.then((data) => console.log(data));
};
