import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        {/* <a href="https://www.freepik.com/vectors/logo">
          Logo vector created by freepik - www.freepik.com
        </a> */}
      </div>
    </Router>
  );
}

export default App;
