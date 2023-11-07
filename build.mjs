import dts from 'bun-plugin-dts'
import { build } from 'bun'

await build({
  entrypoints: ['./src/index.ts'],
  outdir: './dist',
  minify: true,
  plugins: [dts()]
})
