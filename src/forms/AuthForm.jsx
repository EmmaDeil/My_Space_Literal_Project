import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import SignForm from './SignUpForm';

const AuthForm = () => {
   const [isLogin, setIsLogin] = useState(true);
   const navigate = useNavigate();

return (
   <div>
      <div className="auth-header">
         <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
         <p>{isLogin ? 'Sign in to your account' : 'Sign up for a new account'}</p>
      </div>

      {/* Toggle Buttons */}
      <div className="form-toggle">
         <button
            className={`toggle-btn ${isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(true)}
         >
            Login
         </button>
         <button
            className={`toggle-btn ${!isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(false)}
         >
            Sign Up
         </button>
      </div>

      <div className="form-container">
         {isLogin ? (
            <LoginForm />
         ) : (
            <SignForm />
         )}
      </div>
   </div>
)
}

export default AuthForm;
