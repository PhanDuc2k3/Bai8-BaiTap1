import logo from './logo.svg';
import './App.css';
import React from 'react';
function App() {
  const isUserLoggedIn = true;

  return (
    <div>
      {isUserLoggedIn ? (
        <h1>Hello User</h1>
      ) : (
        <h1>Login Now</h1>
      )}
    </div>
  );
}

export default App;