import globals from "globals";
import googleappsscript from "eslint-plugin-googleappsscript";

export default {
  files: ["**/*.{js,mjs,cjs,ts}"],
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
      ...globals.es2020,
      ...googleappsscript.environments.googleappsscript.globals
    }
  }
};
