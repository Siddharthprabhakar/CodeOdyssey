import React, { useContext, useState } from 'react';
import './login.css';
import image from '../images/login.png';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import Axios from 'axios';
import { AppContext } from '../App';

const Login = () => {
  const { email, setEmail } = useContext(AppContext);
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      console.log(email);
      console.log(password);
      const response = await Axios.post('http://localhost:3000/login', {
        email,
        password,
      });

      if (response.status === 200) {
        // Successful login, redirect to the home page
        localStorage.setItem('name', response.data.name); // Save the user's name in local storage
        navigate(`/profile?name=${response.data.name}`);
        navigate('/cloud');
      } else {
        // Handle unsuccessful login, e.g., display an error message
        console.error('Login failed:', response.data);
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle the error, e.g., display an error message to the user.
    }
  };

  return (
    <div className="login">
      <img src={image} alt="image" className="login__bg" />

      <form onSubmit={handleLogin} className="login__form">
        <h1 className="login__title">Login</h1>

        <div className="login__inputs">
          <div className="login__box">
            <input
              type="email"
              placeholder="Email ID"
              required
              className="login__input"
              value={email}
              onChange={handleEmailChange}
            />
            <i className="ri-mail-fill"></i>
          </div>

          <div className="login__box">
            <input
              type="password"
              placeholder="Password"
              required
              className="login__input"
              value={password}
              onChange={handlePasswordChange}
            />
            <i className="ri-lock-2-fill"></i>
          </div>
        </div>

        <div className="login__check">
          <div className="login__check-box">
            <input type="checkbox" className="login__check-input" id="user-check" />
            <label htmlFor="user-check" className="login__check-label">
              Remember me
            </label>
          </div>

          <a href="#" className="login__forgot">
            Forgot Password?
          </a>
        </div>

        <button type="submit" className="login__button">
          Login
        </button>

        <div className="login__register">
          Don't have an account? <Link to="/signup">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
