import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import config from "./src/config";

export default defineConfig({
  plugins: [react()],
  server: {
    host: config.service.host,
    port: config.service.port,
  },
});
