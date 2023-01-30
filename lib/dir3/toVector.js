module.exports = (dir, magn) => {
  // @affineplane.dir3.toVector(dir[, magn])
  //
  // Parameters:
  //   dir
  //     a dir3
  //   magn
  //     optional number, default to 1. The magnitude of the vector to create.
  //     Note that a negative magnitude creates a vector to opposite direction.
  //
  // Return
  //   a vec3
  //

  if (typeof magn !== 'number') {
    magn = 1
  }

  return {
    x: magn * dir.x,
    y: magn * dir.y,
    z: magn * dir.z
  }
}
