import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// 1. Import your main App component
import App from "./App.jsx";

// 2. Import the Error Boundary component
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.jsx"; 

// 3. Import global styles and font-awesome
import "./styles/global.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// 4. Dynamic Basename Fix for Deployment
const basename = import.meta.env.BASE_URL || "/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* 🔥 WRAPPER: Error Boundary surrounds the entire routed app */}
    <ErrorBoundary> 
      <BrowserRouter
        basename={basename} 
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);