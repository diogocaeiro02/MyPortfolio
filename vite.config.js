import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tailwindScrollbar from "tailwind-scrollbar";
// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      fontfamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [tailwindcss(), react(), tailwindScrollbar({ nocompatible: true })],
});
