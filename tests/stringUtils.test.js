const {
  toUpper, toLower, capitalize, toTitleCase,
  toCamelCase, toSnakeCase, reverseStr,
  wordCount, repeat, truncate
} = require('../src/stringUtils');

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

console.log('\n=== String Utilities Tests ===');

console.log('\nTransformations:');
test('toUpper converts to uppercase', () => assertEqual(toUpper('hello'), 'HELLO'));
test('capitalize first letter', () => assertEqual(capitalize('hello'), 'Hello'));
test('toTitleCase converts words', () => assertEqual(toTitleCase('hello world'), 'Hello World'));
test('toCamelCase converts string', () => assertEqual(toCamelCase('hello world'), 'helloWorld'));
test('toSnakeCase converts string', () => assertEqual(toSnakeCase('Hello World'), 'hello_world'));

console.log('\nUtilities:');
test('reverseStr reverses string', () => assertEqual(reverseStr('hello'), 'olleh'));
test('wordCount counts words', () => assertEqual(wordCount('Hello beautiful world'), 3));

console.log('\nCurried String Functions:');
test('repeat(3)("ha") returns "hahaha"', () => assertEqual(repeat(3)('ha'), 'hahaha'));
test('truncate(10)("Hello World!") truncates', () => assertEqual(truncate(10)('Hello World!'), 'Hello W...'));
test('truncate(20)("Short") keeps original', () => assertEqual(truncate(20)('Short'), 'Short'));

console.log('\n=== Tests Complete ===\n');