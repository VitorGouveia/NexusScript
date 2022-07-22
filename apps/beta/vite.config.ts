import path from "path";
import { defineConfig } from "vite";

// @ts-ignore
const isDEV = process.env.NODE_ENV === "production";

export default defineConfig({
  base: isDEV ? "./" : "/Finances/beta",
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        nested: path.resolve(__dirname, "nested/index.html"),
      },
    },
  },
});
