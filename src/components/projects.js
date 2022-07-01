import React from "react";

export default function Bubble(props) {
    
    return (
        <div className="bubble">
            <a className="projects--link" href="https://www.google.com/">
            <h3 className="bubble--title">{props.thing.title}</h3>
            <h4 className="bubble-desc">{props.thing.desc}</h4>
            <ul className="bubble--list">
                <li className="bubble--item">{props.thing.b1}</li>
                <li className="bubble--item">{props.thing.b2}</li>
                <li className="bubble--item">{props.thing.b3}</li>
            </ul>
            </a>
        </div>
    )
}