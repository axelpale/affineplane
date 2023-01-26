const affineplane = require('../../index')
const box2 = affineplane.box2

module.exports = (ts) => {
  ts.test('case: basic angle', (t) => {
    const b = { a: 1, b: 0, x: 0, y: 0, w: 10, h: 6 }
    t.almostEqual(box2.getAngle(b), 0, 'should have zero rotation')

    const bb = { a: 0, b: 1, x: 200, y: 200, w: 10, h: 6 }
    t.almostEqual(box2.getAngle(bb), Math.PI / 2, 'should 90 deg')

    t.end()
  })
}
