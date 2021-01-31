import React, { useState, useEffect } from "react";
import "./style.css";
import closeIcon from "../../../assets/images/newicons/closeIcon.svg";

export default function CreatePostModal({ userPostsId, token, setModalOpen }) {
  const { data, setData } = useState({
    img: "",
    postText: "",
    userId: userPostsId,
    formData: "",
    loading: false,
    error: "",
  });
  const { img, postText, user, userId, formData, loading, error } = data;
  const handleChange = (e) => (name) => {
    setData(...data, [name] = e.target.value)
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
          onChange={handleChange("img")}
          accept="image/*"
          value={img}
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
        onClick={setModalOpen(false)}
        className="cp-modal-close"
        src={closeIcon}
        alt="#"
      />
      {formComp()}
    </div>
  );
}
