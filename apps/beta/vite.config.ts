import { defineConfig } from "vite";

// @ts-ignore
const isGithubPagesDeploy = process.env.GH_PAGES;

export default defineConfig({
  base: isGithubPagesDeploy ? "/Finances/" : "./",
});
