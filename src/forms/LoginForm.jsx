import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    alert(`Logging in as: ${email}`);
    navigate("/dashboard");
  };

  return (
    <div>
      <div className="logbox">
        {/* <AuthForm /> */}
        <form
          className="justify-content-center align-items-center d-flex flex-column gap-3"
          action=""
          onSubmit={handleSubmit}
          style={{ padding: "2rem" }}
        >
          <div className="mb-3">
            <label htmlFor="email" rules={[{ required: true, message: 'Please input your Email!' }]}>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" rules={[{ required: true, message: 'Please input your Password!' }]}>Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="*******"
              required
              onChange={handlePasswordChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-outline-primary"
            id="loginbtn"
          >
            Login
          </button>
          <div className="mb-3">
            <button
              type="button"
              className="btn btn-link"
              onClick={() => navigate("/signupform")}
              style={{ padding: 0, border: "none", background: "none" }}
            >
              Don't have an account? Sign Up
            </button>
            <a href="/forgot-password" className="btn btn-link" onClick={() => navigate("/forgot-password")}>
              Forgot Password?
            </a>
          </div>
          <div className="mb-3 or-divider" style={{ width: "100%", textAlign: "center" }}>
            <span style={{ backgroundColor: "#fff", padding: "0 10px" }}>OR</span>
          </div>
          <div className="social-login d-flex gap-3">
            <a href="/login/google" className="btn btn-outline-secondary" style={{width: "20rem"}}>
              <i className="bi bi-google" style={{ fontSize: "1.0rem", marginRight: "5px", color: "#db4437" }}></i>
              Login with Google
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
