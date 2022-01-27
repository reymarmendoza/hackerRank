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
	let n = parseInt(readLine().trim(), 10)
	// let bin = ''
	// let sec = 0
	// let max = 0

	// while (n != 0) {
	// 	if (n % 2 == 1) {
	// 		bin = bin.concat('1')
	// 		sec += 1
	// 	} else {
	// 		bin = bin.concat('0')
	// 		sec = 0
	// 	}
	// 	n = Math.floor(n / 2)
	// 	if (sec > max) {
	// 		max = sec
	// 	}
	// }

	// console.log(max)
	let iter = n
  // let binary = ''
  let oneCounter = 0
  let max = 0
  
  while (iter > 0) {
    let result = Math.floor(iter / 2)
    let quotient = iter % 2
    
    if (quotient === 1) {
      oneCounter++
      if (oneCounter > max) max = oneCounter        
    } else {
      oneCounter = 0
    }

    // binary += quotient
    iter = result
  }
  // console.log(binary.split('').reverse().join(''), max)  
  console.log(max)
}

/**
Given a base-10 integer, n, convert it to binary (base-2). Then find and print the base-10 integer denoting the maximum number of consecutive 1's in n's binary representation. When working with different bases, it is common to show the base as a subscript.
*/
