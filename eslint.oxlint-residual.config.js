import tsParser from '@typescript-eslint/parser';
import vitest from '@vitest/eslint-plugin';
import gitignore from 'eslint-config-flat-gitignore';
import jsdoc from 'eslint-plugin-jsdoc';
import node from 'eslint-plugin-n';

// Keep active ESLint rules that the Oxlint migrator cannot translate.
export default [
  gitignore({ strict: false }),
  {
    files: [
      '**/*.js',
      '**/*.mjs',
      '**/*.cjs',
      '**/*.jsx',
      '**/*.ts',
      '**/*.mts',
      '**/*.cts',
      '**/*.tsx',
    ],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      jsdoc,
      node,
    },
    rules: {
      'dot-notation': ['error', { allowKeywords: true, allowPattern: '' }],
      'jsdoc/check-alignment': 'warn',
      'jsdoc/check-param-names': 'warn',
      'jsdoc/check-types': 'warn',
      'jsdoc/multiline-blocks': 'warn',
      'jsdoc/no-multi-asterisks': 'warn',
      'jsdoc/require-returns-check': 'warn',
      'jsdoc/require-yields-check': 'warn',
      'no-restricted-syntax': ['error', 'TSEnumDeclaration[const=true]', 'TSExportAssignment'],
      'no-undef-init': 'error',
      'no-dupe-args': 'error',
      'no-octal': 'error',
      'no-octal-escape': 'error',
      'node/no-deprecated-api': 'error',
      'node/prefer-global/buffer': ['error', 'never'],
      'node/prefer-global/process': ['error', 'never'],
      'node/process-exit-as-throw': 'error',
    },
  },
  {
    files: [
      '**/__tests__/**/*.?([cm])[jt]s?(x)',
      '**/*.spec.?([cm])[jt]s?(x)',
      '**/*.test.?([cm])[jt]s?(x)',
      '**/*.bench.?([cm])[jt]s?(x)',
      '**/*.benchmark.?([cm])[jt]s?(x)',
    ],
    plugins: {
      vitest,
    },
    rules: {
      'node/prefer-global/process': 'off',
      'vitest/no-only-tests': 'error',
    },
  },
  {
    files: ['**/*.d.?([cm])ts'],
    rules: {
      'no-restricted-syntax': 'off',
    },
  },
];
