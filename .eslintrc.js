module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    // "eslint:recommended",
    // "plugin:vue/vue3-recommended",
    "plugin:vue/vue3-essential",
    // "plugin:vue/vue3-strongly-recommended",
    // "plugin:@typescript-eslint/recommended",
    // "plugin:prettier/recommended",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["vue", "@typescript-eslint"],
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
  },
  rules: {},
  overrides: [],
};
