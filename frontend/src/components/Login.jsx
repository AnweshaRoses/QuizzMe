import React from 'react';
import { Link } from 'react-router-dom';
import './login.css'; // Import your authentication styles from a CSS file

const Login = () => {
  return (
    <div className="auth-container">
      <h1 className="auth-title">Word Wizard</h1> {/* Added "Word Wizard" */}
      <div className="auth-form">
        <h2 className="auth-subtitle">Login</h2> {/* Changed title class to subtitle */}
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <Link to="/start">
            <button type="submit" className="auth-button">Login</button>
          </Link>
        </form>
        <p className="auth-info">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
