module.exports = (s) => {
  // affineplane.size2.validate(s)
  //
  // Check if the object is a valid size2.
  // Valid size2 has properties w,h that are valid numbers.
  //
  // Parameter
  //   s
  //     an object
  //
  // Return
  //   a boolean, true if valid
  //

  // Test nullish or non-object. Type of null is object.
  if (!s || typeof s !== 'object') {
    return false
  }

  if (typeof s.w !== 'number' || Number.isNaN(s.w) || s.w < 0) {
    return false
  }
  if (typeof s.h !== 'number' || Number.isNaN(s.h) || s.h < 0) {
    return false
  }

  return true
}
