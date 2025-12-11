import React from "react";
import "./Exam.css";

export default function Exam() {
  return (
    <main>
      <section className="container" style={{ padding: "36px 0" }}>
        <h2 className="section-heading">Exam Schedule & Resources</h2>
        <p className="section-subtitle">Important dates, syllabus and exam notifications.</p>

        <div style={{ marginTop: 16 }}>
          <div className="course-card">
            <h3 className="course-title">Upcoming Semester Exam</h3>
            <p className="course-text">Date: DD-MM-YYYY</p>
            <ul className="course-details">
              <li>Download exam routine (link to PDF)</li>
              <li>Syllabus updates available here</li>
            </ul>
          </div>

          <div style={{ marginTop: 12 }}>
            <h3 className="section-heading">Exam Guidelines</h3>
            <p className="about-text">
              Read the rules and regulations issued by GIET University before appearing for exams.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
