import React, { useState } from 'react';

const DynamicBackgroundColor = () => {
  const [red, setRed] = useState(255);
  const [green, setGreen] = useState(255);
  const [blue, setBlue] = useState(255);

  const handleChange = (setter) => (e) => {
    const value = Math.max(0, Math.min(255, Number(e.target.value)));
    setter(value);
  };

  const divStyle = {
    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
    width: '200px',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #000',
    margin: '20px auto'
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={divStyle}>
        <span>Background Color</span>
      </div>
      <div>
        <label>
          Red: 
          <input 
            type="number" 
            value={red} 
            onChange={handleChange(setRed)} 
            min="0" 
            max="255" 
            style={{ margin: '10px' }}
          />
        </label>
        <label>
          Green: 
          <input 
            type="number" 
            value={green} 
            onChange={handleChange(setGreen)} 
            min="0" 
            max="255" 
            style={{ margin: '10px' }}
          />
        </label>
        <label>
          Blue: 
          <input 
            type="number" 
            value={blue} 
            onChange={handleChange(setBlue)} 
            min="0" 
            max="255" 
            style={{ margin: '10px' }}
          />
        </label>
      </div>
    </div>
  );
};

const App = () => (
  <div>
    <h1 style={{ textAlign: 'center' }}>Dynamic Background Color</h1>
    <DynamicBackgroundColor />
  </div>
);

export default App;
