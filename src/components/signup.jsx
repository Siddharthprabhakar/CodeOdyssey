import React, { useState } from 'react';
import './login.css';
import image from '../images/A group of deve 0 (1).png';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import Axios from 'axios';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDobChange = (e) => {
    setDob(e.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
      alert('Password must contain at least one uppercase letter, one number, one special character, and no spaces.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    try {
      const response = await Axios.post('http://localhost:3000/signup', {
        name,
        email,
        password,
        dob,
      });

      console.log('User registered successfully:', response.data);
      // Redirect to the home page after successful registration
      navigate('/home');
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle the error, e.g., display an error message to the user.
    }
  };

  return (
    <div className="login">
      <img src={image} alt="image" className="login__bg" />

      <form onSubmit={handleSubmit} className="login__form">
        <h1 className="login__title">Welcome</h1>
        <div className="login__register">Nice to Meet You</div>

        <div className="login__inputs">
          <div className="login__box">
            <input type="text" placeholder="Name" required className="login__input" value={name} onChange={handleNameChange} />
          </div>

          <div className="login__box">
            <input type="email" placeholder="Email ID" required className="login__input" value={email} onChange={handleEmailChange} />
            <i className="ri-mail-fill"></i>
          </div>

          <div className="login__box">
            <input type="date" placeholder="Date of Birth" required className="login__input" value={dob} onChange={handleDobChange} />
          </div>

          <div className="login__box">
            <input type="password" placeholder="Password" required className="login__input" value={password} onChange={handlePasswordChange} />
            <input type="password" placeholder="Confirm Password" required className="login__input" value={confirmPassword} onChange={handleConfirmPasswordChange} />
          </div>
        </div>

        <div className="login__check">
          <div className="login__check-box">
            <input type="checkbox" className="login__check-input" id="user-check" checked={rememberMe} onChange={handleRememberMeChange} />
            <label htmlFor="user-check" className="login__check-label">Remember me</label>
          </div>
        </div>
        <button type="submit" className="login__button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
