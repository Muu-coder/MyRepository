//import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      display:"display"
    }

    this.drumPlay = this.drumPlay.bind(this);
  }

  render(){
    return(
      <div id='drum-machine'>
        <div id='display'>{this.state.display}</div>
        <button class='drum-pad' id='Heater1' onClick={this.drumPlay}>Q
          <audio class='clip' id='Q' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3'></audio> 
        </button>
        <button class='drum-pad' id='Heater2' onClick={this.drumPlay}>W
          <audio class='clip' id='W' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3'></audio> 
        </button>
        <button class='drum-pad' id='Heater3' onClick={this.drumPlay}>E
          <audio class='clip' id='E' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3'></audio>
        </button>
        <button class='drum-pad' id='Heater4' onClick={this.drumPlay}>A
          <audio class='clip' id='A' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3'></audio>
        </button>
        <button class='drum-pad' id='Clap' onClick={this.drumPlay}>S
          <audio class='clip' id='S' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3'></audio>
        </button>
        <button class='drum-pad' id='Open-HH' onClick={this.drumPlay}>D
          <audio class='clip' id='D' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3'></audio>
        </button>
        <button class='drum-pad' id='Kick-n-Hat' onClick={this.drumPlay}>Z
          <audio class='clip' id='Z' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3'></audio>
        </button>
        <button class='drum-pad' id='Kick' onClick={this.drumPlay}>X
          <audio class='clip' id='X' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3'></audio>
        </button>
        <button class='drum-pad' id='Closed-HH' onClick={this.drumPlay}>C
          <audio class='clip' id='C' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3'></audio>
        </button>
      </div>
    );
  }

  drumPlay(event){
    console.log(event.target.children.Q);
    document.getElementById(event.target.children.Q.id).play();
    this.setState(()=>{
      return {
        display:event.target.id
      }
    })
  }

}

export default App;
