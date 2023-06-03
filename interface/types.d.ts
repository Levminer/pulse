declare global {
	interface Process {
		pid: number
		name: string
		exe: string
	}

	interface Game {
		name: string
		exe: string
		playtime: {
			hours: number
			minutes: number
		}
	}
}

export {}
