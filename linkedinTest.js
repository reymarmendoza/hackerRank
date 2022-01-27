'use strict'

class Animal {
	static belly = []
	eat() {
		Animal.belly.push('food')
	}
}
let a = new Animal()
a.eat()
console.log(Animal.belly[0]) // FOOD
/* ------- */
const foo = [1, 2, 3]
const [n] = foo
console.log(n) // 1
/* ------- */
let roadTypes = ['street', 'road', 'avenue', 'circle']
console.log(roadTypes[2]) // AVENUE
/* ------- */
let vowels = 'aeiou' // LINE AVOBE
for (var i = 0; i < vowels.length; i++) {
	console.log(vowels[i])
	// print every single letter using the LINE ABOVE
}
/* ------- */
let rainForestAcres = 10
let animals = 0
while (rainForestAcres < 13 || animals <= 2) {
	rainForestAcres++
	animals += 2
}
console.log(animals) // 6
/* ------- */
let cipherText = [...'YZOGUT QGMORTZ MTRHTILS']
let plainText = ''
// block to PRINT you got this
for (let [index, value] of cipherText.entries()) {
	plainText += index % 2 === 0 ? value : ''
}
// block to PRINT you got this
console.log(plainText)
/* ------- */
// using the html code select the THE LIBRARY
let content = document.querySelector('span.content')
console.log(content)
/* ------- */
document.querySelectorAll('div').forEach(e => {
	e.onclick = e => console.log(e.currentTarget.id)
})
// PRINT CBA on click over click me
/* ------- */
var sound = 'grunt'
var bear = { sound: 'roar' }
function roar() {
	console.log(this.sound)
}
roar.apply(bear) // print ROAR
/* ------- */
const foo2 = {
	// no problem using a function inside an object
	bar() {
		console.log('Hello world')
	},
	name: 'Albert',
	age: 26
}
/* ------- */
console.log('I')
setTimeout(() => {console.log('love')}, 0)
console.log('JS')
/* ------- */
let animals = ['jaguar', 'eagle']
animals.pop()
console.log(animals.pop()) // print JAGUAR
/* ------- */
let rainForest = ['Amazon', 'Borneo', 'Cerrado', 'Congo']
rainForest.splice(0, 2)
console.log(rainForest) // print CERRADO CONGO