module.exports = (mod) => {
  // Patch the given module object with constants.

  // @affineplane.helm3.I
  // @affineplane.helm3.IDENTITY
  //
  // Identity transform, a kind of multiplication by 1.
  //
  mod.I = {
    a: 1,
    b: 0,
    x: 0,
    y: 0,
    z: 0
  }
  mod.IDENTITY = mod.I

  // @affineplane.helm3.UNIT
  //
  // A unit transform. Scales by sqrt(2), rotates by 45deg,
  // and translates by vector (1,1,1)
  //
  mod.UNIT = {
    a: 1,
    b: 1,
    x: 1,
    y: 1,
    z: 1
  }

  // @affineplane.helm3.SINGULAR
  // @affineplane.helm3.ZERO
  //
  // Singular transform, resembles multiplication by 0.
  // Note that singular transformations are note valid affine transformations
  // because singularity cannot be inverted.
  // For example with numbers, you can multiply 2 by 0 to produce 0 but
  // you cannot multiply 0 to produce the original 2.
  //
  mod.SINGULAR = {
    a: 0,
    b: 0,
    x: 0,
    y: 0,
    z: 0
  }
  mod.ZERO = mod.SINGULAR

  // @affineplane.helm3.ROT0
  // Zero angle rotation.
  mod.ROT0 = mod.IDENTITY

  // @affineplane.helm3.ROT45
  // Clockwise rotation of 45 degrees.
  mod.ROT45 = { a: 1 / Math.sqrt(2), b: 1 / Math.sqrt(2), x: 0, y: 0, z: 0 }

  // @affineplane.helm3.ROT90
  // Clockwise rotation of 90 degrees.
  mod.ROT90 = { a: 0, b: 1, x: 0, y: 0, z: 0 }

  // @affineplane.helm3.ROT180
  // Rotation of 180 degrees.
  mod.ROT180 = { a: -1, b: 0, x: 0, y: 0, z: 0 }

  // @affineplane.helm3.ROT270
  // Clockwise rotation of 270 degrees.
  mod.ROT270 = { a: 0, b: -1, x: 0, y: 0, z: 0 }

  // @affineplane.helm3.HALF
  // Scaling to half size.
  mod.HALF = { a: 0.5, b: 0, x: 0, y: 0, z: 0 }

  // @affineplane.helm3.X2
  // Scaling to double size.
  mod.X2 = { a: 2, b: 0, x: 0, y: 0, z: 0 }
}
