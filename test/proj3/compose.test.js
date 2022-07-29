const affineplane = require('../../index')
const proj3 = affineplane.proj3

module.exports = (ts) => {
  ts.test('case: basic compose', (t) => {
    // Create a projection. The target plane is rotated 90 deg CW
    const pra = affineplane.helm3.from({
      scale: 1,
      angle: Math.PI,
      tx: 100,
      ty: 1000,
      tz: 10
    })
    const prb = affineplane.helm3.from({
      scale: 2,
      angle: Math.PI,
      tx: 50,
      ty: 2000,
      tz: -20
    })

    const prc = proj3.compose(pra, prb)

    t.ok(proj3.almostEqual(prc, {
      scale: 2,
      angle: 0,
      tx: 150,
      ty: 3000,
      tz: -10
    }), 'proj3 almost equal')

    t.end()
  })
}
