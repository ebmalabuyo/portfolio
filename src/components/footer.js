import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


export default function Footer() {
    return (
        <footer id ="four">
            <h1>Contact 👋</h1>
            <div className="logos">
            <a href="mailto:elijahbmalabuyo@gmail.com"><FontAwesomeIcon className = "email" icon={faEnvelope} size ="3x" color="black" /></a>
            <a href="https://github.com/ebmalabuyo"><FontAwesomeIcon icon={faGithub}  size ="3x" className="github" /></a>
            <a href="https://www.linkedin.com/in/emalabuyo/"><FontAwesomeIcon icon={faLinkedin}  size ="3x" className="linkedin"/></a>
            </div>
        </footer>
    )
}