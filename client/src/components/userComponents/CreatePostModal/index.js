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
          <div>
            <img
              src={loaded && uploadedImg ? uploadedImg : defaultImg}
              alt=""
            />
            <textarea
              typeof="text"
              onChange={(e) => handleTextChange(e)}
              maxLength="150"
              value={textValue}
            ></textarea>
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
