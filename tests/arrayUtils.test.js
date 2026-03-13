/**
 * arrayUtils.test.js
 * Test suite for array utility functions.
 * Verifies that all functions are pure and produce correct results.
 */

const {
    head, tail, last, init,
    map, filter, reduce,
    unique, flatten, groupBy,
    partition, zip, take, sum
} = require('../src/arrayUtils');

// Simple test helper (pure function)
const test = (description, fn) => {
    try {
        fn();
        console.log(`  PASS: ${description}`);
    } catch (error) {
        console.log(`  FAIL: ${description}`);
        console.log(`    Expected: ${error.expected}`);
        console.log(`    Received: ${error.received}`);
    }
};

const assertEqual = (received, expected) => {
    const r = JSON.stringify(received);
    const e = JSON.stringify(expected);
    if (r !== e) throw { received: r, expected: e };
};

console.log('\n=== Array Utilities Tests ===');

// Basic operations
console.log('\nBasic Operations:');
test('head returns first element', () => 
    assertEqual(head([1, 2, 3]), 1));

test('tail returns all except first', () =>
    assertEqual(tail([1, 2, 3]), [2, 3]));

test('last returns last element', () =>
    assertEqual(last([1, 2, 3]), 3));

test('init returns all except last', () =>
    assertEqual(init([1, 2, 3]), [1, 2]));

// Higher-order functions
console.log('\nHigher-Order Functions:');
test('map doubles each element', () =>
    assertEqual(map(x => x * 2, [1, 2, 3]), [2, 4, 6]));

test('filter keeps even numbers', () =>
    assertEqual(filter(x => x % 2 === 0, [1, 2, 3, 4, 5]), [2, 4]));

test('reduce sums elements', () =>
    assertEqual(reduce((acc, x) => acc + x, 0, [1, 2, 3]), 6));

// Functional utilities
console.log('\nFunctional Utilities:');
test('unique removes duplicates', () =>
    assertEqual(unique([1, 2, 2, 3, 3, 3]), [1, 2, 3]));

test('flatten reduces nesting by one level', () =>
    assertEqual(flatten([[1, 2], [3, 4], [5]]), [1, 2, 3, 4, 5]));

test('partition splits array by predicate', () =>
    assertEqual(partition(x => x > 3, [1, 5, 2, 4, 3]), [[5, 4], [1, 2, 3]]));

test('zip pairs two arrays together', () =>
    assertEqual(zip(['a', 'b'], [1, 2]), [['a', 1], ['b', 2]]));

test('take returns first n elements', () =>
    assertEqual(take(3, [1, 2, 3, 4, 5]), [1, 2, 3]));

test('sum calculates total of array', () =>
    assertEqual(sum([10, 20, 30]), 60));

// Immutability verification
console.log('\nImmutability Tests:');

test('original array is not modified by map', () => {
    const original = [1, 2, 3];
    map(x => x * 2, original);
    assertEqual(original, [1, 2, 3]);
});

test('original array is not modified by filter', () => {
    const original = [1, 2, 3, 4];
    filter(x => x > 2, original);
    assertEqual(original, [1, 2, 3, 4]);
});

console.log('\n=== Tests Complete ===\n');