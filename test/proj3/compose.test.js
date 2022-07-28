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
      scale: 1,
      angle: Math.PI,
      tx: 100,
      ty: 1000,
      tz: 10
    })


    // // The rotation must be compensated to preserve the angle.
    // const deg270 = -PI / 2
    // t.equal(proj2.dir2(pr, 0), deg270, 'zero angle')
    // t.equal(proj2.dir2(pr, 4 * PI), deg270, 'two rounds')
    // t.equal(proj2.dir2(pr, -2 * PI), deg270, 'negative round')
    //
    // t.end()
  })
}
