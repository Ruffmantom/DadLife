import React from "react";
import "./style.css";
import plusIcon from "../../../assets/images/newicons/plusIcon.svg";

export default function AddPostBtn({ modalOpen, setModalOpen }) {
  return (
    <div className="dl-cp-add-btn" onClick={e=>setModalOpen(true)}>
      <img className="dl-cp-abtn-icon" src={plusIcon} alt="#" />
    </div>
  );
}
