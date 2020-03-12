import React, {Component} from "react";



export default class serie extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          pic: [],
          input: null,
          seasonInput: null
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChangeSeason = this.handleChangeSeason.bind(this);
        this.handleClickSeason = this.handleClickSeason.bind(this);
      }      

      handleChange(e) {
        this.setState({ input: e.target.value });
      }
    
      async handleClick() {
            await fetch(`http://localhost:3000/api/${this.state.input}/1`, {headers: {
              'Access-Control-Allow-Origin': '*'
            }})
              .then(response => response.json())
              .then(data => {
                console.log('TRYING TO SET STATE')
                this.setState({data})
              });
            await fetch(`http://localhost:3000/api/pic/${this.state.input}/1`, {headers: {
              'Access-Control-Allow-Origin': '*'
            }})
              .then(res => res.json())
              .then(pic => this.setState({ pic }));
      }
      handleChangeSeason(e) {
        this.setState({ seasonInput: e.target.value });
        
      }
    
       handleClickSeason() {
             fetch(`http://localhost:3000/api/${this.state.input}/${this.state.seasonInput}`)
              .then(response => response.json())
              .then(data => this.setState({ data }));
             fetch(`http://localhost:3000/api/pic/${this.state.input}/${this.state.seasonInput}`)
              .then(res => res.json())
              .then(pic => this.setState({ pic }));
      }
      
    render() {
        return (  
            <div className="wrap">
                <input className="input" type="text" placeholder="What is your favorite Serie" onChange={ this.handleChange } />
                <input className="button" type="button" value="Search" onClick={this.handleClick} />
                {this.state.data.length !== 0 ? (<div className="Serie-info"> 
                    <h1>{`Name: ${this.state.data.Title}`}</h1>
                    <h2>{`Total Season: ${this.state.data.totalSeasons}`}</h2>
                    <h2>{`Season: ${this.state.data.Season}`}</h2>
                    <input className="input-season" type="text" placeholder="season" onChange={ this.handleChangeSeason } />
                    <input className="button-season" type="button" value="Search" onClick={this.handleClickSeason} />
                    <h3>{`Episodes: ${this.state.data.Episodes.length + 1}`}</h3>
        {this.state.data.Episodes.map((item, index) => <div key={index} className="episodes"><div className="text"><p>{item.Title}</p>  <p>Released: {item.Released}</p> <p>Episode: {item.Episode}</p></div> <div><img className="img" src={this.state.pic.Poster}/></div> </div>)}
                </div>  ) : null} 
            </div>
        )
    }
}
