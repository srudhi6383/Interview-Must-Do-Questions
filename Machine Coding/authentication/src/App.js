import React from 'react';
import { AuthProvider, useAuth } from './AuthContext';

const AuthButtons = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div>
      {isAuthenticated ? (
        <button onClick={logout} style={{ padding: '10px', margin: '10px' }}>
          Logout
        </button>
      ) : (
        <button onClick={login} style={{ padding: '10px', margin: '10px' }}>
          Login
        </button>
      )}
    </div>
  );
};

const ProtectedContent = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <div style={{ padding: '20px', border: '1px solid green' }}>
      <h2>Protected Content</h2>
      <p>This content is only visible to authenticated users.</p>
    </div>
  ) : (
    <div style={{ padding: '20px', border: '1px solid red' }}>
      <h2>Public Content</h2>
      <p>Please log in to see the protected content.</p>
    </div>
  );
};

const App = () => (
  <AuthProvider>
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Authentication Flow with useContext</h1>
      <AuthButtons />
      <ProtectedContent />
    </div>
  </AuthProvider>
);

export default App;
