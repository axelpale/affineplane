const plane3 = require('../../lib/plane3')
const helm3 = require('../../lib/helm3')

const ROT0 = helm3.ROT0
const ROT45 = helm3.ROT45
const ROT90 = helm3.ROT90

module.exports = (ts) => {
  ts.test('case: 45 deg to ortho', (t) => {
    const DEG40 = Math.PI / 4.5 // 40 deg = 360 deg / 9
    const DEG45 = Math.PI / 4
    const DEG50 = Math.PI / 3.6
    const ROT40 = helm3.fromFeatures({ rotation: DEG40 })
    const ROT50 = helm3.fromFeatures({ rotation: DEG50 })
    const ROTNEG40 = helm3.invert(ROT40)

    const c0 = { x: 0, y: 0, z: 0 }
    t.almostEqual(plane3.rotateToOrtho(ROT50, c0), ROT90, 'snap 50 to 90')
    t.almostEqual(plane3.rotateToOrtho(ROT45, c0), ROT90, 'snap 45 to 90')
    t.almostEqual(plane3.rotateToOrtho(ROT40, c0), ROT0, 'snap 40 to 0')
    t.almostEqual(plane3.rotateToOrtho(ROTNEG40, c0), ROT0, 'snap -40 to 0')

    const c1 = { x: 100, y: 100, z: 100 }
    t.almostEqual(
      plane3.rotateToOrtho(ROT45, c1),
      plane3.rotateBy(ROT45, c1, DEG45),
      'snap 45 to 90 around point'
    )

    t.end()
  })
}
