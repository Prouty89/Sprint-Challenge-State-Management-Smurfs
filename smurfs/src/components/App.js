import React, { Component } from "react";
import Smurf from '../img/smurf.png'
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 &#10150; Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <img className = "smurf-logo" src={Smurf} alt={"smurf"}/>

      </div>
    );
  }
}

export default App;
