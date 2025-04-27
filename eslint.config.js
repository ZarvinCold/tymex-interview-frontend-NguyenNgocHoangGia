import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginImport from "eslint-plugin-import"; // <-- ADD this
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    plugins: { js, import: pluginImport },
    extends: [
      // 'js:recommended',
      // 'plugin:import/recommended',
      // 'eslint:recommended',
      // 'plugin:react/recommended',
      // 'plugin:react/jsx-runtime',
    ],
    rules: {
      "import/no-unresolved": "error",
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "warn",
      "@typescript-eslint/no-unused-expressions": "off",
    },
  },
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
      react: {
        version: "detect",
      },
    },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
]);
