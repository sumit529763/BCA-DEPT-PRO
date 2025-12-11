import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// 1. Import your main App component
import App from "./App.jsx";

// 2. Import global styles and font-awesome (based on your previous list)
import "./styles/global.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// 3. Dynamic Basename Fix for GitHub Pages Deployment
//    - This is the crucial part. It reads the BASE_URL set in your
//      vite.config.js (which you set to '/BCA-DEPT-PRO/' for build, and '/' for dev).
const basename = import.meta.env.BASE_URL || "/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter
      // 4. Pass the dynamically determined base path to the Router
      //    This makes your routes work both locally and on GitHub Pages.
      basename={basename} 
      
      // Optional: React Router v6 future flags (keeping them as you had them)
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <App />
    </BrowserRouter>
  </React.StrictMode>
);