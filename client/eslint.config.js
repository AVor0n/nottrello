import eslint from '@eslint/js';
import eslintConfigPrettier from "eslint-config-prettier/flat";
import eslintPluginImportX from 'eslint-plugin-import-x';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals'
import tseslint from 'typescript-eslint';

const config = [
  {
    ignores: ['dist', '__generated__.ts', 'eslint.config.js', '.stylelintrc.cjs', '.lintstagedrc.js'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  ...tseslint.configs.strictTypeChecked,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.app.json', './tsconfig.node.json'],
      },
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: 'tsconfig.json',
        },
      },
      react: {
        version: 'detect',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'react-refresh': reactRefresh,
      'react-hooks': reactHooks,
      'react': react,
      'import-x': eslintPluginImportX,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      'arrow-body-style': ['error', 'as-needed'],
      'no-use-before-define': 'off',
      'no-restricted-syntax': 'off',
      'class-methods-use-this': 'off',
      'no-underscore-dangle': 'off',
      'no-param-reassign': ['error', { props: false }],
      'no-console': 'error',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
      'react/jsx-boolean-value': ['error', 'never'],
      'react/self-closing-comp': 'error',
      'react/no-unstable-nested-components': 'error',
      'react/no-multi-comp': ['warn', { ignoreStateless: true }],
      'react/no-array-index-key': 'warn',
      'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
      'react/jsx-no-constructed-context-values': 'error',
      'react/jsx-fragments': ['error', 'syntax'],
      'react/jsx-curly-brace-presence': 'error',
      'react/require-default-props': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/no-unused-prop-types': 'error',
      'react/display-name': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      '@typescript-eslint/no-invalid-void-type': 'off',
      '@typescript-eslint/ban-ts-comment': 'error',
      '@typescript-eslint/prefer-ts-expect-error': 'error',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/no-empty-interface': 'off',
      "@typescript-eslint/restrict-template-expressions": ['error', { allowNumber: true }],
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/consistent-type-imports': ['warn', { fixStyle: 'inline-type-imports' }],
      '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-confusing-void-expression': ['error', { ignoreArrowShorthand: true }],
      'import-x/no-anonymous-default-export': 'error',
      'import-x/no-default-export': 'off',
      'import-x/no-named-default': 'off',
      'import-x/no-named-export': 'off',
      'import-x/no-useless-path-segments': 'error',
      'import-x/newline-after-import': 'error',
      'import-x/no-cycle': ['error', { maxDepth: 3, ignoreExternal: true }],
      'import-x/prefer-default-export': 'off',
      'import-x/no-duplicates': ['error', { 'prefer-inline': true }],
      'import-x/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'type', 'object'],
          'newlines-between': 'never',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          pathGroups: [
            {
              pattern: '@(components)|(pages)|(types)/*',
              group: 'internal',
            },
            {
              pattern: './*.module.css',
              group: 'object',
              position: 'after',
            },
          ],
        },
      ],
    },
  },
  eslintConfigPrettier,
];

export default config;
