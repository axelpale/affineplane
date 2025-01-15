module.exports = function (s, ss) {
  // @affineplane.size3.equal(s, ss)
  //
  // Test if two sizes are strictly equal in value.
  // The size objects are allowed to have additional non-equal properties.
  //
  // Parameters:
  //   s
  //     a size3
  //   ss
  //     a size3
  //
  // Return:
  //   a boolean
  //
  return s.w === ss.w && s.h === ss.h && s.d === ss.d
}
