import React from "react";
import "./Notices.css";

export default function Notices() {
  const notices = [
    { title: "Exam Routine Released", date: "01-05-20XX", id: "NR-001", link: "#" },
    { title: "Holiday Announcement", date: "10-04-20XX", id: "NR-002", link: "#" },
  ];

  return (
    <main>
      <section className="container" style={{ padding: "36px 0" }}>
        <h2 className="section-heading">Notices</h2>
        <p className="section-subtitle">Official notices from the department and university.</p>

        <div style={{ marginTop: 16 }}>
          {notices.map((n, i) => (
            <article className="course-card" key={i} style={{ marginBottom: 12 }}>
              <h3 className="course-title">{n.title}</h3>
              <div style={{ color: "var(--muted)", fontSize: 0.85 + "rem" }}>{n.date} • {n.id}</div>
              <p className="course-text" style={{ marginTop: 8 }}>
                <a href={n.link}>Download / View</a>
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
