import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { urbitPlugin } from "@urbit/vite-plugin-urbit";

import dotenv = require("dotenv");
import path = require("path");

dotenv.config();
const target = process.env.URBIT_TARGET;
const base = process.env.URBIT_DESK;

// TODO: change APPNAMEHERE to your desk

export default defineConfig({
  plugins: [vue(), urbitPlugin({ base, target })],
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
