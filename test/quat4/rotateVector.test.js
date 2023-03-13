const affineplane = require('../../index')
const quat4 = affineplane.quat4
const PI = Math.PI

module.exports = (ts) => {
  ts.test('case: basic rotateVector', (t) => {
    let quat, vec

    quat = quat4.fromAxisAngle({ x: 1, y: 0, z: 0 }, PI / 4)
    vec = { x: 0, y: 1, z: 0 }

    t.almostEqualVector(
      quat4.rotateVector(quat, vec),
      { x: 0, y: 0, z: 1 },
      'should rotate 90 deg'
    )

    quat = quat4.fromAxisAngle({ x: 1, y: 1, z: 0 }, PI / 4)
    vec = { x: 1, y: -1, z: 0 }

    t.almostEqualVector(
      quat4.rotateVector(quat, vec),
      { x: 0, y: 0, z: -Math.sqrt(2) },
      'should rotate 90 deg awry'
    )

    quat = quat4.fromAxisAngle({ x: 1, y: 1, z: 0 }, PI / 4)
    vec = { x: 1, y: 1, z: 0 }

    t.almostEqualVector(
      quat4.rotateVector(quat, vec),
      { x: 1, y: 1, z: 0 },
      'should not rotate parallel'
    )

    t.end()
  })
}
