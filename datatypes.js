process.stdin.resume()
process.stdin.setEncoding('ascii')

var input_stdin = ''
var input_stdin_array = ''
var input_currentline = 0

process.stdin.on('data', function (data) {
	input_stdin += data
})

process.stdin.on('end', function () {
	input_stdin_array = input_stdin.split('\n')
	main()
})

// Reads complete line from STDIN
function readLine() {
	return input_stdin_array[input_currentline++]
}

function main() {
	var i = 4
	var d = 4.0
	var s = 'HackerRank '
	// Declare second integer, double, and String variables.
	let intNum = 0
	let douNum = 0.0
	let str = ''

	// Read and save an integer, double, and String to your variables.
	intNum = parseInt(readLine())
	douNum = parseFloat(readLine())
	str = readLine()

	// Print the sum of both integer variables on a new line.
	intNum += i

	// Print the sum of the double variables on a new line.
	douNum = d + douNum

	// Concatenate and print the String variables on a new line
	// str = s.concat(str);
	str = s + str

	// The 's' variable above should be printed first.
	console.log(intNum)
	console.log(douNum.toFixed(1))
	console.log(str)
}