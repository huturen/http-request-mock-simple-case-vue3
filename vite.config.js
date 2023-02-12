/* eslint-env node */
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vitePluginHttpRequestMock from "http-request-mock/tool/plugin/vite.js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vitePluginHttpRequestMock({
      enable: process.env.NODE_ENV === "development",
      appEntry: /src\/main\.js$/,
      mockDir: "./mock",
    }),
    vue(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  preview: {
    port: 5173,
  },
});
