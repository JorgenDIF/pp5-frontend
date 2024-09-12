import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 2021, 
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react: pluginReact,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      "react/react-in-jsx-scope": "off", // Disable rule for React 17+
      "react/prop-types": "off",
    },
  },
  // Additional config for Jest test files
  {
    files: ["**/*.test.js", "**/*.test.jsx"], // Target test files
    languageOptions: {
      globals: {
        ...globals.jest, // Add Jest globals like `test`, `expect`
      },
    },
  },
];

