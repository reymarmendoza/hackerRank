class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

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

function leerInput() {
	return new Promise(resolve => {
		const readline = require('readline').createInterface({
			input: process.stdin,
			output: process.stdout,
		})

		readline.question(`Ingrese una palabra: `, word => {
			readline.close()
			resolve(word)
		})
	})
}

async function main() {
	var s = await leerInput() // var s="racecar";
	var len = s.length
	var obj = new Solution()

	for (var i = 0; i < len; i++) {
		obj.pushCharacter(s.charAt(i))
		obj.enqueueCharacter(s.charAt(i))
	}

	var isPalindrome = true

	for (var i = 0; i < len / 2; i++) {
		if (obj.popCharacter() != obj.dequeueCharacter()) {
			isPalindrome = false
			break
		}
	}

	isPalindrome
		? console.log('The word, ' + s + ', is a palindrome.')
		: console.log('The word, ' + s + ', is not a palindrome.')
}

main()
