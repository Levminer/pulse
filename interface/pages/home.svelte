<div class="transparent-900 mx-auto my-10 w-4/5 rounded-2xl text-white">
	<div class="flex flex-col gap-5">
		<a
			href="/games"
			class="bg-gray-900 py-8 px-4 rounded-xl flex items-center gap-3 hover:bg-gray-800 hover:translate-y-1 duration-200 transition active:bg-gray-700"
		>
			<Gamepad2 class="w-10 h-10" />
			<h2>My games</h2>
		</a>
		<button
			class="bg-gray-900 py-8 px-4 rounded-xl flex items-center gap-3 hover:bg-gray-800 hover:translate-y-1 duration-200 transition active:bg-gray-700"
		>
			<BarChart3 class="w-10 h-10" />
			<h2>Statistics</h2>
		</button>
		<button
			class="bg-gray-900 py-8 px-4 rounded-xl  flex items-center gap-3 hover:bg-gray-800 hover:translate-y-1 duration-200 transition active:bg-gray-700"
		>
			<Clock class="w-10 h-10" />
			<h2>Game detection</h2>
		</button>
		<button
			class="bg-gray-900 py-8 px-4 rounded-xl flex items-center gap-3 hover:bg-gray-800 hover:translate-y-1 duration-200 transition active:bg-gray-700"
		>
			<Settings class="w-10 h-10" />
			<h2>Settings</h2>
		</button>
	</div>
</div>

<script lang="ts">
	import { BarChart3, Clock, Gamepad2, Settings } from "lucide-svelte"
</script>
