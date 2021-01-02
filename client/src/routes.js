import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// auth routes
// admin pages
// user pages

export default function routes() {
    return (
        <BrowserRouter>
        <ScrollToTop />
        <CookieAgreement/>
        <Switch>
            <Route path="/" exact component={Home} />
            {/* User Routes */}
            <AuthRoute path="/auth/home" exact component={AuthHome} />
            {/* Admin Routes */}
            <AdminRoute path="/admin/dashboard" exact component={AdminDash} />
        </Switch>
    </BrowserRouter>
    )
}
