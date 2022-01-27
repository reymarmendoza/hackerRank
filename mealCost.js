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

function solve(meal_cost, tip_percent, tax_percent) {
	meal_cost += meal_cost * (tip_percent / 100) + meal_cost * (tax_percent / 100)
	console.log(Math.round(meal_cost))
}

function main() {
	const meal_cost = parseFloat(readLine().trim())
	const tip_percent = parseInt(readLine().trim(), 10)
	const tax_percent = parseInt(readLine().trim(), 10)

	solve(meal_cost, tip_percent, tax_percent)
}

/**
 Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being added as tip), and tax percent (the percentage of the meal price being added as tax) for a meal, find and print the meal's total cost. Round the result to the nearest integer.
 */
