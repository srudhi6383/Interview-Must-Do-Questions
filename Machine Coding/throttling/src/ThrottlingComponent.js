import React, { useState, useEffect, useCallback } from 'react';
import _ from 'lodash';

const ThrottlingComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Throttled fetch function
  const fetchData = useCallback(_.throttle(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://api.example.com/data');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, 2000), []); // 2000ms throttle

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Throttled API Fetch</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      <button onClick={fetchData} disabled={loading}>
        Fetch Data
      </button>
    </div>
  );
};

export default ThrottlingComponent;
