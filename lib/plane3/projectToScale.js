const scaleBy = require('./scaleBy')
const EPSILON = require('../epsilon')

module.exports = (plane, scale, camera) => {
  // @affineplane.plane3.projectToScale(plane, scale, camera)
  //
  // Project the plane to the given scale so that it still looks the same
  // to the camera. The plane is scaled and translated to match the appearance.
  // Can be used to perspectively convert plane scale to translation.
  //
  // Parameters:
  //   plane
  //     a plane3 in the reference space.
  //   scale
  //     a number, the desired scale, represented in the reference space.
  //   camera
  //     a point3 in the reference space.
  //
  // Return:
  //   a plane3 in the reference space
  //

  // This is basically scaleTo by using camera as the origin.
  // The scaleTo method calls scaleBy. To avoid two fn calls,
  // let us open the scaleTo.

  // Original scale
  const orig = Math.sqrt(plane.a * plane.a + plane.b * plane.b)

  // Prevent division by zero
  if (orig < EPSILON) {
    throw new Error('Cannot scale singular transformation')
  }

  // orig * m = scale <=> m = scale / orig
  return scaleBy(plane, camera, scale / orig)
}
