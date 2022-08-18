const orthoPoint2 = require('../ortho3/point2')
const orthoPoint3 = require('../ortho3/point3')
const scaleBy = require('../helm3/scaleBy')

module.exports = (pers, p) => {
  // Project a point2 object.
  //
  // Parameters:
  //   pers
  //     pers3
  //   p
  //     point2
  //
  // Return
  //   point2
  //

  // Project the camera position onto target plane
  const oc = orthoPoint3(pers.tran, pers.camera)
  // Compute scaling caused by perspective.
  const f = pers.tran.z / pers.camera.z
  // Apply perpective scaling to the orthogonal projection
  const per = scaleBy(pers.tran, oc, f)
  // Project the geometry
  return orthoPoint2(per, p)
}
