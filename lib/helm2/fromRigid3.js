const scaleBy = require('./scaleBy')
const rotateBy = require('./rotateBy')

module.exports = (rigid, vanishing) => {
  // affineplane.helm2.fromRigid3(rigid, vanishing)
  //
  // Convert a 3D vector with rotation to a helm2. Essentially,
  // the z-coordinate will be projected to scaling at z=0.
  //
  // Parameters:
  //   rigid
  //     a rigid3, a 3D vector with rotation.
  //     Vanishing point and { rigid.x, rigid.y } must have the same basis.
  //   vanishing
  //     a point2
  //
  // Return
  //   a helm2
  //

  // Begin with translation to { x, y }
  const txy = { a: 1, b: 0, x: rigid.x, y: rigid.y }

  // Determine perspective scale
  const scale = 1 / rigid.z

  // Scale towards the vanishing point as given in the vector.
  // Rotate around the vanishing point as given in the vector.
  return rotateBy(scaleBy(txy, vanishing, scale), vanishing, rigid.r)
}
