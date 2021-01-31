import React from "react";
import "./style.css";
import plusIcon from "../../../assets/images/newicons/plusIcon.svg";
import { useDispatch, useSelector } from "react-redux";
// import the actions
import { openModal } from '../../../actions';

// actual component
export default function AddPostBtn() {
     // make sure to import dispatch so that you can use the actions.
  const dispatch = useDispatch();
  return (
    <div className="dl-cp-add-btn" onClick={() => dispatch(openModal())}>
      <img className="dl-cp-abtn-icon" src={plusIcon} alt="#" />
    </div>
  );
}
