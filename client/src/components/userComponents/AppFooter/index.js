import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import jokesIcon from "../../../assets/images/newicons/jokes-outline.png";
import jokesActiveIcon from "../../../assets/images/newicons/jokes-fill.png";
import profileIcon from "../../../assets/images/newicons/profile-outlined.png";
import profileActiveIcon from "../../../assets/images/newicons/profile-fill.png";
import communityIcon from "../../../assets/images/newicons/community-outlined.png";
import communityActiveIcon from "../../../assets/images/newicons/community-fill.png";
import "./style.css";
import { isAuthenticated } from "../../../auth/index";

export default function AppFooter({ page }) {
  const { user } = isAuthenticated();
  const [jokesActive, setJokesActive] = useState(false);
  const [profileActive, setProfileActive] = useState(false);
  const [commActive, setCommActive] = useState(false);
  

  useEffect(() => {
    if (page === "dlj") {
      setJokesActive(true);
    } else if (page === "dlp") {
      setProfileActive(true);
    } else {
      setCommActive(true);
    }
  }, []);
  return (
    <div className="dl-footer">
      <Link className={ jokesActive? `dlfl-l-active dlf-l dl-f-l`: `dl-f-l dlf-l`} to={`/auth/jokes/${user._id}`}>
        {jokesActive ? (
          <img className="dl-f-icon dl-f-active" src={jokesActiveIcon} alt="#" />
        ) : (
          <img className="dl-f-icon" src={jokesIcon} alt="#" />
        )}
      </Link>
      <Link className={ profileActive? `dlfl-m-active dlf-m dl-f-l`: `dl-f-l dlf-m`} to={`/auth/${user._id}`}>
        {profileActive ? (
          <img className="dl-f-icon dl-f-active" src={profileActiveIcon} alt="#" />
        ) : (
          <img className="dl-f-icon" src={profileIcon} alt="#" />
        )}
      </Link>
      <Link className={ commActive? `dlfl-r-active dlf-r dl-f-l`: `dl-f-l dlf-r`} to={`/auth/community/${user._id}`}>
        {commActive ? (
          <img className="dl-f-icon dl-f-active" src={communityActiveIcon} alt="#" />
        ) : (
          <img className="dl-f-icon" src={communityIcon} alt="#" />
        )}
      </Link>
    </div>
  );
}
