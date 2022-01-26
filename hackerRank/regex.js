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
	const N = parseInt(readLine().trim(), 10)
	const regex = /@gmail.com$/g
	let names = []

	for (let NItr = 0; NItr < N; NItr++) {
		const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ')
		const firstName = firstMultipleInput[0]
		const emailID = firstMultipleInput[1]

		if (emailID.match(regex)) {
			names.push(firstName)
		}
	}
	console.log(names.sort().join('\n'))
}