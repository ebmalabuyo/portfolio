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

  function plusOne() {
    setNum(prevState => {
      if (prevState === info.length - 1) {
        return 0
      } else {
      return (prevState + 1)
      };
    })
  }

  function MinusOne() {
    setNum(prevState => {
      if (prevState === 0) {
        return info.length - 1
      } else {
      return (prevState - 1)
      };
    })
  }

  return (
    <div>
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
      <div className="work--cont">
      <Work 
        title = {info[num].title}
        desc = {info[num].desc}
        b1 = {info[num].b1}
        b2 = {info[num].b2}
        handleClick = {plusOne}
        handleClick2 = {MinusOne}
        />
      </div>
      <div className="skills">
        <h3><b>Software Skills:</b> Python, Javascript, React.js, HTML/CSS, SQL, Git, R, Microsoft Office</h3>
      </div>
    </div>
  );}
