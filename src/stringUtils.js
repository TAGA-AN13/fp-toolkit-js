/**
 * stringUtils.js
 * Pure functional string manipulation utilities.
 * Demonstrates immutability - strings are never mutated.
 */

/**
 * Converts a string to UPPER CASE (pure wrapper).
 */
const toUpper = (str) => str.toUpperCase();

/**
 * Converts a string to lower case (pure wrapper).
 */
const toLower = (str) => str.toLowerCase();

/**
 * Capitalizes the first letter of a string.
 */
const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

/**
 * Converts a string to Title Case.
 * "hello world" -> "Hello World"
 */
const toTitleCase = (str) =>
  str.split(' ').map(capitalize).join(' ');

/**
 * Converts a string to camelCase.
 * "hello world" -> "helloWorld"
 */
const toCamelCase = (str) => {
  const words = str.split(/[\s_-]+/);
  return words
    .map((word, index) =>
      index === 0 
        ? word.toLowerCase() 
        : capitalize(word)
    )
    .join('');
};

/**
 * Converts a string to snake_case.
 * "Hello World" -> "hello_world"
 */
const toSnakeCase = (str) =>
  str.replace(/[\s-]+/g, '_').toLowerCase();

/**
 * Reverses a string (pure function, no mutation).
 */
const reverseStr = (str) =>
  str.split('').reverse().join('');

/**
 * Counts the number of words in a string.
 */
const wordCount = (str) =>
  str.trim().split(/\s+/).filter(Boolean).length;

/**
 * Curried repeat: creates a function that repeats a string n times.
 * repeat(3)("ha") => "hahaha"
 */
const repeat = (n) => (str) =>
  Array.from({ length: n }, () => str).join('');

/**
 * Truncates a string to a max length, adding "..." if truncated.
 * Curried: truncate(10)("Hello World Example") => "Hello W..."
 */
const truncate = (maxLength) => (str) =>
  str.length > maxLength
    ? str.slice(0, maxLength - 3) + '...'
    : str;

module.exports = {
  toUpper, toLower, capitalize, toTitleCase,
  toCamelCase, toSnakeCase, reverseStr,
  wordCount, repeat, truncate
};