const arr = [1, 2, 3, [[4, 5, 6], 7], 8, [9, [10, [11, [12]]], 13], 14]

const res = arr.flat(2)

arr.map(i => {
	console.log(typeof i)
})
console.log('Flat', res)