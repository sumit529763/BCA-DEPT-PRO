import React from "react";
import "./Events.css"; // optional

export default function Events() {
  return (
    <main>
      <section className="container" style={{ padding: "36px 0" }}>
        <h2 className="section-heading">Events & Workshops</h2>
        <p className="section-subtitle">Upcoming and past technical events organized by CSA.</p>

        <div style={{ marginTop: 16 }}>
          <article className="course-card">
            <h3 className="course-title">Hackathon 20XX</h3>
            <p className="course-text">A 24-hour hackathon for students to build projects and learn.</p>
            <ul className="course-details">
              <li>Date: DD MMM YYYY</li>
              <li>Venue: CSA Computer Lab</li>
              <li>Registration: Open for all students</li>
            </ul>
          </article>

          <article className="course-card" style={{ marginTop: 12 }}>
            <h3 className="course-title">Workshop: Data Science Basics</h3>
            <p className="course-text">Hands-on workshop covering Python, pandas and basics of ML.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
