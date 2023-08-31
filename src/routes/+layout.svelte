<script lang="ts">
	import { fly } from 'svelte/transition'

	import { Header, Footer } from '$lib/components'

	import type { LayoutData } from './$types'

	import '../app.css'

	export let data: LayoutData
</script>

<div>
	<Header />

	<main class="mb-10 m-8">
		{#key data.url}
			<div in:fly={{ delay: 201, duration: 200, x: 200 }} out:fly={{ duration: 200, x: -200 }}>
				<slot />
			</div>
		{/key}
	</main>

	<Footer />
</div>
