import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import "./index.css";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Route path="/" exact component={Home} />
      </Router>
    </div>
  );
};

export default App;
