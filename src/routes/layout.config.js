// layout.config.js

import getPreprocessor from 'svelte-preprocess'
import postcss from 'rollup-plugin-postcss'
import path from 'path'

const postcssPlugins = [
	require("postcss-import")(),
	require("postcss-preset-env")({
    features: {
      'nesting-rules': true
    }
  }),
	require("cssnano")()
]

const preprocess = getPreprocessor({
	transformers: {
		postcss: {
			plugins: postcssPlugins
		}
	}
})

export default {
	client: {
		plugins: [
			postcss({extract: true}),
			svelte({
				preprocess
			}),
		],
	},
	server: {
		plugins: [
      postcss({
				plugins: postcssPlugins,
				extract: path.resolve(__dirname, './static/global.css')
			})
		],
	},
}