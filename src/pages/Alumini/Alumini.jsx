import React from "react";
import "./Alumini.css"; // optional; can skip if using global styles

export default function Alumini() {
  return (
    <main>
      <section className="container" style={{ padding: "36px 0" }}>
        <h2 className="section-heading">Alumni</h2>
        <p className="section-subtitle">Our proud alumni network and their achievements.</p>

        <div style={{ marginTop: 18 }}>
          <p className="about-text">
            The Alumni of CSA are working across industries — software development, data analytics,
            research and entrepreneurship. This page lists notable alumni, placement stories, and ways
            to connect with the department.
          </p>

          <article className="course-card" style={{ marginTop: 16 }}>
            <h3 className="course-title">Alumni Spotlight: Mr. X</h3>
            <p className="course-text">
              Short story about achievements and current role.
            </p>
            <ul className="course-details">
              <li>Batch: 20XX</li>
              <li>Company: Example Corp</li>
              <li>Role: Senior Developer</li>
            </ul>
          </article>

          <div style={{ marginTop: 18 }}>
            <h3 className="section-heading">Get Involved</h3>
            <p className="about-text">
              Alumni can contribute as mentors, guest lecturers and industry partners. Contact the
              department for details.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
