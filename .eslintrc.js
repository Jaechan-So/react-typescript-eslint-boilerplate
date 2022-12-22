module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: ['./tsconfig.json']
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  plugins: [
    'react',
    'sort-keys-fix',
    'typescript-sort-keys',
    '@typescript-eslint',
  ],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'curly': ['error', 'all'],
    'eqeqeq': ['error', 'always'],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: ['builtin', 'external', 'internal', ['index', 'sibling', 'parent']],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          }
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
      },
    ],
    'prettier/prettier': ['error', {
        trailingComma: 'all',
        singleQuote: true,
    }],
    'react/function-component-definition': [
      'warn',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/jsx-no-useless-fragment': ['error', {
      allowExpressions: true,
    }],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'sort-keys': ['error', 'asc'],
    'sort-keys-fix/sort-keys-fix': ['error'],
    'typescript-sort-keys/interface': 'error',
    'quotes': ['error', 'single', {
      allowTemplateLiterals: false,
      avoidEscape: true,
    }],
  },
};
