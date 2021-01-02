import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ScrollToTop from "./components/ScollToTop";
import AuthRoute from "./auth/AuthRoute";
// sign in/sign up
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
// auth user routes
import ProfilePage from "./pages/ProfilePage";
import CommunityPage from "./pages/CommunityPage";
import JokePage from "./pages/JokePage";
// admin pages


export default function routes() {
    return (
        <BrowserRouter>
        <ScrollToTop />
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />
            {/* User Routes */}
            <AuthRoute path="/auth/:userId" exact component={ProfilePage} />
            <AuthRoute path="/auth/community/:userId" exact component={CommunityPage} />
            <AuthRoute path="/auth/jokes/:userId" exact component={JokePage} />
            {/* Admin Routes */}
            {/* <AdminRoute path="/admin/dashboard" exact component={AdminDash} /> */}
        </Switch>
    </BrowserRouter>
    )
}
