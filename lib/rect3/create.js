module.exports = (basis, size) => {
  // @affineplane.rect3.create(basis, size)
  //
  // Construct a rect3 object from basis and size.
  //
  // Parameters:
  //   basis
  //     a basis3
  //   size
  //     a size2
  //
  // Return:
  //   a rect3
  //
  console.warn('affineplane.rect3 is deprecated. Use box3 instead.')
  return { basis, size }
}
