import React, { useState, useContext } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Topbar.css";
import { ThemeContext } from "../../context/ThemeContext";

export default function Topbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="topbar">
      {/* Logo */}
      <h1 className="logo">Ed Learn</h1>

      {/* Mobile Menu Toggle */}
      <button  className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navigation Links */}
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to = "/">Home</Link>
        <Link to = "/courses">Courses</Link>
        <Link to = "/blog">Blog</Link>
        <Link to = "/about">About</Link>
        <Link to = "/contact">Contact</Link>
        <Link to = "/developer">Developer</Link>
      </nav>

      {/* Authentication Buttons */}
      <div className="auth-buttons">
        <button className="login-btn">Login</button>
        <button className="register-btn">Register</button>
      </div>

      {/* Dark Mode Toggle */}
      <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </header>
  );
}
