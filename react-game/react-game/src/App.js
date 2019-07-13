import React, { Component } from 'react';
import {BrowserRouter , Link ,Route , Switch} from 'react-router-dom'

import Board from './components/Board';
import QuestionGame from './components/QuestionGame';
import Logo from './components/logo';
import Header from './components/Header';
import './App.css';


class App extends Component {
  state={
    currPlayer: 0 
  }

  
  render () {
    
    return (
      <BrowserRouter > 
      <div className="App">
      <Logo/>
      <Header/>
        {/* <header>
          <nav> 
            <ul>
            <li><Link to='/Home'>Home</Link></li>
              <li><Link to='/Board'>X/0</Link></li>
              <li><Link to= '/QuestionGame'>Trivia</Link></li> 
            </ul>
              
          </nav>
        </header> */}
        <Switch>
        <Route path="/"  exact render= {()=><h1>Welcome!</h1>}/>
        <Route path="/Board"  component={Board}/>
        <Route path="/QuestionGame"  component={QuestionGame}/>
        </Switch>
        
        {/* <Board player={this.state.currPlayer}/>
        <QuestionGame /> */}
      </div>
      </BrowserRouter >
      
    );
   
  }
}

export default App;
