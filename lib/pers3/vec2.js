const orthoVec2 = require('../ortho3/vec2')
const orthoPoint3 = require('../ortho3/point3')
const scaleBy = require('')

module.exports = (pers, vec) => {
  // Project a vec2 object.
  //
  // Parameters:
  //   pers
  //     pers3
  //   vec
  //     vec2
  //
  // Return
  //   vec2
  //

  // First, project the geometry orthogonally
  const ov = orthoVec2(pers.tran, vec)
  // Second, project the camera position onto target plane
  const oc = orthoPoint3(pers.tran, pers.camera)
  // Third, compute scaling caused by perspective.
  const f = pers.tran.z / pers.camera.z
  // Fourth, apply the scaling about the vanishing point.
  scaleBy()
}
