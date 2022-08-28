const helm3 = require('../../index').helm3

module.exports = (ts) => {
  ts.test('case: basic rotations', (t) => {
    t.almostEqual(helm3.getRotation(helm3.ROT90), Math.PI / 2)

    t.end()
  })
}
