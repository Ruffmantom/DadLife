import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {isAuthenticated} from './index';
// import Routes from '../Routes';
// if a user is standard user or a client and try to hit an admin route, then they will be redirected to the signin page
const AdminRoute = ({component: Component, ...rest})=>(
    <Route {...rest} render={props => isAuthenticated() && isAuthenticated().user.role === 1 ? (
        <Component{...props}/>
    ):(
        <Redirect to={{pathname: '/signin', state:{from: props.location}}}/>
    )}/>
)

export default AdminRoute;