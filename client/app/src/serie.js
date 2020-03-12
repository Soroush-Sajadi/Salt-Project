import React, {Component} from "react";


export default class serie extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          input: null
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
      }      

      handleChange(e) {
        this.setState({ input: e.target.value });
      }
    
      handleClick() {
          
            fetch(`http://localhost:3000/api/${this.state.input}`)
            .then(response => response.json())
            .then(data => this.setState({data}));
          
      }
      
    render() {
        return (  
            <div className="wrap">
                <input className="input" type="text" onChange={ this.handleChange } />
                <input className="button"
                    type="button"
                    value="Search"
                    onClick={this.handleClick} />
                {this.state.data.length !== 0 ? (<div className="weather-info"> 
                    <h1>{`Name: ${this.state.data.Title}`}</h1>
                    <h2>{`Total Season: ${this.state.data.totalSeasons}`}</h2>
                    <h2>{`Season: ${this.state.data.Season}`}</h2>
                    <h3>{`Episodes: ${this.state.data.Episodes.length + 1}`}</h3>
                {this.state.data.Episodes.map(item => <p className="episodes">{item.Title} Released: {item.Released} Episode: {item.Episode} </p>)}
                </div>  ) : null} 
            </div>
        )
    }
}
