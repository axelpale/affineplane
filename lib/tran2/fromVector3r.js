const scaleBy = require('./scaleBy')
const rotateBy = require('./rotateBy')

module.exports = (vec3r, vanishing) => {
  // affineplane.tran2.fromVector3r(vec3r, vanishing)
  //
  // Convert a 3D vector with rotation to a tran2. Essentially,
  // the z-coordinate will be projected to scaling at z=0.
  //
  // Parameters:
  //   vec3r
  //     a vector3r, a perspective point, a 3D vector with rotation.
  //     Vanishing point and { vec3r.x, vec3r.y } must have the same basis.
  //   vanishing
  //     a point2
  //
  // Return
  //   a tran2
  //

  // Begin with translation to { x, y }
  const txy = { a: 1, b: 0, x: vec3r.x, y: vec3r.y }

  // Determine perspective scale
  const scale = 1 / vec3r.z

  // Scale towards the vanishing point as given in the vector.
  // Rotate around the vanishing point as given in the vector.
  return rotateBy(scaleBy(txy, vanishing, scale), vanishing, vec3r.r)
}
