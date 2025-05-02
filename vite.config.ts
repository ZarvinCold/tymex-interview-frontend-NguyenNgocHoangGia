import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr({ svgrOptions: { icon: true } })],
  resolve: {
    alias: {
      "src": path.resolve(__dirname, "src"),
      "components": path.resolve(__dirname, "src/components"),
      "pages": path.resolve(__dirname, "src/pages"),
      "assets": path.resolve(__dirname, "src/assets"),
      "store": path.resolve(__dirname, "src/store"),
      "types": path.resolve(__dirname, "src/types"),
      "services": path.resolve(__dirname, "src/services"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: process.env.VITE_API_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/api"),
      },
    },
  },
});
