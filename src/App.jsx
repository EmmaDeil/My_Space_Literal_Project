// import { useState } from "react";
import "./App.css";
import LoginForm from "./forms/LoginForm";
import SignUpForm from "./forms/SignUpForm";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import PageTitle from "./components/PageTitle";


function App( {isLoggedIn} ) {

  return (
    <>
      <PageTitle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <LoginForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
