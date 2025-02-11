import React, { useState, useContext } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Topbar.css";
import { ThemeContext } from "../../context/ThemeContext";
import { Context } from "../../context/Context";
import { FaUserCircle } from "react-icons/fa";

export default function Topbar() {
  const { user, dispatch } = useContext(Context);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <header className="topbar">
      {/* Logo */}
      <h1 className="logo">Ed Learn</h1>

      {/* Mobile Menu Toggle */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navigation Links */}
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/courses">
          Courses
        </Link>
        <Link className="link" to="/blog">
          Blog
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
        <Link className="link" to="/contact">
          Contact
        </Link>
        <Link className="link" to="/developer">
          Developer
        </Link>
      </nav>
      {user ? (
        <div className="user-container">
            <button className="user-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
              <FaUserCircle className="user-icon" />
              {user.name}
            </button>
          

            <Link to = "/practice" className="practice-btnn link">Practice</Link>
         
            {dropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/">Dashboard</Link>
                <Link to="/">Settings</Link>
                <button onClick={handleLogout} className="logout-btn">Logout</button>
              </div>
            )}
          </div>
      ) : (
        <div className="auth-buttons">
          <Link to="/login" className="login-btn link">
            Login
          </Link>
          <Link to="/register" className="register-btn link">
            Register
          </Link>
        </div>
      )}

      {/* Dark Mode Toggle */}
      <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </header>
  );
}
