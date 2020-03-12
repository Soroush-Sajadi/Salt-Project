import React, {Component} from "react";
import { NavLink } from 'react-router-dom';
import './header.css'


export default class serie extends Component {
    
      
      render() {
        return (  
            <div className="Home">
              <div className="overlay">
                <h1 className="h1">Sushi Watch</h1>
                <h3 className="h3">Smart way to find your favorite movies and series</h3>
                <p className="p1">We offer you an amazing service and it's all for free the first month. 
                it's easy to find the movies and series with us!</p>
		      </div>
            </div>
        )
    }
}
