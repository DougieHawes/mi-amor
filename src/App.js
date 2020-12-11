import React from "react";

import "./style.min.css";

import Navbar from "./components/layout/Navbar";

import Landing from "./components/routes/public/Landing.js";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Landing />
    </div>
  );
};

export default App;
