import React from 'react';
import { BrowserRouter, Switch, Route } from'react-router-dom';
import Serie from './serie';
import Movie from './movie';
import Home from './home'
import Header from './header';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <>
        <div>
          <Header />
        </div>
       <Switch>
         <Route exact path="/" render={() => <Home/>}/>  
         <Route path="/Movies" render={() => <Movie/>}/>
         <Route path="/Series" render={() => <Serie/>}/>
       </Switch>
      </>
      </BrowserRouter>
  );
}

export default App;
