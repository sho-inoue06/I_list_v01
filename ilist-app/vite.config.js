import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    // 開発中、/api へのリクエストをバックエンド(3001)へ転送する
    proxy: { "/api": "http://localhost:3001" },
  },
});
