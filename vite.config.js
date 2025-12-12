// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => {
  const isDev = command === 'serve';
  return {
    // Set base to the domain root
    base: '/', 

    // Remove the complex include option
    plugins: [react()], 
  };
});