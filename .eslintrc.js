// .eslintrc.js
module.exports = {
  parser: "@typescript-eslint/parser",
  // Include "mobx" in plugins array:
  plugins: ["mobx"],
  // Either extend our recommended configuration:
  extends: ["plugin:mobx/recommended", "react-app", "react-app/jest"],
  // ...or specify and customize individual rules:
  rules: {
    "mobx/missing-observer": "off",
    // these values are the same as recommended
    //     "mobx/exhaustive-make-observable": "warn",
    //     "mobx/unconditional-make-observable": "error",
    //     "mobx/missing-make-observable": "error",
    //     "mobx/no-anonymous-observer": "warn"
  },
};
