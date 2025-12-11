import React from "react";

export default function Card({ title, body, children }) {
  return (
    <div style={{padding:16, borderRadius:8, background:"white", boxShadow:"0 6px 18px rgba(12,40,80,0.06)"}}>
      <h4 style={{margin:"0 0 8px"}}>{title}</h4>
      <p style={{margin:0}}>{body}</p>
      {children}
    </div>
  );
}
