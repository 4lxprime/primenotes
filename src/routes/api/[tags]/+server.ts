import { error, json, type RequestHandler } from '@sveltejs/kit'
import type { Post } from '$lib/types'

export const GET: RequestHandler = async (e) => {
	try {
		const resp = await e.fetch('/api/posts')
		if (!resp.ok) {
			throw error(500, 'Internal Error')
		}

		const posts: Post[] = await resp.json()
		const tags = e.params.tags?.split(',')
		//const tags: string[] = ['sveltekit']

		const goodPosts: Post[] = []
		posts.forEach((post) => {
			post.tags.forEach((t1) => {
				if (tags) {
					tags.forEach((t2) => {
						if (t2 === t1) {
							goodPosts.push(post)
						}
					})
				}
			})
		})

		return json([...new Set(goodPosts)])
	} catch (e) {
		throw error(404, 'Could not found posts')
	}
}
