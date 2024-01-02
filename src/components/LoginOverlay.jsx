import React, { useContext } from 'react';
import './lgbtn.css';
import { Link, useLocation } from 'react-router-dom';
import { AppContext } from '../App';

const LoginOverlay = ({ onLogin }) => {
    const { email } = useContext(AppContext);
    const handleLogin = () => {
      onLogin(); // Call the onLogin callback to inform the parent component that the user has logged in.
    };
    const location = useLocation();
    const isHeaderVisible = !['/login', '/signup','/home','/aboutus', '/profile'].includes(location.pathname);

  return (
    <>
       {(isHeaderVisible && !email) && (
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
      <Link to='/login'><button className="lgbtn" onClick={handleLogin}>Log In</button></Link>
    </div>
       )}
    </>
  );
};

export default LoginOverlay;