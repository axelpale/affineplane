module.exports = function (s, ss) {
  // @affineplane.size2.equal(s, ss)
  //
  // Test if two sizes are strictly equal in value.
  // The size objects are allowed to have additional non-equal properties.
  //
  // Parameters:
  //   s
  //     a size2
  //   ss
  //     a size2
  //
  // Return:
  //   a boolean
  //
  return s.w === ss.w && s.h === ss.h
}
