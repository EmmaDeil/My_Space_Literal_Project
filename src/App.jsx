import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import LoginForm from "./forms/LoginForm";
import SignUpForm from "./forms/SignUpForm";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Careers from "./pages/Careers";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageTitle from "./components/PageTitle";

import React from "react";

function App() {
  const [isLoggedIn] = useState(false);
  const location = useLocation();

  // Hide Navbar and Footer on /careers route
  const hideNavAndFooter = location.pathname === "/careers";

  return (
    <>
      <PageTitle title="Welcome to SpaceLiteral" />
      {!isLoggedIn ? <LoginForm /> : <SignUpForm />}
      {!hideNavAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/about" element={<PageTitle title="About Us" />} />
        <Route path="/contact" element={<PageTitle title="Contact Us" />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!hideNavAndFooter && <Footer />}
    </>
  );
}

export default App;
