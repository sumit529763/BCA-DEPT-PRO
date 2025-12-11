import React from "react";
import "./Placement.css";

export default function Placement() {
  const placements = [
    { student: "Alice", company: "TechCorp", year: "20XX" },
    { student: "Bob", company: "SoftWorks", year: "20XX" },
  ];

  return (
    <main>
      <section className="container" style={{ padding: "36px 0" }}>
        <h2 className="section-heading">Placement Cell</h2>
        <p className="section-subtitle">Placement support, training and student success stories.</p>

        <div style={{ marginTop: 16 }}>
          {placements.map((p, i) => (
            <div key={i} className="course-card" style={{ marginBottom: 12 }}>
              <h3 className="course-title">{p.student}</h3>
              <div className="course-text">{p.company} • {p.year}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
