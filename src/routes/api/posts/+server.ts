import { json, type RequestHandler } from '@sveltejs/kit'
import type { Post } from '$lib/types'

const getPosts = async (): Promise<Post[]> => {
	let posts: Post[] = []

	const paths = import.meta.glob('/src/content/posts/*.md', { eager: true })

	for (const path in paths) {
		const file = paths[path]
		const slug = path.split('/').at(-1)?.replace('.md', '')

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>

			const post: Post = {
				...metadata,
				slug
			}

			post.published && posts.push(post)
		}
	}

	posts.sort((f, s) => new Date(s.date).getTime() - new Date(f.date).getTime())

	return posts
}

export const GET: RequestHandler = async () => {
	const posts = await getPosts()

	return json(posts)
}
