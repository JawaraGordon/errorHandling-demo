function divideNumbers(numerator, denominator) {
  if (typeof numerator !== 'number' || typeof denominator !== 'number') {
    throw new TypeError('Numerator and denominator must be numbers');
  }
  if (denominator === 0) {
    throw new RangeError('Denominator cannot be zero');
  }
  if (!Number.isInteger(numerator) || !Number.isInteger(denominator)) {
    throw new Error('You must use a whole number');
  }
  const result = numerator / denominator;
  return result;
}

// handleError(divideNumbers(100, 25));

// try {
//   const result = divideNumbers(100, .5);
//   console.log(`Result: ${result}`);
// } catch (err) {
//   handleError(err);
// }
