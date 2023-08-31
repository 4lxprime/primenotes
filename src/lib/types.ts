export type Tags = 'svelte' | 'sveltekit' | 'test'

export type Post = {
	title: string
	slug: string
	author: string
	author_pp_url: string
	description: string
	date: string
	tags: Tags[]
	published: boolean
}

export type MdData = {
	content: any
	meta: any
}
