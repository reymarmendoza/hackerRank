'use strict'

process.stdin.resume()
process.stdin.setEncoding('utf-8')

let inputString = ''
let currentLine = 0

process.stdin.on('data', function (inputStdin) {
	inputString += inputStdin
})

process.stdin.on('end', function () {
	inputString = inputString.split('\n')

	main()
})

function readLine() {
	return inputString[currentLine++]
}

function main() {
	const n = parseInt(readLine().trim(), 10)
	const a = readLine()
		.replace(/\s+$/g, '')
		.split(' ')
		.map(aTemp => parseInt(aTemp, 10))
	// Write your code here
	let swap = 0
	for (let i = 0; i < n; i++) {
		for (let j = i + 1; j < n; j++) {
			if (a[j] < a[i]) {
				const tmp = a[i]
				a[i] = a[j]
				a[j] = tmp
				swap++
			}
		}
	}
	console.log(`Array is sorted in ${swap} swaps.`)
	console.log(`First Element: ${a[0]}`)
	console.log(`Last Element: ${a[n - 1]}`)
}
