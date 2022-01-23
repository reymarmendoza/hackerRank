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

class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

// function Solution() {
//   // Current string
//   let stack = [];
//   // Reversed string
//   let queue = [];

//   this.pushCharacter = (char) => stack.push(char);
//   this.enqueueCharacter = (char) => queue.unshift(char);
//   this.popCharacter = () => stack.pop();
//   this.dequeueCharacter = () => queue.pop();
// }

class Solution {
	constructor() {
		this.top = null
		this.bottom = null
		this.first = null
		this.last = null
		this.length = 0
	}
	pushCharacter(value) {
		const nodo = new Node(value)
		if (this.top === null) {
			this.top = nodo
			this.bottom = nodo
		} else {
			const tempTop = this.top
			this.top = nodo
			this.top.next = tempTop
		}
	}
	popCharacter() {
		const result = this.top.value
		this.top = this.top.next
		return result
	}
	enqueueCharacter(value) {
		const nodo = new Node(value)
		if (this.first === null) {
			this.first = nodo
			this.last = nodo
		} else {
			this.last.next = nodo
			this.last = nodo
		}
	}
	dequeueCharacter() {
		const result = this.first.value
		this.first = this.first.next
		return result
	}
}

function main() {
	// read the string s
	var s = readLine()
	var len = s.length
	// create the Solution class object p
	var obj = new Solution()
	//push/enqueue all the characters of string s to stack
	for (var i = 0; i < len; i++) {
		obj.pushCharacter(s.charAt(i))
		obj.enqueueCharacter(s.charAt(i))
	}

	var isPalindrome = true
	/*
    pop the top character from stack
    dequeue the first character from queue
    compare both the characters*/

	for (var i = 0; i < len / 2; i++) {
		if (obj.popCharacter() != obj.dequeueCharacter()) {
			isPalindrome = false
			break
		}
	}
	//finally print whether string s is palindrome or not

	if (isPalindrome) console.log('The word, ' + s + ', is a palindrome.')
	else console.log('The word, ' + s + ', is not a palindrome.')
}
