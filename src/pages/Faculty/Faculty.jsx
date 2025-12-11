import React from "react";
import "./Faculty.css";

// you can replace images with real staff photos (import them from assets)
const PLACEHOLDER = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300'><rect width='100%' height='100%' fill='#eef4ff' /><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#3b5998' font-size='18'>Photo</text></svg>`
);

export default function Faculty() {
  const staff = [
    { name: "Dr. A. Teacher", title: "HOD, Professor", email: "hod@csa.giet.edu" },
    { name: "Ms. B. Lecturer", title: "Assistant Professor", email: "b@csa.giet.edu" },
    // add more
  ];

  return (
    <main>
      <section className="container" style={{ padding: "36px 0" }}>
        <h2 className="section-heading">Faculty</h2>
        <p className="section-subtitle">Meet our experienced teaching staff.</p>

        <div className="gallery-grid" style={{ marginTop: 16 }}>
          {staff.map((s, i) => (
            <div key={i} className="gallery-item">
              <img src={PLACEHOLDER} alt={s.name} />
              <div style={{ padding: "8px" }}>
                <strong>{s.name}</strong>
                <div style={{ fontSize: 0.9 + "rem", color: "var(--muted)" }}>{s.title}</div>
                <div style={{ fontSize: 0.85 + "rem" }}>{s.email}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
