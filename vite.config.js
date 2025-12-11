// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => {
  const isDev = command === 'serve';
  return {
    base: isDev ? '/' : '/BCA-DEPT-PRO/',   // <-- dev: '/', build: '/BCA-DEPT-PRO/'
    plugins: [react()],
  };
});
