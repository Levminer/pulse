<div class="transparent-900 mx-auto my-10 w-4/5 rounded-2xl text-white">
	<div class="flex flex-col gap-5">
		<a
			href="/"
			class="bg-gray-900 py-8 px-4 rounded-xl flex items-center gap-3 hover:bg-gray-800 hover:translate-y-1 duration-200 transition active:bg-gray-700"
		>
			<ChevronLeftIcon class="w-10 h-10" />
			<h2>My games</h2>
		</a>
		<div class="bg-gray-900 py-8 px-4 rounded-xl flex items-center flex-wrap gap-3">
			<Plus class="w-10 h-10" />
			<h2>Add game manually</h2>
			<div class="flex space-x-2 items-center">
				<button on:click={chooseExe} class="px-5 py-3 rounded-xl font-medium bg-gradient-to-br text-white from-blue-800 to-rose-800"
					>Choose .exe</button
				>
				<h5>- OR -</h5>
				<Select setting={"asd"} options={Array.from(items)} />
			</div>
		</div>
		{#each $games as item}
			<div
				class="bg-gray-900 py-8 px-4 rounded-xl flex justify-between items-center gap-3 hover:bg-gray-800 hover:translate-y-1 duration-200 transition active:bg-gray-700"
			>
				<h3>{item.name}</h3>
				<button on:click={() => removeGame(item.name)}>
					<Trash class="w-8 h-8" />
				</button>
			</div>
		{/each}
	</div>
</div>

<script lang="ts">
	import { dialog, invoke } from "@tauri-apps/api"
	import { ChevronLeftIcon, Plus, Trash } from "lucide-svelte"
	import Select from "@components/select.svelte"
	import { games } from "@stores/games"

	$: items = new Set<string>()

	const chooseExe = async () => {
		let res = await dialog.open({
			filters: [
				{
					name: "Executable",
					extensions: ["exe"],
				},
			],
		})

		console.log(res)
	}

	// remove game from games store
	const removeGame = (name: string) => {
		$games = $games.filter((item) => item.name !== name)
	}

	// load all running processes
	const loadProcesses = async () => {
		let res: Process[] = await invoke("get_processes")

		let sorted = new Set<string>()

		for (let i = 0; i < res.length; i++) {
			let name = res[i].name

			if (!sorted.has(name) && name !== undefined) {
				sorted.add(name)
			}
		}

		items = sorted
	}

	loadProcesses()
</script>
