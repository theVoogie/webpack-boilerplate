module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
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
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.json'],
  },
  plugins: ['prettier', '@typescript-eslint', 'react', 'react-hooks', 'html', 'json', 'markdown'],
  rules: {
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelComponents: ['label'],
        labelAttributes: ['htmlFor'],
        controlComponents: ['input'],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        semi: true,
        singleQuote: true,
        endOfLine: 'auto',
        printWidth: 100,
        quoteProps: 'consistent',
        tabWidth: 2,
      },
    ],
    'import/extensions': [
      'error',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
    'max-len': ['error', { code: 100 }],
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'react/no-unused-state': 'off',
    'react/jsx-curly-newline': 'off',
    'no-use-before-define': 'off',
    'no-restricted-globals': 'off',
    'no-param-reassign': 'off',
    'class-methods-use-this': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.test.ts', '**/*.test.tsx'] },
    ],
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
    'no-unused-expressions': 'off',
    'no-irregular-whitespace': 'off',
    'react/prop-types': 'off',
    'react/no-render-return-value': 'off',
    'no-nested-ternary': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
