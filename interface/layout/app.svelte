<div>
	{#each items as item}
		 <h2>{item}</h2>
	{/each}
</div>

<script lang="ts">
	import { invoke } from "@tauri-apps/api"

	$: items = []

	const test = async () => {
		let res: string = await invoke("get_processes")

		let arr = res.split("\n")

		items = arr
	}

	test()
</script>
