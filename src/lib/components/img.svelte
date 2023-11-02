<script lang="ts">
	export let src: string
	export let alt: string
</script>

<div class="w-full my-6">
	<img {src} {alt} loading="lazy" class="mx-auto" />
</div>
