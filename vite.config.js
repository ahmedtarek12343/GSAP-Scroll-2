import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import talwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), talwindcss()],
});
