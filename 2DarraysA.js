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
  let arr = Array(6);
  let hourSum = null
  let hourMax = null

  for (let i = 0; i < 6; i++) {
    arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
  }
/** */
// It was not like I thought, it is not just 
// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 2 4 4 0
// 0 0 0 2 0 0
// 0 0 1 2 4 0

	for (let i = 1; i < 5; i++) {
		for (let j = 1; j < 5; j++) {
			if (arr[i][j] != 0) {
				if (arr[i][j - 1] === 0 && arr[i][j + 1] === 0) {
					if (
						arr[i - 1][j - 1] !== 0 &&
						arr[i - 1][j] !== 0 &&
						arr[i - 1][j + 1] !== 0
					) {
						if (
							arr[i + 1][j - 1] !== 0 &&
							arr[i + 1][j] !== 0 &&
							arr[i + 1][j + 1] !== 0
						) {
							hourSum =
								arr[i - 1][j - 1] +
								arr[i - 1][j] +
								arr[i - 1][j + 1] +
								arr[i][j] +
								arr[i + 1][j - 1] +
								arr[i + 1][j] +
								arr[i + 1][j + 1]
							console.log(hourSum)

							if (hourSum > hourMax) {
								hourMax = hourSum
							}
						}
					}
				}
			}
		}
	}
}
