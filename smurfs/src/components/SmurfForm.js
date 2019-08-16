import React, { useState, useContext } from 'react';
import { SmurfContext } from "../contexts/SmurfContext";
import axios from 'axios';

 const SmurfForm = props => {
  const [data, setData] = useState({});
  const setLastUpdate = useContext(SmurfContext);

   const addData = (event) => {
    setData({...data, [event.target.name]: event.target.value});
  };

  const submitData = (e) => {
    e.preventDefault();
    if(!data.name || !data.age || !data.height) return;
    const postData = async () => {
      const res = await axios.post('http://localhost:3333/smurfs', data);
    };
    postData();
    setLastUpdate(Date.now());
  };

   return (
      <div className='smurf-form'>
        <form name='post-smurf'>
          <input name='name' 
          placeholder='Name of Smurf' 
          value={data.name} 
          onChange={addData}
           />
          <input name='age' 
           placeholder='Age of Smurf'
           value={data.age} 
           onChange={addData}
            />
          <input name='height' 
          placeholder='Height of Smurf (in)' 
          value={data.height} 
          onChange={addData}
           />
          <button onClick={submitData}>Add To Villiage!</button>
        </form>
      </div>
  );
};

 export default SmurfForm; 