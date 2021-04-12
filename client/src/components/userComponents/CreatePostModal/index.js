import React, { useState, useEffect } from "react";
import { postPosts } from "../../../core/jokeSearch";
import "./style.css";
import closeIcon from "../../../assets/images/newicons/closeIcon.svg";
// getting redux store
import { useDispatch } from "react-redux";
import { closeModal } from "../../../actions";

export default function CreatePostModal({ userPostsId, token, curUserName }) {
  // make sure to import dispatch so that you can use the actions.
  const dispatch = useDispatch();
  const [textValue, setTextValue] = useState("");
  const [loaded, setLoaded] = useState(false);

  const handleTextChange = (event) => {
    setTextValue(event.target.value);
  };

  const submitPost = (e) => {
    e.preventDefault();
    const postData = {
      userName: curUserName,
      posterId: userPostsId,
      postText: textValue,
    };
    postPosts(userPostsId, token, postData);

    console.log('posting the post')
    console.log(postData)
    console.log('posting the post')
    setTextValue("");
    setLoaded(false);
    dispatch(closeModal(false));
  };
  const formComp = () => {
    return (
      <div className="cp-f-cont">
        {!loaded ? (
          <div className="cp-f-div">
            <h3 className="post-title">Just like my Daddy used to say...</h3>
            <form className="add-post-text-cont" onSubmit={(e) => submitPost(e)}>
              <textarea
              className="post-text"
                typeof="text"
                onChange={(e) => handleTextChange(e)}
                maxLength="150"
                placeholder="Type your Dad joke here..."
                value={textValue}
              ></textarea>
              <button typeof="submit">Post</button>
            </form>
          </div>
        ) : ("")}
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
