// eslint.config.mjs
import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  typescript: true,
  formatters: true,
  ignores: ['verify-commit.mjs', 'src/permission.ts'],
})
