import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { urbitPlugin } from "@urbit/vite-plugin-urbit";

import dotenv = require("dotenv");
import path = require("path");

dotenv.config();
const target = process.env.URBIT_TARGET;

// TODO: change APPNAMEHERE to your desk

export default defineConfig({
  plugins: [vue(), urbitPlugin({ base: "APPNAMEHERE", target })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 600,
    cssCodeSplit: false,
  },
});
