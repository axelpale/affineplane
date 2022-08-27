const create = require('./create')

module.exports = (dir, source) => {
  // affineplane.dir2.transitFrom(dir, source)
  //
  // Transit a direction angle from the source plane
  // to the reference plane.
  //
  // Parameters:
  //   dir
  //     a number, a dir2 angle in radians on the source plane.
  //   source
  //     a plane2, the source plane, represented
  //     on the reference plane.
  //
  // Return:
  //   a number, a dir2 angle, represented on the reference plane.
  //

  // Thought experiment: let source plane rotation be +90deg
  // with respect to the reference plane and
  // a direction on the source plane be at +90deg.
  const planedir = Math.atan2(source.b, source.a)
  return create(dir + planedir)
}
