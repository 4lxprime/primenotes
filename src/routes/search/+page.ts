import type { Post } from '$lib/types'

export let prerender = false

export const load = async ({ fetch, url }) => {
	const tag = url.searchParams.get('tag')

	let posts: Post[] = []

	if (!tag) {
		const resp = await fetch('/api/posts')

		posts = await resp.json()
	}

	return {
		posts,
		tag
	}
}
