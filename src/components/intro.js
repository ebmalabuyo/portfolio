import React from "react"
import pic from "../images/elijah.JPG"


export default function Intro(props) {
    return(

    <div className="intro--cont">
        <div className="intro--items">
            <img src = {pic} className="intro--pic"/>
            <div className="intro--text">
                <h1 className="intro--title">Hey There! ✌️</h1>
                <p>Welcome to my personal website!</p>
                <p>My name is Elijah Malabuyo :)</p>
                <p>I am a fourth year Economics & Computer Science student at California Polytechnic State University, San Luis Obispo</p>
                <p>I have a passion for developing and maintaining clean, scaleable web/mobile applications. I'm interested in a career in Full-Stack Development and UI Engineering.</p>
            </div>
        </div>
    </div>
    )
}