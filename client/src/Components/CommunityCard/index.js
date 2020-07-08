import React from 'react'
import "./style.css"
import likedBtn from "../../assets/images/icons/blackIcons/like.png";
// replace this image with user posted
import postImage from "../../assets/images/pjandbria2.jpg";



export default function CommunityCard(props) {
    return (
        <div>
            <div className="community-card">
                {/* <img className="post-image" src={postImage} alt="image" /> */}
                <p className="user-name">{props.userName}</p>
                <p className="post-desc">{props.postDesc}</p>
                <img className="like" onClick={e => (props.getUserClicked())} data-like={false} src={likedBtn} alt="like" />
            </div>
        </div>
    )
}
