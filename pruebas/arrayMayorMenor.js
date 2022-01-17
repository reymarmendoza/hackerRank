const numeros = [7, 15, 1, 2, 28, 22, 29, 4, 5, 91, 90, 38, 75]
// ---------- ENCONTRAR EL NUMERO MAYOR
let mayor = 0
numeros.forEach(i => {
	if (i > mayor) mayor = i
})
console.log(`Mayor: ${mayor}`)
// ---------- ENCONTRAR EL NUMERO MENOR
let menor
for (let i = 1; i <= numeros.length; i++) {
	if (i === 1) {
		menor = numeros[i] > numeros[i - 1] ? numeros[i - 1] : numeros[i]
	} else {
		menor = menor > numeros[i] ? numeros[i] : menor
	}
}
console.log(`Menor: ${menor}`)
// ---------- ORDENAR UN ARRAY
let arrCopy = []
for (n in numeros) { // no sirve con NUMEROS es para OBJETOS
	arrCopy.push(numeros[n])
}

for (let h = 0; h < arrCopy.length; h++) {
	let mover = 0
	for(let i = h + 1; i < arrCopy.length; i++) {
		if (arrCopy[h] > arrCopy[i]) {
			mover = arrCopy[h]
			arrCopy[h] = arrCopy[i]
			arrCopy[i] = mover
		}
	}
}
console.log(`Array ordenado: ${arrCopy}`)
// ----------
const arrCopy2 = numeros.map((n => n))
arrCopy2.sort((a, b) => (b - a))
console.log(`Array ordenado: ${arrCopy2}`)
// ---------- ANADIR UN NUMERO EN EL MEDIO
// arrCopy2[3] = 100
// console.log('Value copy', arrCopy2)
// console.log('Not the same', numeros)
// ----------
const arr3 = numeros.map(n => n)
// arr3.splice(2, 1)
// console.log('Sin el valor #3', arr3)
// extraer la posicion 4 y reacomodar
const posc = 3
for (let i = 0; i < arr3.length; i++) {
	if (i > posc) {
		arr3[i - 1] = arr3[i]
	}
}
delete arr3[arr3.length - 1]
console.log('eliminar2:', arr3)
// alternativa
let rElim = []
for (let i = 0; i < arr3.length - 1; i++) {
	if (i !== posc) {
		rElim.push(arr3[i])	
	}
}
console.log('eliminar2.1:', rElim)
// ----------
// cambiar la posicion 4, por un 900
const numPlus = 900
let anadirReacomodar = []
for (let i = 0; i < arr3.length - 1; i++) {
	anadirReacomodar.push(arr3[i])
	if (i === posc) {
		anadirReacomodar.push(numPlus)
	}
}
console.log('anadir900:', anadirReacomodar)