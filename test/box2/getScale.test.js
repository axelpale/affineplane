const affineplane = require('../../index')
const box2 = affineplane.box2

module.exports = (ts) => {
  ts.test('case: basic getScale', (t) => {
    const b = { a: 1, b: 0, x: 0, y: 0, w: 3, h: 2 }
    t.equal(box2.getScale(b), 1, 'correct identity scale')

    const bb = { a: 0, b: 2, x: 2, y: 2, w: 10, h: 6 }
    t.equal(box2.getScale(bb), 2, 'correct rotated scale')

    t.end()
  })
}
