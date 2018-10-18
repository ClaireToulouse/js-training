'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
function jadenCase(string) {
	let newString= '';
	for (let i=0 ; i<string.length ; i++) {
		if (string[i-1] === ' ') {
			let upper = string[i].toUpperCase();
			newString = newString + upper;
		}
		else {
			newString = newString + string[i];			
		}
	}
	return newString;
}

console.log(jadenCase('How are you'));



//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase('You must write your own tests'), 'You Must Write Your Own Tests')
// End of tests */
