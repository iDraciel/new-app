import React, { Component } from 'react';
import header from './images/header.jpg';
import DOTA from './images/DOTA.jpg';
import CSGO from './images/CSGO.jpg';
import './App.css';
import Game from './Games/Games.js';
import {Gamer} from './Games/Gamers.js';


class App extends Component {
  state = {
    showPersons: false
  }
  toggleGamersHandler= () =>{
const doesShow = this.state.showPersons;
this.setState({showPersons: !doesShow});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={header} className="header" alt="header" />
    
          <h1 className="App-title">Top Esports Gaming list</h1>
        </header>
      
         <Game name="Cs-Go"/>
          <img src={CSGO} onClick={this.toggleGamersHandler} className="header" alt="header" />
        
          {this.state.showPersons === true ?
            
            
            <div>
            
            
  <div className="row">
<Gamer name="Simple" id="oM-XJD4J36U" />
<Gamer name="Linkin Park" id="WNeLUngb-Xg"/>

<Gamer name="Coldplay" id="YykjpeuMNEk"/>
<Gamer name="Coldplay" id="1G4isv_Fylg"/>


  </div>
  
  
  </div> :null
  }
        
         <Game name="Dota-2" />
         <img src={DOTA} className="header" alt="DOTA " />
        
        
      </div>

    );
  }
}

export default App;
