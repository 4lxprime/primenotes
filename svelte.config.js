import adapter from '@sveltejs/adapter-vercel'
import { vitePreprocess } from '@sveltejs/kit/vite'

import { escapeSvelte, mdsvex } from 'mdsvex'
import shiki from 'shiki'

import remarkUnwrapImages from 'remark-unwrap-images'
import remarcToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	highlight: {
		highlighter: async (code, lang) => {
			const highlighter = await shiki.getHighlighter({
				theme: 'one-dark-pro'
			})

			const html = escapeSvelte(highlighter.codeToHtml(code, { lang }))

			return `{@html \`${html}\`}`
		}
	},
	layout: {
		_: './src/mdsvex.svelte'
	},
	remarkPlugins: [remarkUnwrapImages, remarcToc],
	rehypePlugins: [rehypeSlug]
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter()
	}
}

export default config
