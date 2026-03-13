/**
 * mathUtils.js
 * Pure mathematical functions demonstrating currying and composition.
 */

// ==========================================
// CURRIED MATH FUNCTIONS
// ==========================================

/**
 * Curried addition: add(a)(b) -> a + b
 * Allows partial application: const add5 = add(5);
 */
const add = (a) => (b) => a + b;

/**
 * Curried multiplication: multiply(a)(b) -> a * b
 */
const multiply = (a) => (b) => a * b;

/**
 * Curried subtraction: subtract(a)(b) -> b - a
 * Note: designed so subtract(3)(10) = 7 (subtract 3 from 10)
 */
const subtract = (a) => (b) => b - a;

/**
 * Curried division: divide(a)(b) -> b / a
 */
const divide = (a) => (b) => b / a;

// ------------------------------------------
// PURE MATH FUNCTIONS
// ------------------------------------------

/**
 * Clamps a value between min and max boundaries.
 * @param {number} min
 * @param {number} max
 * @param {number} value
 * @returns {number}
 */
const clamp = (min, max, value) =>
    Math.min(Math.max(value, min), max);

/**
 * Checks if a number is even. Pure predicate function.
 */
const isEven = (n) => n % 2 === 0;

/**
 * Checks if a number is odd. Pure predicate function.
 */
const isOdd = (n) => n % 2 !== 0;

/**
 * Returns the factorial of n using recursion (no loops).
 * Demonstrates recursion as a replacement for iteration in FP.
 * @param {number} n - Non-negative integer
 * @returns {number}
 */
const factorial = (n) =>
    n <= 1 ? 1 : n * factorial(n - 1);

/**
 * Returns the nth Fibonacci number using recursion.
 * @param {number} n
 * @returns {number}
 */
const fibonacci = (n) =>
    n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);

/**
 * Generates a range of numbers from start to end (exclusive).
 * Uses recursion instead of loops (functional style).
 * @param {number} start
 * @param {number} end
 * @returns {Array}
 */
const range = (start, end) =>
    start >= end ? [] : [start, ...range(start + 1, end)];

// ==========================================
// EXPORTS
// ==========================================

module.exports = {
    add, multiply, subtract, divide,
    clamp, isEven, isOdd,
    factorial, fibonacci, range
};