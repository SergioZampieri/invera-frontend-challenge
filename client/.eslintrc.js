module.exports = {
    extends: [
      'next', 
      'next/core-web-vitals', 
      'eslint:recommended', 
      'plugin:react/recommended', 
      "plugin:react/jsx-runtime",
      'plugin:@typescript-eslint/recommended', 
      'plugin:@tanstack/eslint-plugin-query/recommended',
      'prettier'
    ],
    plugins: [
      'react',
      '@typescript-eslint'
    ],
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    rules: {
      "react/prop-types": 0,
      "@typescript-eslint/no-require-imports": 1
    }
  };