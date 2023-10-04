import React, { useState } from 'react';
import './login.css';
import image from '../images/A group of deve 0 (1).png';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [dob, setDob] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleDobChange = (e) => {
    setDob(e.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  //logic for error handling in all the text fields 
  const handleSubmit = (e) => {
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
  
    console.log('Signup submitted');
  };

  return (
    <div className="login">
      <img src={image} alt="image" className="login__bg" />

      <form onSubmit={handleSubmit} className="login__form">
        <h1 className="login__title">Welcome</h1>
        <div className="login__register">Nice to Meet You</div>

        <div className="login__inputs">
          <div className="login__box">
            <input type="text" placeholder="Name" required className="login__input" value={firstName} onChange={handleFirstNameChange} />
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
        <button as={Link} to='/home' type="submit" className="login__button">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
