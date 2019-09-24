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
 * Perform a calculation for two assigned numbers.
 *
 * @param {string} type   The operation type.
 * @param {number} num1   The first number to perform the operation.
 * @param {number} num2   The second number to perform the operation.
 * @return {number}       The division of the two assigned numbers.
 */
const calculate = (type: string, num1: number, num2: number): any => {
  let calculation;
  switch (type) {
    case 'add':
      calculation = add(num1, num2);
      break;

    case 'subtract':
      calculation = subtract(num1, num2);
      break;

    case 'multiply':
      calculation = multiply(num1, num2);
      break;

    case 'divide':
      calculation = divide(num1, num2);
      break;

    default:
      calculation = `The operation type ${type} is not defined! `
        + 'The available values are: add, subtract, multiply, and divide.';
      break;
  }

  return calculation;
};


/**
 * Export all the available methods.
 */
export {
  add,
  subtract,
  multiply,
  divide,
  calculate
};
