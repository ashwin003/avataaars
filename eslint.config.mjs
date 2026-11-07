import js from '@eslint/js'
import eslintReact from '@eslint-react/eslint-plugin'
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig(
  { ignores: ['dist/'] },
  js.configs.recommended,
  tseslint.configs.recommended,
  eslintReact.configs['recommended-typescript'],
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      globals: globals.browser,
    },
  }
)
