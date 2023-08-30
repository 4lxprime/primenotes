<script lang="ts">
	import * as config from '$lib/config'
	import { md as Md } from '$lib/components'

	import { formatDate } from '$lib/utils'

	import type { MdData } from '$lib/types'

	export let data: MdData
</script>

<svelte:head>
	<title>{config.title} - {data.meta.username}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.username} />
</svelte:head>

<article class="mx-40">
	<hgroup>
		<div class="flex items-center">
			<img
				src="https://avatars.githubusercontent.com/u/58915711?v=4"
				height="100px"
				width="100px"
				class="rounded-full mr-4"
				alt="{data.meta.username} profile picture"
			/>

			<div>
				<p class="font-black text-6xl hover:text-blue-500 transition-all duration-300">
					{data.meta.username}
				</p>

				<p class="text-zinc-500 py-2">
					Member from {formatDate(data.meta.date)}
				</p>
			</div>
		</div>
	</hgroup>

	<div class="flex my-4 mb-6">
		{#each data.meta.tags as tag}
			<a href="/search?tag={tag}">
				<span
					class="px-5 py-2 mr-2 border text-white hover:text-blue-500 border-zinc-500 hover:border-blue-500 rounded-full bg-zinc-700 transition-all duration-200"
				>
					&num;{tag}
				</span>
			</a>
		{/each}
	</div>

	<Md content={data.content} />
</article>
