const {
  add, multiply, subtract, divide,
  clamp, isEven, isOdd,
  factorial, fibonacci, range
} = require('../src/mathUtils');

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

console.log('\n=== Math Utilities Tests ===');

// Currying tests
console.log('\nCurrying:');
test('add(5)(3) returns 8', () => assertEqual(add(5)(3), 8));
test('multiply(4)(5) returns 20', () => assertEqual(multiply(4)(5), 20));

// Partial application
console.log('\nPartial Application:');
const double = multiply(2);
const add10 = add(10);
test('double(7) returns 14', () => assertEqual(double(7), 14));
test('add10(5) returns 15', () => assertEqual(add10(5), 15));

// Pure functions
console.log('\nPure Functions:');
test('isEven(4) is true', () => assertEqual(isEven(4), true));
test('isOdd(3) is true', () => assertEqual(isOdd(3), true));
test('factorial(5) is 120', () => assertEqual(factorial(5), 120));
test('fibonacci(6) is 8', () => assertEqual(fibonacci(6), 8));
test('range(1, 5) returns [1, 2, 3, 4]', () => assertEqual(range(1, 5), [1, 2, 3, 4]));
test('clamp(0, 100, 150) returns 100', () => assertEqual(clamp(0, 100, 150), 100));

console.log('\n=== Tests Complete ===\n');