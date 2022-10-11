"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 */

 // * isTrue
const isTrue = (input) => input === true;

 // * isFalse
const isFalse = (input) => input === false;

 // * not
const not = (input) => !input;

 // * addOne
const addOne = (input) => typeof(input) !== "boolean" ? Number(input) + 1 : NaN;
 // const addOne = (input) => Number(input) + 1; // contradicts with READme desired result (addOne(true) = NaN)

 // * isEven
const isEven = (input) => input !== false && Number(input) % 2 === 0;

 // * isIdentical
const isIdentical = (a, b) => a === b;

 // * isEqual
const isEqual = (a, b) => a == b;

 // * or
const or = (a, b) => a || b;

 // * and
const and = (a, b) => a && b;

 // * concat
const concat = (a, b) => [a] + [b];



