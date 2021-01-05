import React from "react";
import { useHistory } from "react-router-dom";
import Layout from "../../components/userComponents/Layout";
import "./style.css";
import SignOutComp from "../../components/signOutComp";
import { isAuthenticated } from "../../auth/index";
// import iconsnnp
import defaultImg from "../../assets/images/newicons/feather-user.svg";

export default function ProfilePage() {
  const history = useHistory();
  const { user, token } = isAuthenticated();

  const profileHead = () => {
    return (
      <div className="dlp-head">
        <div className="dlp-image-cont">
          <img src={defaultImg} alt="#" />
        </div>
        <p className="dlp-text" style={{ textTransform: "capitalize" }}>
          {user.userName}
        </p>
        <p className="dlp-text">{user.description ? user.description : ""}</p>
        <p className="dlp-edit-btn">Edit</p>
      </div>
    );
  };
  const profileBody = ()=>{
      return(
          <div>
              
          </div>
      )
  }

  return (
    <Layout title="" page="dlp" background="#E3E3E3">
      <SignOutComp />
      {profileHead()}
    </Layout>
  );
}
