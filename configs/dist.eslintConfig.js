module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    // airbnb´s best practice for javascript
    'airbnb',
    // import best practice
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    // ESLint with Prettier
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['react-hooks'],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    project: ['./tsconfig.dist.json'],
    extraFileExtensions: ['.json'],
  },
  ignorePatterns: ['src/**/*.test.tsx'],
  rules: {
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
