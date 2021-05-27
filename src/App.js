import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import "./index.scss";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Route path="/" exact component={Home} />
      </div>
    </Router>
  );
};

export default App;
