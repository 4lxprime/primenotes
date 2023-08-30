import type { Post } from '$lib/types'

export let prerender = true

export const load = async ({ fetch }) => {
	const resp = await fetch('/api/posts')

	const posts: Post[] = await resp.json()

	return {
		posts
	}
}
