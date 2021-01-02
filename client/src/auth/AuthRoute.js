import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {isAuthenticated} from './index';
// import Routes from '../Routes';
// if a user is admin or a client and try to hit an standard user route, then they will be redirected to the signin page
const AuthRoute = ({component: Component, ...rest})=>(
    <Route {...rest} render={props => isAuthenticated() && isAuthenticated().user.role === 0 ? (
        <Component{...props}/>
    ):(
        <Redirect to={{pathname: '/signin', state:{from: props.location}}}/>
    )}/>
)

export default AuthRoute;