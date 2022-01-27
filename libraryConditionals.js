function processData(input) {
	//Enter your code here
	const lines = input.split('\n')
	let fine = 0

	for (let i = 0; i < lines.length; i++) {
		if (i % 2 !== 0) {
			continue
		}
		const returnDate = lines[i].split(' ')
		const dueDate = lines[i + 1].split(' ')

		const years = returnDate[2] - dueDate[2]
		const months = returnDate[1] - dueDate[1]
		const days = returnDate[0] - dueDate[0]

		if (years < 1) {
			if (months < 1 || years < 0) {
				if (days > 0 && months === 0) {
					fine = 15 * days
				}
			} else {
				fine = 500 * months
			}
		} else {
			fine = 10000
		}
	}
	console.log(fine)
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
