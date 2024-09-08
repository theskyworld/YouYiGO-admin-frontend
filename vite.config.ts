import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  server: {
    host:
      mode === "production"
        ? loadEnv("production", process.cwd()).VITE_APP_HOST
        : "localhost",
  },
}));
