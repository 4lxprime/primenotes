import type { MdData } from '$lib/types.js'
import { error } from '@sveltejs/kit'

export const prerender = false

export const load = async ({ params }): Promise<MdData> => {
	try {
		const post = await import(`../../../content/posts/${params.slug}.md`)

		return {
			content: post.default,
			meta: post.metadata
		}
	} catch (e) {
		throw error(404, `Could not found ${params.slug}`)
	}
}
