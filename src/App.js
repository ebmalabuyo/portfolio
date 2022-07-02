import React from "react"
import './App.js';
import Navbar from "./components/nav"
import Intro from "./components/intro.js";
import Bubble from "./components/projects.js";
import project_info from "./project_info.js";
import work_info from "./work_info.js";
// import "./components/work_style.css"
import "./worky.css"
import Work from "./components/work.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'

export default function App() {


  //map through the bubble components
  const projectBubbles = project_info.map(thing => {
    return <Bubble 
            thing = {thing}
    />
  })

  /// for the work experiecne flip through section 
  var [num, setNum] = React.useState(0)
  const [info, setInfo] = React.useState(work_info)


  const newInfo = info.map(item => {
    return (
      <Work
      title = {item.title}
      desc = {item.desc}
      b1 = {item.b1}
      b2 = {item.b2}
      />
    )
  })

  // slider card and slider
  //slider needs to 
  return (
    <div className="big--cont">
      <Navbar />
      <div className="Home">
      </div>
      <Intro />
      <hr></hr>
      <div className="projects--cont">
        <h2 className="projects--title">Projects <span role = 'img'>🖥️</span></h2>
        {projectBubbles}
      </div>
      <hr></hr>
      <h1 className="experi">Experience 👔</h1>
      <div className="bigger-cont">
      <div className="main-slider-cont">
          <FontAwesomeIcon className="arrow-left" icon={faArrowAltCircleLeft} />
            <div className="slider">
              {newInfo}
            </div>
          <FontAwesomeIcon className="arrow-right"  icon={faArrowAltCircleRight} />
      </div>
      <div className="skills">
        <h3><b>Software Skills:</b> Python, Javascript, React.js, HTML/CSS, SQL, Git, R, Microsoft Office</h3>
      </div>
      </div>
      <footer>

      </footer>
    </div>
  );}
