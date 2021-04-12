import React from "react";
// import { IMGBBAPI_KEY, IMGBBAPI } from "../../../config";
// import Axios from "axios";

export default function EditUser() {
  // const [imgValues, setImgValues] = useState("");
  // const [uploadedImg, setUploadedImg] = useState("");
  // const [imgStyles, setImgStyles] = useState("");
  const defaultImg =
    "https://www.plextek.com/wp-content/uploads/default-placeholder-1024x1024-500x500-1.png";
  // const styles = {
  //   width: {
  //     height: "auto",
  //     width: "100%",
  //     marginTop: "-25%",
  //   },
  //   height: {
  //     height: "100%",
  //     width: "auto",
  //   },
  // };

  // const handleImgChange = (event) => {
  //   setImgValues(event.target.files[0]);
  // };
  /// --------- SAVE FOR USER EDIT TO ADD IMAGE --------
  // const imgFormSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("image", imgValues);
  //   var imgQuery = `${IMGBBAPI}?key=${IMGBBAPI_KEY}`;
  //   Axios.post(imgQuery, formData)
  //     .then((res) => {
  //       setUploadedImg(res.data.data.url);
  //     })
  //     .then(() => {
  //       setLoaded(true);
  //     });
  // };
  /// --------- SAVE FOR USER EDIT TO ADD IMAGE --------
  // const handlePreveiwSize = (name) => {
  //   console.log(name);
  //   if (name === "height") {
  //     setImgStyles(styles.height);
  //   } else {
  //     setImgStyles(styles.width);
  //   }
  // };
  // setImgValues("");
  // setUploadedImg("");
  // setImgStyles("");

  // <div className="">
  //   <div className="img-preview-cont">
  //     <img
  //       className="preview-img"
  //       style={loaded && imgStyles ? imgStyles : { height: "100%" }}
  //       src={loaded && uploadedImg ? uploadedImg : defaultImg}
  //       alt=""
  //     />
  //   </div>
  //   <div className="edit-img-btn-cont">
  //     <button
  //       onClick={() => handlePreveiwSize("width")}
  //       className="width-btn"
  //     >
  //       Width
  //     </button>
  //     <p>Size By</p>
  //     <button
  //       onClick={() => handlePreveiwSize("height")}
  //       className="height-btn"
  //     >
  //       Height
  //     </button>
  //   </div>
  //   <form
  //     className="add-post-text-cont"
  //     onSubmit={(e) => submitPost(e)}
  //   >
  //     <textarea
  //       typeof="text"
  //       onChange={(e) => handleTextChange(e)}
  //       maxLength="150"
  //       value={textValue}
  //     ></textarea>
  //     <button typeof="submit">Post</button>
  //   </form>
  // </div>
  return <div></div>;
}
