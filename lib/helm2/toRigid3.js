const getScale = require('./getScale')
const getRotation = require('./getRotation')

module.exports = (tr, vanishing) => {
  // affineplane.helm2.toRigid3(tr, vanishing)
  //
  // A perspective projection from transformation to rigid3
  //
  // Parameters
  //   tr
  //     a helm2
  //   vanishing
  //     a point2, the vanishing point.
  //
  // Return
  //   a rigid3
  //

  // Determine depth from scale
  const scale = getScale(tr)
  const z = 1 / scale

  // At that depth, how long is the translation { tr.x, tr.y }
  const x = scale * (tr.x - vanishing.x) + vanishing.x
  const y = scale * (tr.y - vanishing.y) + vanishing.y

  // Determine rotation
  const r = getRotation(tr)

  return {
    x: x,
    y: y,
    z: z,
    r: r
  }
}
