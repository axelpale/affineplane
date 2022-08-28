const create = require('./create')

module.exports = (dir, target) => {
  // affineplane.dir2.transitTo(dir, target)
  //
  // Transit a dir2 to a target plane.
  // In other words, represent the direction
  // in the coordinate system of the target plane.
  //
  // Parameters:
  //   dir
  //     a number, a dir2 on the reference plane.
  //   target
  //     a plane2, the target plane, represented
  //     .. on the reference plane.
  //
  // Return:
  //   a number, a dir2 on the target plane.
  //

  // On scale of 2, a length of 3 units becomes 1.5 units.
  // On a map 1:100, a length of 1 metre is 1 cm on paper.
  const planedir = Math.atan2(target.b, target.a)
  return create(dir - planedir)
}
