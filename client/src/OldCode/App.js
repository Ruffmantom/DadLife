import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import pages
import Signup from "../Pages/Signup";
import Jokes from "./Pages/Jokes";
import Profile from "./Pages/Profile";
import Community from "./Pages/Community";

// import components

function App() {
  return (
    <Router>
      <div>

        {/* pages with exact path */}
        <Route exact path="/" component={Signup} />
        <Route exact path="/signup" component={Signup} />
        {/* inside app pages */}
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/community" component={Community} />
        <Route exact path="/jokes" component={Jokes} />

      </div>
    </Router>

  );
}

export default App;
