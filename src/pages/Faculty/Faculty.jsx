import React from "react";
import "./Faculty.css";


import hodPic from "../../assets/images/hod-pic.jpeg"; 
import soumyaPic from "../../assets/images/hod-pic.jpeg"; 


// Placeholder for staff members without an assigned photo
const PLACEHOLDER = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300'><rect width='100%' height='100%' fill='#eef4ff' /><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#3b5998' font-size='18'>Photo</text></svg>`
);


export default function Faculty() {
  
  // 2. ASSIGN UNIQUE PHOTO TO EACH STAFF MEMBER
  const staff = [
    { 
      name: "Prof. Satya Narayan Dash", 
      title: "HOD, Professor", 
      email: "hodcsa@giet.edu",
      photo: hodPic
    },
    { 
      name: "Ms. Soumya Ranjan Mishra", 
      title: "Assistant Professor", 
      email: "soumyaranjan@giet.edu",
      // photo: soumyaPic
    },
    {
        name: "Placeholder Staff",
        title: "Lecturer",
        email: "placeholder@giet.edu",
        photo: null 
    }
  ];

  return (
    <main>
      <section className="container" style={{ padding: "36px 0" }}>
        <h2 className="section-heading">Faculty</h2>
        <p className="section-subtitle">Meet our experienced teaching staff.</p>

        <div className="gallery-grid" style={{ marginTop: 16 }}>
          {staff.map((s, i) => (
            <div key={i} className="gallery-item">
              <img src={s.photo || PLACEHOLDER} alt={s.name} /> 
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