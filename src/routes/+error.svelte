<script lang="ts">
	import { page } from '$app/stores'
</script>

<div class="justify-center text-center items-center">
	<h1 class="font-black text-8xl">{$page.status}</h1>
	<p class="font-light text-3xl">{$page.error?.message}</p>
</div>
