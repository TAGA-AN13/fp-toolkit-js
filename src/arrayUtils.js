/**
 * arrayUtils.js
 * Pure functional utility functions for array operations.
 *
 * Rules followed:
 * 1. All functions are PURE (no side effects, no mutations)
 * 2. Original arrays are NEVER modified (immutability)
 * 3. Functions use declarative style (map, filter, reduce)
 * 4. Higher-order functions are used throughout
 */

// ==========================================
// BASIC ARRAY OPERATIONS (Pure Functions)
// ==========================================

/**
 * Returns the first element of an array.
 * @param {Array} arr
 * @returns {*} First element or undefined
 */
const head = (arr) => arr[0];

/**
 * Returns all elements except the first.
 * @param {Array} arr
 * @returns {Array} New array without the first element
 */
const tail = (arr) => arr.slice(1);

/**
 * Returns the last element of an array.
 * @param {Array} arr
 * @returns {*} Last element or undefined
 */
const last = (arr) => arr[arr.length - 1];

/**
 * Returns all elements except the last.
 * @param {Array} arr
 * @returns {Array} New array without the last element
 */
const init = (arr) => arr.slice(0, -1);

// ==========================================
// HIGHER-ORDER FUNCTIONS
// ==========================================

/**
 * Transforms each element in an array using a mapping function.
 * (Custom implementation of Array.map)
 * @param {Function} fn - Transformation function
 * @param {Array} arr
 * @returns {Array} New transformed array
 */
const map = (fn, arr) => arr.map(fn);

/**
 * Filters elements that satisfy a predicate function.
 * (Custom implementation of Array.filter)
 * @param {Function} predicate - Returns true/false
 * @param {Array} arr
 * @returns {Array} New filtered array
 */
const filter = (predicate, arr) => arr.filter(predicate);

/**
 * Reduces an array to a single value using an accumulator function.
 * @param {Function} fn - Reducer function (acc, current) => newAcc
 * @param {*} initial - Initial accumulator value
 * @param {Array} arr
 * @returns {*} Accumulated result
 */
const reduce = (fn, initial, arr) => arr.reduce(fn, initial);

// ==========================================
// FUNCTIONAL ARRAY UTILITIES
// ==========================================

/**
 * Returns unique elements from an array (removes duplicates).
 * Uses immutable approach with Set.
 * @param {Array} arr
 * @returns {Array} New array with unique values
 */
const unique = (arr) => [...new Set(arr)];

/**
 * Flattens a nested array by one level.
 * @param {Array} arr - Array of arrays
 * @returns {Array} Flattened array
 */
const flatten = (arr) => arr.reduce((acc, item) => 
    acc.concat(Array.isArray(item) ? item : [item]), []);

/**
 * Groups array elements by a key-generating function.
 * @param {Function} fn - Function that returns a grouping key
 * @param {Array} arr
 * @returns {Object} Grouped object
 */
const groupBy = (fn, arr) =>
    arr.reduce((groups, item) => {
        const key = fn(item);
        return {
            ...groups,
            [key]: [...(groups[key] || []), item]
        };
    }, {});

/**
 * Partitions an array into two arrays based on a predicate.
 * First array contains items that pass, second contains items that fail.
 * @param {Function} predicate
 * @param {Array} arr
 * @returns {Array[]} [passing, failing]
 */
const partition = (predicate, arr) =>
    arr.reduce(
        ([pass, fail], item) =>
            predicate(item)
                ? [[...pass, item], fail]
                : [pass, [...fail, item]],
        [[], []]
    );

/**
 * Zips two arrays together into pairs.
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {Array} Array of pairs
 */
const zip = (arr1, arr2) =>
    arr1.map((item, index) => [item, arr2[index]]);

/**
 * Takes the first n elements from an array.
 * @param {number} n
 * @param {Array} arr
 * @returns {Array} New array with first n elements
 */
const take = (n, arr) => arr.slice(0, n);

/**
 * Calculates the sum of all numbers in an array using reduce.
 * @param {Array} arr - Array of numbers
 * @returns {number} Sum
 */
const sum = (arr) => arr.reduce((acc, n) => acc + n, 0);

// ==========================================
// EXPORTS
// ==========================================

module.exports = {
    head, tail, last, init,
    map, filter, reduce,
    unique, flatten, groupBy,
    partition, zip, take, sum
};