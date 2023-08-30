import type { MdData } from '$lib/types.js'
import { error } from '@sveltejs/kit'

export const prerender = true

export const load = async ({ params }): Promise<MdData> => {
	try {
		const author = await import(`../../../content/authors/${params.user_name}.md`)

		return {
			content: author.default,
			meta: author.metadata
		}
	} catch (e) {
		throw error(404, 'Could not found author')
	}
}
