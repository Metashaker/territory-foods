module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "prettier",
    "plugin:react/recommended",
    "airbnb",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    semi: "off",
    "react/function-component-definition": "off",
    "react/react-in-jsx-scope": "off",
    "import/prefer-default-export": "off",
    "react/prop-types": "off",
  },
};
