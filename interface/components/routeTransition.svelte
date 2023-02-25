{#key $router.path}
	<div in:fade={{ duration: 100 }}>
		<div in:fly={{ y: 30 }}>
			<slot />
		</div>
	</div>
{/key}

<script>
	import { router } from "@baileyherbert/tinro"
	import { fade, fly } from "svelte/transition"
</script>
