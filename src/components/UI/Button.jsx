import React from "react";

export default function Button({ children, onClick, to, className = "" }) {
  if (to) return <a className={`btn ${className}`} href={to}>{children}</a>;
  return <button className={`btn ${className}`} onClick={onClick}>{children}</button>;
}
