'use strict'

/*
 * Create an `id` function that takes one argument and return it
 *
 * @notions Functions
 */

// Your code :

function id(arg){
	return arg;
}

function milkshake(lait,fraise){
	return lait + ' et du ' + fraise
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof id, 'function')
assert.strictEqual(id.length, 1)
assert.strictEqual(id(5), 5)
assert.strictEqual(id('pouet'), 'pouet')
assert.strictEqual(milkshake('lait de soja','chocolat'), 'lait de soja et du chocolat')
assert.strictEqual(id(assert), assert)
// End of tests */
