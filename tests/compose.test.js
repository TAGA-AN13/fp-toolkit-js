const { pipe, compose, curry, memoize } = require('../src/compose');

const test = (desc, fn) => {
  try {
    fn();
    console.log(`  PASS: ${desc}`);
  } catch (e) {
    console.log(`  FAIL: ${desc} | Expected: ${JSON.stringify(e.expected)}, Got: ${JSON.stringify(e.received)}`);
  }
};

const assertEqual = (received, expected) => {
  if (JSON.stringify(received) !== JSON.stringify(expected)) {
    throw { received, expected };
  }
};

// Helper functions for testing composition
const double = (x) => x * 2;
const addOne = (x) => x + 1;
const square = (x) => x * x;
const toString = (x) => String(x);

console.log('\n=== Composition Utilities Tests ===');

// Pipe tests
console.log('\nPipe (left to right):');
test('pipe: double then addOne (5 => 11)', () =>
  assertEqual(pipe(double, addOne)(5), 11)
);

test('pipe: addOne, double, toString (5 => "12")', () =>
  assertEqual(pipe(addOne, double, toString)(5), "12")
);

test('pipe: single function', () =>
  assertEqual(pipe(double)(5), 10)
);

// Compose tests
console.log('\nCompose (right to left):');
test('compose: addOne then double (5 => 11)', () =>
  assertEqual(compose(addOne, double)(5), 11)
);

test('compose: toString, double, addOne (5 => "12")', () =>
  assertEqual(compose(toString, double, addOne)(5), "12")
);

// Curry tests
console.log('\nCurry:');
const addThree = curry((a, b, c) => a + b + c);
test('curry: addThree(1)(2)(3) returns 6', () =>
    assertEqual(addThree(1)(2)(3), 6));
test('curry: addThree(1, 2)(3) returns 6', () =>
    assertEqual(addThree(1, 2)(3), 6));
test('curry: addThree(1)(2, 3) returns 6', () =>
    assertEqual(addThree(1)(2, 3), 6));

// Memoize tests
console.log('\nMemoize:');
let callCount = 0;
const expensiveAdd = memoize((a, b) => { callCount++; return a + b; });
expensiveAdd(1, 2);
expensiveAdd(1, 2); // cached
expensiveAdd(1, 2); // cached
test('memoize caches results (called 3x, computed 1x)', () =>
    assertEqual(callCount, 1));
test('memoize returns correct value', () =>
    assertEqual(expensiveAdd(1, 2), 3));

// Real-world composition example
console.log('\nReal-World Composition Example:');
const processPrice = pipe(
    (price) => price * 1.12,                  // Add 12% VAT
    (price) => Math.round(price * 100) / 100, // Round to 2 decimals
    (price) => `PHP ${price.toFixed(2)}`      // Format as currency
);
test('processPrice(100) => "PHP 112.00"', () =>
    assertEqual(processPrice(100), 'PHP 112.00'));

console.log('\n=== Tests Complete ===\n');