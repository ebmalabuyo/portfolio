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
import { faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import Footer from "./components/footer.js";
import ReactCardSlider from 'react-card-slider-component';
import { MdChevronLeft,MdChevronRight } from 'react-icons/md';
import Home from "./components/home.js";

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

  const slideLeft =()=>{
    var slider = document.getElementsByClassName("slider")[0];
    slider.scrollLeft = slider.scrollLeft - 320;
}

const slideRight =()=>{
  var slider = document.getElementsByClassName("slider")[0];
  slider.scrollLeft = slider.scrollLeft + 320;
}


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
      <Home />
      <Intro />
      <hr></hr>
      <div className="projects--cont">
        <h2 id = "two" className="projects--title">Projects <span role = 'img'>🖥️</span></h2>
        {projectBubbles}
      </div>
      <hr></hr>
      <h1 id="three" className="experi">Experience 👔</h1>
      <div className="bigger-cont">
        <div className="main-slider-cont">
        <MdChevronLeft size={40} onClick = {slideLeft} className="slider-icon left"/>
          <div className="slider">
            {newInfo}
          </div>
        <MdChevronRight size={40} onClick = {slideRight} className="slider-icon right"/>
       </div>
        <div className="skills">
          <h3><b>Software Skills:</b> Python, Javascript, React.js, HTML/CSS, SQL, Git, R, Microsoft Office</h3>
      </div>
      </div>
      <hr></hr>
      <Footer />
    </div>
  );}
