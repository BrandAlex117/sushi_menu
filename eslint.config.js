import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import astroPlugin from 'eslint-plugin-astro';

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,ts,mts,cts}'], plugins: { js }, extends: ['js/recommended'], languageOptions: { globals: {...globals.browser, ...globals.node} } },
  tseslint.configs.recommended,
  astroPlugin.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'semi': ['error', 'always'],
      'quotes': ['error', 'single']
    }
  }
]);
