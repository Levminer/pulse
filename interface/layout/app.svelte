<div class="flex h-screen">
	<div class="w-full overflow-hidden overflow-y-auto">
		<RouteTransition>
			<Route path="/"><Home /></Route>
			<Route path="/games"><Games /></Route>
		</RouteTransition>
	</div>
</div>

<script lang="ts">
	import { invoke } from "@tauri-apps/api"
	import { Route, router } from "@baileyherbert/tinro"
	import Home from "../pages/home.svelte"
	import Games from "../pages/games.svelte"
	import RouteTransition from "../components/routeTransition.svelte"

	$: items = []

	const test = async () => {
		let res: string = await invoke("get_processes")

		let arr = res.split("\n")

		items = arr
	}

	test()
</script>
