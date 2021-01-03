import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { signOut } from "../../auth/index";
import "./style.css";
import signOutIcon from '../../assets/images/newicons/logout-white.svg';

const SignOutComp = ({ history }) => {
    
    return (
        <div className="dl-p-signout">
            <Link onClick={() => signOut(() => {history.push('/signout');})} className="dl-p-s-link" to="/signin">
            <img src={signOutIcon} alt="#" />
            </Link>
        </div>
    )
}

export default withRouter(SignOutComp);
