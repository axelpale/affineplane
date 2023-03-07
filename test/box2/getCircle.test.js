const affineplane = require('../../index')
const box2 = affineplane.box2

module.exports = (ts) => {
  ts.test('case: basic bounding circle', (t) => {
    let box

    box = { a: 1, b: 0, x: 0, y: 0, w: 8, h: 6 }
    t.deepEqual(
      box2.getCircle(box),
      { x: 4, y: 3, r: 5 },
      'should be correct circle'
    )

    box = { a: 1, b: 0, x: 200, y: 200, w: 8, h: 6 }
    t.deepEqual(
      box2.getSphere(box),
      { x: 204, y: 203, r: 5 },
      'should allow alias'
    )

    box = { a: 1, b: 0, x: 1, y: 1, w: 0, h: 0 }
    t.deepEqual(
      box2.getCircle(box),
      { x: 1, y: 1, r: 0 },
      'should handle empty box'
    )

    t.end()
  })
}
