import React from "react";
import "./News.css";

export default function News() {
  const news = [
    { title: "New Course Added", date: "01-08-20XX", body: "Short description of news." },
    { title: "Seminar by Industry Expert", date: "15-07-20XX", body: "Details of seminar and speakers." }
  ];

  return (
    <main>
      <section className="container" style={{ padding: "36px 0" }}>
        <h2 className="section-heading">News</h2>
        <p className="section-subtitle">Latest news & announcements for CSA students.</p>

        <div style={{ marginTop: 16 }}>
          {news.map((n, i) => (
            <article className="course-card" key={i} style={{ marginBottom: 12 }}>
              <h3 className="course-title">{n.title}</h3>
              <div style={{ color: "var(--muted)", fontSize: 0.85 + "rem" }}>{n.date}</div>
              <p style={{ marginTop: 8 }} className="course-text">{n.body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
