// src/components/Header/Header.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"; // keep this file but you can also keep global css

// AnnouncementBar is implemented inside the same file for simplicity
export default function Header() {
  return (
    <>
      <header className="top-bar">
        <div className="container top-inner">
          <div className="brand">
            <div className="brand-logo" aria-hidden />
            <div className="brand-text">
              <span className="brand-title">Department of Computer Science &amp; Application</span>
              <span className="brand-subtitle">GIET University, Gunupur</span>
            </div>
          </div>

          <nav className="navbar" aria-label="Primary navigation">
            <NavLink to="/" end className={({isActive}) => (isActive ? "nav-link active" : "nav-link")}>HOME</NavLink>
            <NavLink to="/news" className={({isActive}) => (isActive ? "nav-link active" : "nav-link")}>NEWS</NavLink>
            <NavLink to="/notices" className={({isActive}) => (isActive ? "nav-link active" : "nav-link")}>NOTICE</NavLink>
            <NavLink to="/faculty" className={({isActive}) => (isActive ? "nav-link active" : "nav-link")}>FACULTY</NavLink>
            <NavLink to="/exam" className={({isActive}) => (isActive ? "nav-link active" : "nav-link")}>EXAM</NavLink>
            <NavLink to="/events" className={({isActive}) => (isActive ? "nav-link active" : "nav-link")}>EVENTS</NavLink>
            <NavLink to="/placements" className={({isActive}) => (isActive ? "nav-link active" : "nav-link")}>PLACEMENTS</NavLink>
            <NavLink to="/alumni" className={({isActive}) => (isActive ? "nav-link active" : "nav-link")}>ALUMNI</NavLink>
          </nav>

          <NavLink to="/login" className="admin-icon" title="Admin Login">
            <i className="fas fa-user-circle" aria-hidden />
          </NavLink>
        </div>
      </header>

      <AnnouncementBar />
    </>
  );
}

function AnnouncementBar() {
  const text = `Welcome to the Department of Computer Science and Application, GIET University, Gunupur (765022)  |  BCA & MCA programmes as per GIET University regulations  |  Stay tuned for updates on exams, events, workshops, and placement activities.`;

  // duplicate text to make continuous scrolling (same trick as original)
  return (
    <section className="announcement-bar" aria-label="Announcements">
      <div className="container announcement-inner">
        <div className="announcement-label"><i className="fas fa-bullhorn" aria-hidden /> Announcements</div>
        <div className="announcement-track">
          <p className="announcement-text">{text} &nbsp; | &nbsp; {text}</p>
        </div>
      </div>
    </section>
  );
}
