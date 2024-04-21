/**
 * Add two numbers.
 *
 * @param {number} num1   The first number to perform the operation.
 * @param {number} num2   The second number to perform the operation.
 * @return {number}       The addition of the two assigned numbers.
 */
const add = (num1: number, num2: number): number => num1 + num2;

/**
 * Subtract two numbers.
 *
 * @param {number} num1   The first number to perform the operation.
 * @param {number} num2   The second number to perform the operation.
 * @return {number}       The subtraction of the two assigned numbers.
 */
const subtract = (num1: number, num2: number): number => num1 - num2;

/**
 * Multiply two numbers.
 *
 * @param {number} num1   The first number to perform the operation.
 * @param {number} num2   The second number to perform the operation.
 * @return {number}       The multiplication of the two assigned numbers.
 */
const multiply = (num1: number, num2: number): number => num1 * num2;

/**
 * Divide two numbers.
 *
 * @param {number} num1   The first number to perform the operation.
 * @param {number} num2   The second number to perform the operation.
 * @return {number}       The division of the two assigned numbers.
 */
const divide = (num1: number, num2: number): number => num1 / num2;


/**
 * Export all the available methods.
 */
export {
  add,
  subtract,
  multiply,
  divide,
};
