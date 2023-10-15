const sqrt = Math.sqrt
const sin = Math.sin
const cos = Math.cos

module.exports = (direction) => {
  // @affineplane.orient2.fromPolar(direction)
  // @affineplane.orient2.fromVector(vec)
  //
  // Create an orientation from angle or vector.
  /// TODO See also affineplane.orient2.toPolar
  //
  // Parameters:
  //   direction
  //     a number, the azimuth angle in radians.
  //     a dir2
  //     a vec2
  //
  // Return
  //   an orient2
  //

  if (!direction) {
    return { a: 1, b: 0 } // default
  }

  if (typeof direction === 'object') {
    const x = direction.x
    const y = direction.y
    const norm = sqrt(x * x + y * y) // sums up to vector length
    return {
      // Normalize to 1
      a: direction.x / norm,
      b: direction.y / norm
    }
  }

  if (typeof direction === 'number') {
    // Radians
    return {
      a: cos(direction),
      b: sin(direction)
    }
  }

  return { a: 1, b: 0 } // default
}
