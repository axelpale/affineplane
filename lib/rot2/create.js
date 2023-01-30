const validate = require('./validate')

module.exports = (a, b) => {
  // @affineplane.rot2.create(a, b)
  //
  // Parameters:
  //   a
  //     a number
  //   b
  //     a number
  //
  // Return
  //   a rot2
  //
  const rot = { a, b }

  if (!validate(rot)) {
    throw new Error('invalid rotation parameters')
  }

  return rot
}
