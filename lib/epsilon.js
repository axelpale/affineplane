// @affineplane.epsilon
//
// Default margin for non-strict numeric equality.
// For example `0.0000000001`.
//

// Default epsilon to use when coping with floating point arithmetics.
// JavaScript floating point numbers have 52 bits in mantissa (IEEE-754).
// That is about 16 base10 numbers. Therefore the epsilon should be
// much larger than 1 * 10^-16. Let say 1 * 10^-10 is a good one.
module.exports = 0.0000000001
