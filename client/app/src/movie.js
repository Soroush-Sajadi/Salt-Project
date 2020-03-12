import React, {Component} from "react";



export default class serie extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          input: null,
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        
      }      

      handleChange(e) {
        this.setState({ input: e.target.value });
      }
    
      async handleClick() {
            await fetch(`http://localhost:3000/api/${this.state.input}`, {headers: {
              'Access-Control-Allow-Origin': '*'
            }})
              .then(response => response.json())
              .then(data => { this.setState( { data } )
              });
      }
      
      render() {
        return (  
            <div className="wrap">
                <input className="input" type="text" placeholder="What is your favorite Serie" onChange={ this.handleChange } />
                <input className="button" type="button" value="Search" onClick={this.handleClick} />
                {this.state.data.length !== 0 ? (<div className="Serie-info"> 
                    
                {this.state.data.Search.map((item, index) => 
                <div key={index} className="episodes"><div className="text">
                    <p>Name: {item.Title}</p>  <p>Released: {item.Year}</p> 
                    <p>Type: {item.Type}</p></div> <div>
                    <img className="img" src={item.Poster}/></div> 
                </div>)}
                </div>  ) : null} 
            </div>
        )
    }
}
