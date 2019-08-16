import React from 'react';


export default function Smurf(props) {
  const smurf = props.smurf;
  return (
      <div>
        <p>{smurf.name}</p>
        <span>Age: {smurf.age}</span><br />
        <span>Height: {smurf.height}</span>
      </div>
  );
}