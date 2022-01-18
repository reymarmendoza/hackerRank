'use strict'

const fs = require('fs')

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

function factorial(n) {
	// Write your code here
	if (n === 1) {
		return 1
	}
	return factorial(n - 1) * n
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH)
	const n = parseInt(readLine().trim(), 10)
	const result = factorial(n)

	ws.write(result + '\n')
	ws.end()
}

/**
Complete the factorial function in the editor below. Be sure to use recursion.

factorial has the following paramter:

int n: an integer
Returns

int: the factorial of n
*/
