import React, { useContext, useEffect, useState } from "react";

import "./Home.css";
import { ThemeContext } from "../../context/ThemeContext";
import UserPreferences from "../Intrest/Intrest";

export default function Home() {
  // const { darkMode } = useContext(ThemeContext);
  const [preferencesSet, setPreferencesSet] = useState(false);

  useEffect(() => {
    const savedPreferences = localStorage.getItem("userPreferences");
    if (savedPreferences) {
      setPreferencesSet(true);
    }
  }, []);

  const handleSavePreferences = (preferences) => {
    localStorage.setItem("userPreferences", JSON.stringify(preferences));
    setPreferencesSet(true);
  };

  return (
    <>
       {!preferencesSet ? (
        <UserPreferences onSavePreferences={handleSavePreferences} />
      ) : (
        <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>Master Coding with Ed Learn</h1>
        <p>Learn coding from industry experts with hands-on projects.</p>
        <button className="cta-button">Explore Courses</button>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>Why Choose Ed Learn?</h2>
        <p>
        Ed Learn offers high-quality coding courses with real-world projects
          and mentorship from experienced developers.
        </p>
      </section>

      {/* Featured Courses */}
      <section className="courses">
        <h2>Our Featured Courses</h2>
        <div className="course-list">
          <div className="course-card">
            <h3>Web Development</h3>
            <p>Learn HTML, CSS, JavaScript, and React.</p>
          </div>
          <div className="course-card">
            <h3>Python for Beginners</h3>
            <p>Master Python from basics to advanced concepts.</p>
          </div>
          <div className="course-card">
            <h3>Data Structures & Algorithms</h3>
            <p>Crack coding interviews with DSA mastery.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Students Say</h2>
        <div className="testimonial">
          <p>"Ed Learn helped me land my dream job!"</p>
          <span>- Rahul Verma</span>
        </div>
        <div className="testimonial">
          <p>"The best coding platform with real-world projects!"</p>
          <span>- Anjali Sharma</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Ed Learn. All Rights Reserved.</p>
      </footer>
    </div>
      )}
    </>
    
  );
}
