// eslint.config.mjs
// import antfu from '@antfu/eslint-config'

// export default antfu({
//   vue: true,
//   typescript: true,
//   formatters: true,
//   ignores: ['verify-commit.mjs', 'src/permission.ts'],
// })

import { interopDefault } from './src/utils/index.ts'

const [
  pluginVue,
  parserVue,
] = await Promise.all([
  interopDefault(import('eslint-plugin-vue')),
  interopDefault(import('vue-eslint-parser')),
])

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
    },
  },
]
