import React, { useState, useEffect } from 'react';

const LocalStorageComponent = () => {
  const [value, setValue] = useState('');

  useEffect(() => {
    // Retrieve state from local storage when the component mounts
    const savedValue = localStorage.getItem('myValue');
    if (savedValue) {
      setValue(savedValue);
    }
  }, []);

  useEffect(() => {
    // Save state to local storage whenever it changes
    localStorage.setItem('myValue', value);
  }, [value]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Manage Local Storage with useEffect</h1>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        style={{ padding: '10px', margin: '10px', width: '200px' }}
      />
      <p>Value in local storage: {value}</p>
    </div>
  );
};

export default LocalStorageComponent;
