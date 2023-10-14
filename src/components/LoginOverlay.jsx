import React from 'react';
import './lgbtn.css';

const LoginOverlay = ({ onLogin }) => {
    const handleLogin = () => {
      onLogin(); // Call the onLogin callback to inform the parent component that the user has logged in.
    };

  return (
    <div className="login-overlay">
      <h2 
        style={{
          fontSize: "50px",
          marginTop: "100px",
          color: "#FFFFFF",
          fontStyle: "Bold",
        }}
      >
        Please log in to access the full content
      </h2>
      <button className="lgbtn" onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default LoginOverlay;
