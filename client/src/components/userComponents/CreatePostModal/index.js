import React, { useState, useEffect } from "react";
import "./style.css";
import closeIcon from "../../../assets/images/newicons/closeIcon.svg";
// getting redux store
import { useDispatch } from "react-redux";
import { closeModal } from "../../../actions";

export default function CreatePostModal({ userPostsId, token }) {
  // make sure to import dispatch so that you can use the actions.
  const dispatch = useDispatch();
  const { values, setValues } = useState({
    img: "",
    postText: "",
    userId: userPostsId,
    formData: "",
    loading: false,
    error: "",
  });
  const { postText, user, userId, formData, loading, error } = values;
  const handleChange = (name) => (event) => {
    const value = name === "img"? event.target.files[0] : event.target.value;
    setValues(...values, ([name] = event.target.value));
  };
  const formSubmit = (e) => {
    e.preventDefault();
    console.log(postText, userId);
  };

  const formComp = () => {
    return (
      <form onSubmit={(e) => formSubmit(e)} className="cp-f-cont">
        <input
          type="file"
          name="img"
          onChange={handleChange("img")}
          accept="image/*"
        />
        <textarea
          typeof="text"
          onChange={handleChange("postText")}
          maxLength="150"
          value={postText}
        ></textarea>
        <button typeof="submit">Post</button>
      </form>
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
