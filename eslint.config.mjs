import globals from "globals";
import pluginJs from "@eslint/js";
import typescriptEslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default {
  globals: globals.browser,
  "extends": ["plugin:prettier/recommended"],
  overrides: [
    {
      files: ["*.js"],
      ...pluginJs.configs.recommended,
    },
    {
      files: ["*.ts", "*.tsx"],
      ...typescriptEslint.configs.recommended,
    },
    {
      files: ["*.jsx", "*.tsx"],
      ...pluginReactConfig,
    },
  ],
};
