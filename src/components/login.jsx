import React from 'react'
import './login.css'
import image from '../images/login.png'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div className="login">
      <img src={image} alt="image" className="login__bg" />

      <form action="" className="login__form">
        <h1 className="login__title">Login</h1>

        <div className="login__inputs">
          <div className="login__box">
            <input type="email" placeholder="Email ID" required className="login__input" />
            <i className="ri-mail-fill"></i>
          </div>

          <div className="login__box">
            <input type="password" placeholder="Password" required className="login__input" />
            <i className="ri-lock-2-fill"></i>
          </div>
        </div>

        <div className="login__check">
          <div className="login__check-box">
            <input type="checkbox" className="login__check-input" id="user-check" />
            <label htmlFor="user-check" className="login__check-label">Remember me</label>
          </div>

          <a href="#" className="login__forgot">Forgot Password?</a>
        </div>

        <button type="submit" className="login__button">Login</button>

        <div className="login__register">
          Don't have an account? <Link to="/signup">Register</Link>
        </div>
      </form>
    </div>
  );
};

