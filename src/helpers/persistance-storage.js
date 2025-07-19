export const setItem = (key, data) => {
	try {
		localStorage.setItem(key, data)
	} catch {
		console.log('Error savong data')
	}
}
