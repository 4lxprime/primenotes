<script lang="ts">
	import * as config from '$lib/config'
	import type { MdData } from '$lib/types'
	import { formatDate } from '$lib/utils.js'
	import { md as Md } from '$lib/components'

	export let data: MdData
</script>

<svelte:head>
	<title>{config.title} - {data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="mx-40">
	<hgroup>
		<div class="flex">
			<div class="flex-grow">
				<p class="font-black text-6xl hover:text-blue-500 transition-all duration-300">
					{data.meta.title}
				</p>

				<p class="text-zinc-500 py-2">
					Published at {formatDate(data.meta.date)}
				</p>
			</div>

			<div class="flex-none">
				<a href="/author/{data.meta.author}">
					<div class="pr-5 flex justify-center items-center">
						<p class="px-2 hover:text-blue-500 transition-all duration-300">
							{data.meta.author}
						</p>
						<img
							src="https://avatars.githubusercontent.com/u/58915711?v=4"
							height="50px"
							width="50px"
							class="rounded-full"
							alt="{data.meta.author} profile picture"
						/>
					</div>
				</a>
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
