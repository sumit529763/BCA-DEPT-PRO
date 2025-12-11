import React, { useState } from "react";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: replace with real auth flow / backend
    alert(`Login attempted for ${email}`);
  }

  return (
    <main>
      <section className="container" style={{ padding: "36px 0", maxWidth: 600 }}>
        <h2 className="section-heading">Admin Login</h2>
        <p className="section-subtitle">Authorized users only. Contact HOD if access is required.</p>

        <form onSubmit={handleSubmit} style={{ marginTop: 16, display: "grid", gap: 12 }}>
          <label>
            <div style={{ fontSize: 0.9 }}>Email</div>
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required style={{ width: "100%", padding: "10px", borderRadius: 8, border: "1px solid var(--border-soft)" }} />
          </label>
          <label>
            <div style={{ fontSize: 0.9 }}>Password</div>
            <input type="password" value={pass} onChange={e=>setPass(e.target.value)} required style={{ width: "100%", padding: "10px", borderRadius: 8, border: "1px solid var(--border-soft)" }} />
          </label>
          <button className="btn-enquiry" type="submit">Login</button>
        </form>
      </section>
    </main>
  );
}
