const getScale = require('../transform/getScale')
const getRotation = require('../transform/getRotation')

module.exports = (vanishing, tr) => {
  // A perspective projection from transformation to vector3r
  //
  // Parameters
  //   vanishing
  //     a point
  //   tr
  //     a transform
  //
  // Return
  //   a vector3r
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
