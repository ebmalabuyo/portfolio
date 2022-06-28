import React from "react"
import './App.js';
import Navbar from "./components/nav"
import Intro from "./components/intro.js";
import jump from './images/jump.JPG'
import Bubble from "./components/projects.js";
import project_info from "./project_info.js";

function App() {

  const projectBubbles = project_info.map(thing => {
    return <Bubble 
            thing = {thing}
    />
  })
  return (
    <div>
      <Navbar />
      <div className="Home">
      </div>
      <Intro />
      <div className="projects--cont">
        <h2 className="projects--title">Projects</h2>
        {projectBubbles}
      </div>
    </div>
  );
}

export default App;
