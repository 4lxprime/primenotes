<script lang="ts">
	import * as config from '$lib/config'
	import { formatDate } from '$lib/utils'
	import { onMount } from 'svelte'
	import { fly } from 'svelte/transition'

	export let data

	let loaded: boolean = false

	onMount(() => {
		loaded = true
	})
</script>

<svelte:head>
	<title>{config.title} - Home</title>
</svelte:head>

<div class="justify-center items-center text-center">
	<main>
		<h1 class="mb-20 text-6xl font-bold">
			Welcome to
			<span class="bg-gradient-to-br from-blue-400 to-blue-900 bg-clip-text text-transparent">
				{config.title}
			</span>
		</h1>

		{#if loaded}
			<section>
				<ul>
					{#each data.posts as post, i}
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
				</ul>
			</section>
		{/if}
	</main>
</div>
