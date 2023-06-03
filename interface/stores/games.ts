import { get, writable } from "svelte/store"

// Create store
export const games = writable<Game[]>(localStorage.games ? JSON.parse(localStorage.games) : [])

// Listen for store events
games.subscribe((data) => {
	console.log("Games changed: ", data)

	localStorage.setItem("games", JSON.stringify(data))
})

export const getGames = (): Game[] => {
	return get(games)
}

export const setGames = (newGames: Game[]) => {
	games.set(newGames)
}
