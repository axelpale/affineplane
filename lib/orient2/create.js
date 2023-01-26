const validate = require('./validate')

module.exports = (a, b) => {
  // affineplane.orient2.create(a, b)
  //
  // Parameters:
  //   a
  //     a number
  //   b
  //     a number
  //
  // Return
  //   a orient2
  //
  const ori = { a, b }

  if (!validate(ori)) {
    throw new Error('invalid rotation parameters')
  }

  return ori
}
