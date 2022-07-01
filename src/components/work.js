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
            <FontAwesomeIcon className="arrow-left" onClick={props.handleClick2} icon={faArrowAltCircleLeft} />
            <div className="cont--info">
                <div className="jobs">
                <h3 className="work--title">{props.title}</h3>
                <h4 className="work--desc">{props.desc}</h4>
                <ul className="work--list">
                    <li>{props.b1}</li>
                    <li>{props.b2}</li>
                </ul>
                </div>
            </div>
            <FontAwesomeIcon className="arrow-right" onClick={props.handleClick} icon={faArrowAltCircleRight} />
        </div>
    )

}