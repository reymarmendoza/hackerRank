// palindromo
const pal = 'hello' //racecar
let inv = ''
for (let i = pal.length - 1; i >= 0; i--) {
	inv += pal[i]
}
pal === inv ? console.log('SI palindromo') : console.log('NO palindromo')
// alternativa con metodos
console.log(`Reverse: ${pal.split('').reverse().join('')}`)
// alternativa con recursion
function reverseString(str) {
  return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
/* 
LA RECURSIVIDAD ES LIFO
First Part of the recursion method
You need to remember that you won’t have just one call, you’ll have several nested calls

Each call: str === "?"        	                  reverseString(str.subst(1))     + str.charAt(0)
1st call – reverseString("Hello")   will return   reverseString("ello")           + "h"
2nd call – reverseString("ello")    will return   reverseString("llo")            + "e"
3rd call – reverseString("llo")     will return   reverseString("lo")             + "l"
4th call – reverseString("lo")      will return   reverseString("o")              + "l"
5th call – reverseString("o")       will return   reverseString("")               + "o"

Second part of the recursion method
The method hits the if condition and the most highly nested call returns immediately

5th call will return reverseString("") + "o" = "o"
4th call will return reverseString("o") + "l" = "o" + "l"
3rd call will return reverseString("lo") + "l" = "o" + "l" + "l"
2nd call will return reverserString("llo") + "e" = "o" + "l" + "l" + "e"
1st call will return reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h" 
*/
reverseString("hello");

// fibonacci
function fibo(num) {
	if (num < 3) return 1 
	return fibo(num - 1) + fibo(num - 2)
}
//	  Base 	3	 4	5	 6	7		8		9
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
console.log(fibo(5))
/*
6 8
return 5 + 3
5 5
return 3 + 2
4 3
return 2 + 1
3 2
return 1 + 1
*/