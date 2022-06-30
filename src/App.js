import React from "react"
import './App.js';
import Navbar from "./components/nav"
import Intro from "./components/intro.js";
import Bubble from "./components/projects.js";
import project_info from "./project_info.js";
import Work from './components/work'
import work_info from "./work_info.js";
import "./components/work_style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {


  //map through the bubble components
  const projectBubbles = project_info.map(thing => {
    return <Bubble 
            thing = {thing}
    />
  })



  return (
    <div>
      <Navbar />
      <div className="Home">
        {/* <h1 className="welcome">Welcome!</h1> */}
      </div>
      <Intro />
      <hr></hr>
      <div className="projects--cont">
        <h2 className="projects--title">Projects <span role = 'img'>🖥️</span></h2>
        {projectBubbles}
      </div>
      <div className="work--cont">
      <i className="fa-solid fa-arrow-left-long"></i>
      </div>
    </div>
  );
}

export default App;
