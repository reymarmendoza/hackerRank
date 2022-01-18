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

function readLine() {
	return input_stdin_array[input_currentline++]
}

class Person {
	constructor(initialAge = 0) {
		if (initialAge < 0) {
			console.log('Age is not valid, setting age to 0.')
			initialAge = 0
		}
		this.age = initialAge
	}
	amIOld() {
		if (this.age < 13) {
			console.log('You are young.')
		} else if (this.age < 18) {
			console.log('You are a teenager.')
		} else {
			console.log('You are old.')
		}
	}
	yearPasses() {
		this.age++
	}
}

function main() {
	var T = parseInt(readLine())
	for (i = 0; i < T; i++) {
		var age = parseInt(readLine())
		var p = new Person(age)
		p.amIOld()
		for (j = 0; j < 3; j++) {
			p.yearPasses()
		}
		p.amIOld()
		console.log('')
	}
}

/*
Write a Person class with an instance variable, , and a constructor that takes an integer, , as a parameter. The constructor must assign  to  after confirming the argument passed as  is not negative; if a negative argument is passed as , the constructor should set  to  and print Age is not valid, setting age to 0.. In addition, you must write the following instance methods:

yearPasses() should increase the  instance variable by .
amIOld() should perform the following conditional actions:
If , print You are young..
If  and , print You are a teenager..
Otherwise, print You are old..
To help you learn by example and complete this challenge, much of the code is provided for you, but you'll be writing everything in the future. The code that creates each instance of your Person class is in the main method. Don't worry if you don't understand it all quite yet!

Note: Do not remove or alter the stub code in the editor.
*/
