module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript", "prettier"],
  overrides: [],
  parserOptions: {
    project: "**/tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-function-return-type": "off", // 리턴타입 명시 (끌지말지 선택사항)
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/no-misused-promises": "off", // Promise 명시 (끌지말지 선택사항)
    "@typescript-eslint/triple-slash-reference": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
