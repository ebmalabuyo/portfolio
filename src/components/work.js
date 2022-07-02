import React from "react";

// import "./work_style.css"

// export default function Work() {
//     return ()
// }

export default function Work(props) {


    return (
                <div className="slider-card">
                    <div className="card-info">
                    <h3 className="work--title">{props.title}</h3>
                    <h4 className="work--desc">{props.desc}</h4>
                    <ul className="work--list">
                        <li>{props.b1}</li>
                        <li>{props.b2}</li>
                    </ul>
                    </div>
                </div>
    )

}