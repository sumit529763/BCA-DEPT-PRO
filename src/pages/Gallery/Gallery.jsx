import React from "react";
import "./Gallery.css";
import csagiet from "../../assets/images/csa-giet2.jpeg";
import csadept from "../../assets/images/csadept.jpeg";
import logo from "../../assets/images/logo.png";

const PLACEHOLDER = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='360'><rect width='100%' height='100%' fill='#eef4ff'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#3b5998' font-size='20'>Image not found</text></svg>`
);

function safeSrc(s) { return s || PLACEHOLDER; }

export default function Gallery() {
  const items = [
    { src: csagiet, cap: "Campus View" },
    { src: csadept, cap: "Department Building" },
    { src: logo, cap: "Event Poster" },
    { src: null, cap: "Student Activity" },
  ];

  return (
    <main>
      <section className="container" style={{ padding: "36px 0" }}>
        <h2 className="section-heading">Gallery</h2>
        <p className="section-subtitle">Glimpses of CSA labs, events, and student activities.</p>

        <div className="gallery-grid" style={{ marginTop: 16 }}>
          {items.map((it, i) => (
            <div key={i} className="gallery-item">
              <img src={safeSrc(it.src)} alt={it.cap} onError={(e) => (e.currentTarget.src = PLACEHOLDER)} />
              <span className="gallery-caption">{it.cap}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
