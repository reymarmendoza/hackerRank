function processData(input) {
	const data = input.split('\n')

	for (let i = 1; i <= data[0]; i++) {
		const split = data[i].split('')
		let even = ''
		let odd = ''
		split.forEach((item, index) => {
			index % 2 === 0 ? (even += item) : (odd += item)
		})
		console.log(`${even} ${odd}`)
	}
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

/**
Given a string, , of length  that is indexed from  to , print its even-indexed and odd-indexed characters as  space-separated strings on a single line (see the Sample below for more detail).

Note:  is considered to be an even index.
*/