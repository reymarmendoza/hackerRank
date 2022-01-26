function processData(input) {
	//Enter your code here
	const el = input.split('\n')

	const isPrime = num => {
		for (let i = 2, s = Math.sqrt(num); i <= s; i++)
			if (num % i === 0) return false
		return num > 1
	}

	for (let i = 0; i < el[0]; i++) {
		isPrime(el[i + 1]) ? console.log('Prime') : console.log('Not prime')
	}

	// let cont = 0
	// for (let i = 1; i < input; i++) {
	// 	input % i === 0 ? cont++ : cont
	// }
	// if (cont > 2) {
	// 	console.log('Not prime')
	// } else {
	// 	console.log('Prime')
	// }
}

process.stdin.resume()
process.stdin.setEncoding('ascii')
_input = ''
process.stdin.on('data', function (input) {
	_input += input
})

process.stdin.on('end', function () {
	processData(_input)
})
