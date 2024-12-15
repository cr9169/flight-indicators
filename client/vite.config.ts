import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import buildConfig from "./src/config/buildConfig";

export default defineConfig({
  plugins: [react()],
  server: {
    host: buildConfig.service.host,
    port: buildConfig.service.port,
  },
});
