import React, { useState, useEffect } from "react";
import { postPosts } from "../../../core/jokeSearch";
import { IMGBBAPI_KEY, IMGBBAPI } from "../../../config";
import Axios from "axios";
import "./style.css";
import closeIcon from "../../../assets/images/newicons/closeIcon.svg";
// getting redux store
import { useDispatch } from "react-redux";
import { closeModal } from "../../../actions";

export default function CreatePostModal({ userPostsId, token }) {
  // make sure to import dispatch so that you can use the actions.
  const dispatch = useDispatch();
  const defaultImg =
    "https://www.plextek.com/wp-content/uploads/default-placeholder-1024x1024-500x500-1.png";
  const [textValue, setTextValue] = useState("");
  const [imgValues, setImgValues] = useState("");
  const [uploadedImg, setUploadedImg] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [imgStyles, setImgStyles] = useState("");
  const styles = {
    width: {
      height: "auto",
      width: "100%",
      marginTop: "-25%",
    },
    height: {
      height: "100%",
      width: "auto",
    },
  };
  const handleTextChange = (event) => {
    setTextValue(event.target.value);
  };
  const handleImgChange = (event) => {
    setImgValues(event.target.files[0]);
  };

  const imgFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", imgValues);
    var imgQuery = `${IMGBBAPI}?key=${IMGBBAPI_KEY}`;
    Axios.post(imgQuery, formData)
      .then((res) => {
        setUploadedImg(res.data.data.url);
      })
      .then(() => {
        setLoaded(true);
      });
  };
  const handlePreveiwSize = (name) => {
    console.log(name);
    if (name === "height") {
      setImgStyles(styles.height);
    } else {
      setImgStyles(styles.width);
    }
  };
  const submitPost = (e) => {
    e.preventDefault();
    const postData = {
      user: userPostsId,
      postImgUrl: uploadedImg,
      postText: textValue,
      imgProperties: imgStyles,
    };
    // console.log(userPostsId + " " + token);
    postPosts(userPostsId, token, postData);
    setTextValue("");
    setImgValues("");
    setUploadedImg("");
    setLoaded(false);
    setImgStyles("");
    dispatch(closeModal(false));
  };
  const formComp = () => {
    return (
      <div className="cp-f-cont">
        {!loaded ? (
          <form onSubmit={(e) => imgFormSubmit(e)}>
            <input
              type="file"
              name="image"
              onChange={(e) => handleImgChange(e)}
              accept="image/*"
            />

            <button typeof="submit">Use Photo</button>
          </form>
        ) : (
          <div className="">
            <div className="img-preview-cont">
              <img
                className="preview-img"
                style={loaded && imgStyles ? imgStyles : { height: "100%" }}
                src={loaded && uploadedImg ? uploadedImg : defaultImg}
                alt=""
              />
            </div>
            <div className="edit-img-btn-cont">
              <button
                onClick={() => handlePreveiwSize("width")}
                className="width-btn"
              >
                Width
              </button>
              <p>Size By</p>
              <button
                onClick={() => handlePreveiwSize("height")}
                className="height-btn"
              >
                Height
              </button>
            </div>
            <form
              className="add-post-text-cont"
              onSubmit={(e) => submitPost(e)}
            >
              <textarea
                typeof="text"
                onChange={(e) => handleTextChange(e)}
                maxLength="150"
                value={textValue}
              ></textarea>
              <button typeof="submit">Post</button>
            </form>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="cp-modal-overlay">
      <img
        onClick={() => dispatch(closeModal(false))}
        className="cp-modal-close"
        src={closeIcon}
        alt="#"
      />
      {formComp()}
    </div>
  );
}
