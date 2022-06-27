import React from "react"
import './App.js';
import Navbar from "./components/nav"
import Intro from "./components/intro.js";
import jump from './images/jump.JPG'


function App() {

  return (
    <div>
      <Navbar />
      <div className="Home">
        <h1 className="Home--text">WELCOME</h1>
      </div>
      <Intro />
    </div>
  );
}

export default App;
