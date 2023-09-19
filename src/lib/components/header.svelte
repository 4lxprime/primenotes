<script lang="ts">
	import * as config from '$lib/config'
	import { formatDate } from '$lib/utils'
	import { onMount } from 'svelte'

	let time = new Date()

	$: date = formatDate(time.toString())

	onMount(() => {
		const interval = setInterval(() => {
			time = new Date()
		}, 60 * 60 * 1)
	})
</script>

<header class="mb-4 p-1 bg-zinc-800">
	<nav class="flex mx-1 sm:mx-36">
		<a class="flex-none hover:text-blue-500 transition-all duration-300" href="/">
			{config.title}
		</a>

		<ul class="flex flex-grow justify-center text-center items-center">
			{#each [{ url: '/', name: 'Home' }, { url: '/search', name: 'Search' }, { url: '/rss.xml', name: 'Rss' }] as head}
				<li class="px-2">
					<a href={head.url} class="font-light hover:text-blue-500 transition-all duration-300"
						>{head.name}</a
					>
				</li>
			{/each}
		</ul>

		<p class="hidden flex-none sm:block">
			{date}
		</p>
	</nav>
</header>
