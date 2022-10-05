module.exports = (dir, magn) => {
  // affineplane.dir2.toVector(dir, magn)
  //
  // Get a vector from the direction with the given length.
  //
  // Parameters:
  //   dir
  //     a dir2
  //   magn
  //     a number, the magnitude of the vector to create.
  //
  // Return
  //   a vec2
  //
  return {
    x: dir.x * magn,
    y: dir.y * magn
  }
}
