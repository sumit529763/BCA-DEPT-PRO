import React from "react";

export default function SectionTitle({ title, subtitle }) {
  return (
    <div style={{marginBottom:12}}>
      <h2 style={{margin:"0 0 6px"}}>{title}</h2>
      {subtitle && <p style={{margin:0, color:"#465a7a"}}>{subtitle}</p>}
    </div>
  );
}
