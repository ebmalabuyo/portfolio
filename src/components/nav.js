import React, { Component } from "react";
import { MenuItems } from '../MenuItems'
import './nav.css'

class Navbar extends Component {
   state = { active: false }
   
   handleClick = () => {
    this.setState({active: !this.state.active})
   }

    render(){
        return (
            <header className = "nav">
                <h2 className="nav--title">Elijah Malabuyo</h2>
                <div className="menu--icon" onClick = {this.handleClick}>
                    <i className={this.state.active ? 'fas fa-times' : 'fas fa-bars'}></i>

                </div>
                <ul className={this.state.active ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                            return (
                                <li key = {index}>
                                    <a className={item.cName} href={item.url}>
                                        {item.section}
                                    </a>
                                </li>
                            )
                        }
                    )
                    }
                    
                </ul>
            </header>
    )}
}

export default Navbar