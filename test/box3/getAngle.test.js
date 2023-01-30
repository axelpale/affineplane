const affineplane = require('../../index')
const box3 = affineplane.box3

module.exports = (ts) => {
  ts.test('case: smoke', (t) => {
    const bb = { a: 0, b: 1, x: 10, y: 20, z: 30, w: 10, h: 6, d: 3 }
    const deg90 = Math.PI / 2
    t.almostEqual(box3.getAngle(bb), deg90, 'should 90 deg')

    t.end()
  })
}
