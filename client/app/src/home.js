import React, {Component} from "react";
import { NavLink } from 'react-router-dom';
import './header.css'


export default class serie extends Component {
    
      
      render() {
        return (  
            <div className="Home">
              <div className="overlay">
                <h1>Sushi Watch</h1>
                <h3>Smart way to find your favorite movies and series</h3>
                <p>We offer you an amazing seervice and its all free for the first month. it's easy to find the movie and serie you would like watch</p>
		      </div>
            </div>
        )
    }
}
