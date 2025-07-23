import js from "@eslint/js";

export default {
  files: ["**/*.{js,mjs,cjs,ts}"],
  plugins: { js },
  extends: ["js/recommended"]
};
