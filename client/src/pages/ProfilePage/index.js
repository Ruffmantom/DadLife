import React from 'react';
import {useHistory} from "react-router-dom";
import Layout from "../../components/userComponents/Layout";
import './style.css';
import SignOutComp from '../../components/signOutComp';


export default function ProfilePage() {
    const history = useHistory();
    
    return (
        <Layout
        title=''
        page="dlp"
        >
            <SignOutComp/>
            profile page
        </Layout>
    )
}
