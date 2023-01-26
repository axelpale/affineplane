const affineplane = require('../../index')
const box2 = affineplane.box2

module.exports = (ts) => {
  ts.test('case: basic getSize', (t) => {
    const b = { a: 1, b: 0, x: 1, y: 2, w: 3, h: 4 }
    t.deepEqual(
      box2.getSize(b),
      { w: 3, h: 4 },
      'should be a size'
    )

    const bb = { a: 0, b: 1, x: 1, y: 2, w: 3, h: 4 }
    t.deepEqual(
      box2.getSize(bb),
      { w: 3, h: 4 },
      'rotation should not affect size'
    )

    t.end()
  })
}
