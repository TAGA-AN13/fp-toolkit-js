/**
 * compose.js
 * Function composition utilities.
 * 
 * Composition is the heart of functional programming.
 * It allows building complex operations from simple functions.
 */

/**
 * pipe - Passes a value through a series of functions (left to right).
 * pipe(f, g, h)(x) is equivalent to h(g(f(x)))
 * 
 * @param {...Function} fns - Functions to apply in sequence
 * @returns {Function} A new composed function
 */
const pipe = (...fns) => (value) =>
    fns.reduce((acc, fn) => fn(acc), value);

/**
 * compose - Same as pipe but applies functions right to left.
 * compose(f, g, h)(x) is equivalent to f(g(h(x)))
 * Matches mathematical function composition notation.
 * * @param {...Function} fns - Functions to compose
 * @returns {Function} A new composed function
 */
const compose = (...fns) => (value) =>
    fns.reduceRight((acc, fn) => fn(acc), value);

/**
 * curry - Converts a function that takes multiple arguments
 * into a sequence of functions that each take a single argument.
 *
 * @param {Function} fn - Function to curry
 * @returns {Function} Curried version of the function
 *
 * Example:
 * const add = curry((a, b, c) => a + b + c);
 * add(1)(2)(3); // 6
 * add(1, 2)(3); // 6
 * add(1)(2, 3); // 6
 */
const curry = (fn) => {
  const curried = (...args) =>
    args.length >= fn.length
      ? fn(...args)
      : (...moreArgs) => curried(...args, ...moreArgs);
  return curried;
};

/**
 * memoize - Caches the result of a pure function for repeated calls
 * with the same arguments. Only works correctly with pure functions.
 * 
 * @param {Function} fn - Pure function to memoize
 * @returns {Function} Memoized version of the function
 */
const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

module.exports = { pipe, compose, curry, memoize };