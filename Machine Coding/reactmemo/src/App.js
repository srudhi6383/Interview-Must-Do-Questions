import React, { useState, useCallback } from 'react';

const ChildComponent = React.memo(({ value }) => {
  console.log('ChildComponent re-rendered');
  return (
    <div>
      <p>Child Component Value: {value}</p>
    </div>
  );
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [childValue, setChildValue] = useState('Initial Value');

  const incrementCount = () => {
    setCount(count + 1);
  };

  const updateChildValue = useCallback(() => {
    setChildValue('Updated Value');
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>React Memo </h1>
      <p>Parent Component Count: {count}</p>
      <button onClick={incrementCount} style={{ padding: '10px', margin: '10px' }}>
        Increment Count
      </button>
      <button onClick={updateChildValue} style={{ padding: '10px', margin: '10px' }}>
        Update Child Value
      </button>
      <ChildComponent value={childValue} />
    </div>
  );
};

const App = () => (
  <div>
    <ParentComponent />
  </div>
);

export default App;
