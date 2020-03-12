import React, {Component} from "react";
import { NavLink } from 'react-router-dom';
import './header.css'


export default class serie extends Component {
    
      
      render() {
        return (  
            <header className="header">
              <nav className="navigator">
                <ul>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Movies">Movies</NavLink>
                  </li>
                  <li>
                    <NavLink to="Series">Series</NavLink>
                  </li>
                </ul>
                </nav>
              </header>
        )
    }
}
