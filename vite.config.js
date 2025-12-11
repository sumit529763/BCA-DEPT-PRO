// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/BCA-DEPT-PRO/",   // <-- IMPORTANT: repo name with leading & trailing slash
  plugins: [react()]
});
