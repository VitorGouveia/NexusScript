import { defineConfig } from "vite";
import solidjs from "vite-plugin-solid";

// @ts-ignore
const isDEV = process.env.NODE_ENV === "development";

export default defineConfig({
  plugins: [solidjs()],
  base: isDEV ? "./" : "/Finances/beta",
  server: {
    port: 3000,
  },
});
