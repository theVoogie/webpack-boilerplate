// eslint-disable-next-line @typescript-eslint/no-var-requires
const eslintConfig = require('./configs/default.eslintConfig');

module.exports = {
  ...eslintConfig,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: ['./tsconfig.dist.json'],
    extraFileExtensions: ['.json'],
  },
  ignorePatterns: ['src/**/*.test.tsx'],
};
