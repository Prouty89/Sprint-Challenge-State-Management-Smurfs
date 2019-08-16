import React, { useContext, useState, useEffect } from "react";
import Smurf from './img/smurf.png';
import "./App.css";
import { SmurfContext } from './contexts/SmurfContext';
import axios from 'axios';
import SmurfList from './components/SmurfList';
import SmurfForm from './components/SmurfForm';



const App = () => {
  const [smurfs, setSmurfs] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(null);

   useEffect(() => {
    const getData = async () => {
      const res = await axios.get('http://localhost:3333/smurfs');
      setSmurfs(res.data);
    };
    getData();
  }, [lastUpdate]);

    return (
      <SmurfContext.Provider value={setLastUpdate}>
        <div className="App">
          <h1>SMURFS! 2.0 &#10150; Redux</h1>
          <h2>SMURF VILLIAGE</h2>
          <div className="boxes">
          <div className= "box">Box 1
          <SmurfForm />
          </div>
          <div className= "box">Box 2
          {smurfs.map(char => <SmurfList key ={char.id} smurf={char} />)}
          </div>
          </div>
          <img className = "smurf-logo" src={Smurf} alt={"smurf"}/>
        </div>
      </SmurfContext.Provider>
    );
  };

export default App;
