import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
// import "./work_style.css"

// export default function Work() {
//     return ()
// }

export default function Work(props) {


    return (
        <div className="work--items">
            <FontAwesomeIcon className="arrow" onClick={props.handleClick2} icon={faArrowAltCircleLeft} />
            <div className="jobs">
            <h3 className="work--title">{props.title}</h3>
            <h4 className="work--desc">{props.desc}</h4>
            <ul className="work--list">
                <li>{props.b1}</li>
                <li>{props.b2}</li>
            </ul>
            </div>
            <FontAwesomeIcon className="arrow" onClick={props.handleClick} icon={faArrowAltCircleRight} />
        </div>
    )

}