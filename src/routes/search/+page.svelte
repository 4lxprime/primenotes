<script lang="ts">
	import * as config from '$lib/config'
	import type { Post } from '$lib/types'
	import { formatDate } from '$lib/utils'
	import { onMount } from 'svelte'

	let posts: Post[] = []
	let search: boolean = false
	let value: string = ''

	$: search = posts.length != 0 || search

	const getPosts = async () => {
		search = true

		const resp = await fetch(`/api/${value.replace(' ', ',')}`)

		posts = await resp.json()
	}

	const searchClick = async () => {
		value.length != 0 ? await getPosts() : null
	}

	export let data

	let loaded: boolean = false

	onMount(() => {
		loaded = true

		if (data.tag) {
			console.log(data.tag)
			value = data.tag
			getPosts()
		}
	})
</script>

<svelte:head>
	<title>{config.title} - Home</title>
</svelte:head>

<div class="justify-center items-center text-center">
	<main>
		<input
			class="px-2 py-1 mx-1 text-black rounded-full border border-zinc-500 focus:border-blue-500 focus:ring-blue-500"
			bind:value
			on:keydown={(e) => {
				e.key === 'Enter' ? searchClick() : null
			}}
			type="text"
			placeholder="search..."
		/>
		<button
			class="px-2 py-1 mx-1 rounded-full border border-zinc-500 hover:border-blue-500"
			on:click={searchClick}
		>
			Search
		</button>

		{#if loaded}
			<section>
				<ul>
					{#if search}
						{#each posts as post}
							<li class="m-2 p-2 flex text-left border-b border-zinc-600">
								<div class="flex-grow">
									<a href="post/{post.slug}">
										<h1 class="font-bold text-5xl hover:text-blue-500 transition-all duration-300">
											{post.title}
										</h1>
									</a>
									<p class="text-zinc-500">
										{formatDate(post.date)}
									</p>
									<p class="mt-2">
										{post.description}
									</p>
								</div>

								<div class="flex-none">
									<a href="/author/{post.author}">
										<div class="flex justify-center items-center">
											<p class="px-2 hover:text-blue-500">
												{post.author}
											</p>
											<img
												src="https://avatars.githubusercontent.com/u/58915711?v=4"
												height="50px"
												width="50px"
												class="rounded-full"
												alt="{post.author} profile picture"
											/>
										</div>
									</a>
								</div>
							</li>
						{/each}
					{:else}
						{#each data.posts as post}
							<li class="m-2 p-2 flex text-left border-b border-zinc-600">
								<div class="flex-grow">
									<a href="post/{post.slug}">
										<h1 class="font-bold text-5xl hover:text-blue-500 transition-all duration-300">
											{post.title}
										</h1>
									</a>
									<p class="text-zinc-500">
										{formatDate(post.date)}
									</p>
									<p class="mt-2">
										{post.description}
									</p>
								</div>

								<div class="flex-none">
									<a href="/" target="_blank">
										<div class="flex justify-center items-center">
											<p class="px-2 hover:text-blue-500">
												{post.author}
											</p>
											<img
												src="https://avatars.githubusercontent.com/u/58915711?v=4"
												height="50px"
												width="50px"
												class="rounded-full"
												alt="{post.author} profile picture"
											/>
										</div>
									</a>
								</div>
							</li>
						{/each}
					{/if}
				</ul>
			</section>
		{/if}
	</main>
</div>
