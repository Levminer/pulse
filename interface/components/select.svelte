<Listbox
	value={active}
	on:change={(event) => {
		active = event.detail

		console.log(active)

		for (let i = 0; i < $games.length; i++) {
			if ($games[i].name === active) {
				return
			}
		}

		$games = [...$games, { name: active, exe: "", playtime: { hours: 0, minutes: 0 } }]
	}}
>
	<div class="relative">
		<span class="inline-block w-full shadow-sm">
			<ListboxButton
				class="@apply form-select cursor-pointer rounded-xl h-12 text-left !border-white font-medium py-3 text-black !ring-transparent duration-200 ease-linear hover:bg-gray-200 focus-visible:!ring-4 w-52"
			>
				<span class="block truncate">{active}</span>
			</ListboxButton>
		</span>

		<Transition
			enter="transition duration-100 ease-out"
			enterFrom="transform scale-95 opacity-0"
			enterTo="transform scale-100 opacity-100"
			leave="transition duration-75 ease-out"
			leaveFrom="transform scale-100 opacity-100"
			leaveTo="transform scale-95 opacity-0"
		>
			<div class="absolute z-10 mt-1 w-full rounded-xl bg-white shadow-lg">
				<ListboxOptions class="max-h-60 overflow-auto p-2 text-base leading-6 shadow-xl focus:outline-none sm:text-sm sm:leading-5">
					{#each options as name (name)}
						<ListboxOption
							value={name}
							class={({ active }) => {
								return classNames(
									"relative cursor-pointer select-none rounded-lg py-2 pl-3 pr-9 duration-100 ease-linear focus:outline-none",
									active ? "bg-gray-800 text-white" : "text-gray-900"
								)
							}}
							let:active
							let:selected
						>
							<span class={classNames("flex flex-row items-center truncate", selected ? "font-bold" : "font-normal")}>
								{name}
							</span>
							{#if selected}
								<span class={classNames("absolute inset-y-0 right-1 flex items-center", active ? "text-white" : "text-black")}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-6 w-6 duration-200 ease-linear"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
									>
										<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
									</svg>
								</span>
							{/if}
						</ListboxOption>
					{/each}
				</ListboxOptions>
			</div>
		</Transition>
	</div>
</Listbox>

<script lang="ts">
	import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from "@rgossiaux/svelte-headlessui"
	import { games } from "../stores/games"

	const classNames = (...classes: (string | false | null | undefined)[]) => {
		return classes.filter(Boolean).join(" ")
	}

	export let options: string[]
	export let setting: string

	let active: string | undefined

	if (active === undefined) {
		active = "Select an option"
	}
</script>
