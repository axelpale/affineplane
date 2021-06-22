const scaleBy = require('../transform/scaleBy')
const rotateBy = require('../transform/rotateBy')

module.exports = (vanishing, vec3r) => {
  // To transform
  //
  // Parameters:
  //   vanishing
  //     a XY point
  //   vec3r
  //     a XYZR, a perspective point.
  //     Vanishing point and { vec3r.x, vec3r.y } must have the same basis.
  //
  // Return
  //   a transform
  //

  // Begin with translation to { x, y }
  const txy = { a: 1, b: 0, x: vec3r.x, y: vec3r.y }

  // Determine perspective scale
  const scale = 1 / vec3r.z

  // Scale towards the vanishing point as given in the vector.
  // Rotate around the vanishing point as given in the vector.
  return rotateBy(scaleBy(txy, vanishing, scale), vanishing, vec3r.r)
}
