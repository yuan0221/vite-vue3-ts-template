// eslint.config.mjs
// import antfu from '@antfu/eslint-config'

// export default antfu({
//   vue: true,
//   typescript: true,
//   formatters: true,
//   ignores: ['verify-commit.mjs', 'src/permission.ts'],
// })

import { interopDefault, renameRules } from './src/utils'

const [
  pluginVue,
  parserVue,
  pluginTs,
  parserTs,
] = await Promise.all([
  interopDefault(import('eslint-plugin-vue')),
  interopDefault(import('vue-eslint-parser')),
  interopDefault(import('@typescript-eslint/eslint-plugin')),
  interopDefault(import('@typescript-eslint/parser')),
] as const)

export default [
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: parserVue,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        extraFileExtensions: ['.vue'],
        parser: await interopDefault(import('@typescript-eslint/parser')),
        sourceType: 'module',
      },
    },
    name: 'yl/vue/rules',
    processor: pluginVue.processors['.vue'],
    plugins: {
      vue: pluginVue,
    },
    rules: {
      ...{
        ...pluginVue.configs['vue3-essential'].rules as any,
        ...pluginVue.configs['vue3-strongly-recommended'].rules as any,
        ...pluginVue.configs['vue3-recommended'].rules as any,
      },
      'vue/block-order': ['error', {
        order: ['script', 'template', 'style'],
      }],
      'vue/multi-word-component-names': 'off',
    },
  },
  {
    files: ['**/*.?([cm])[jt]s?(x)'],
    ignores: ['**/*.config.ts'],
    plugins: {
      ts: pluginTs,
    },
    name: 'yl/typescript/rules',
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        extraFileExtensions: ['.vue'],
        sourceType: 'module',
      },
    },
    rules: {
      ...renameRules(
        pluginTs.configs['eslint-recommended'].overrides![0].rules!,
        { '@typescript-eslint': 'ts' },
      ),
      ...renameRules(
        pluginTs.configs.strict.rules!,
        { '@typescript-eslint': 'ts' },
      ),
      'ts/no-explicit-any': 'off',
    },
  },
]
