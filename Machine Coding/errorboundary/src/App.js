import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import BuggyComponent from './BuggyComponent';

const App = () => (
  <div style={{ textAlign: 'center', padding: '20px' }}>
    <h1>Error Boundary</h1>
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
    <ErrorBoundary>
      <div>This component is fine.</div>
    </ErrorBoundary>
  </div>
);

export default App;
