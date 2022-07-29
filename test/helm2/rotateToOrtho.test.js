const helm2 = require('../../index').helm2
const rotateToOrtho = helm2.rotateToOrtho
// const getRotation = helm2.getRotation

const IDENTITY = helm2.IDENTITY
const ROT0 = helm2.ROT0
const ROT45 = helm2.ROT45
const ROT90 = helm2.ROT90
const ROT180 = helm2.ROT180
const ROT270 = helm2.ROT270

module.exports = (ts) => {
  ts.test('case: already ortho', (t) => {
    const c0 = { x: 0, y: 0 }
    t.transformEqual(rotateToOrtho(ROT180, c0), ROT180)
    t.transformEqual(rotateToOrtho(IDENTITY, c0), IDENTITY)

    const c1 = { x: 100, y: 100 }
    t.transformEqual(rotateToOrtho(ROT90, c1), ROT90)
    t.transformEqual(rotateToOrtho(ROT270, c1), ROT270)

    t.end()
  })

  ts.test('case: 45 deg to ortho', (t) => {
    const DEG40 = Math.PI / 4.5 // 40 deg = 360 deg / 9
    const DEG45 = Math.PI / 4
    const DEG50 = Math.PI / 3.6
    const ROT40 = helm2.fromPolar(1, DEG40)
    const ROT50 = helm2.fromPolar(1, DEG50)
    const ROTNEG40 = helm2.inverse(ROT40)

    const c0 = { x: 0, y: 0 }
    t.transformEqual(rotateToOrtho(ROT50, c0), ROT90, 'snap 50 to 90')
    t.transformEqual(rotateToOrtho(ROT45, c0), ROT90, 'snap 45 to 90')
    t.transformEqual(rotateToOrtho(ROT40, c0), ROT0, 'snap 40 to 0')
    t.transformEqual(rotateToOrtho(ROTNEG40, c0), ROT0, 'snap -40 to 0')

    const c1 = { x: 100, y: 100 }
    t.transformEqual(
      rotateToOrtho(ROT45, c1),
      helm2.rotateBy(ROT45, c1, DEG45),
      'snap 45 to 90 around point'
    )

    t.end()
  })

  ts.test('case: 135 deg to ortho', (t) => {
    const DEG40 = 40 * Math.PI / 180
    const DEG130 = 130 * Math.PI / 180
    const DEG135 = 135 * Math.PI / 180
    const DEG140 = 140 * Math.PI / 180
    const ROT130 = helm2.fromPolar(1, DEG130)
    const ROT135 = helm2.fromPolar(1, DEG135)
    const ROT140 = helm2.fromPolar(1, DEG140)

    const c0 = { x: 0, y: 0 }
    t.transformEqual(rotateToOrtho(ROT130, c0), ROT90, 'snap 130 to 90')
    t.transformEqual(rotateToOrtho(ROT135, c0), ROT90, 'snap 135 to 90')
    t.transformEqual(rotateToOrtho(ROT140, c0), ROT180, 'snap 140 to 180')

    const c1 = { x: -100, y: -100 }
    t.transformEqual(
      rotateToOrtho(ROT130, c1),
      helm2.rotateBy(ROT130, c1, -DEG40),
      'snap 130 to 90 around point'
    )

    t.end()
  })
}
