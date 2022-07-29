const affineplane = require('../../index')
const proj2 = affineplane.proj2

const PI = Math.PI

module.exports = (ts) => {
  ts.test('case: 90 deg plane', (t) => {
    // Create a projection. The target plane is rotated 90 deg CW
    const pr = affineplane.helm2.ROT90
    // The rotation must be compensated to preserve the angle.
    const deg270 = -PI / 2
    t.equal(proj2.dir2(pr, 0), deg270, 'zero angle')
    t.equal(proj2.dir2(pr, 4 * PI), deg270, 'two rounds')
    t.equal(proj2.dir2(pr, -2 * PI), deg270, 'negative round')

    t.end()
  })
}
