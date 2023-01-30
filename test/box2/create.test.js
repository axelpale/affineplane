const affineplane = require('../../index')
const box2 = affineplane.box2

module.exports = (ts) => {
  ts.test('case: basic create', (t) => {
    t.deepEqual(
      box2.create({ a: 1, b: 0, x: 3, y: 4 }, { w: 1, h: -2 }),
      { a: 1, b: 0, x: 3, y: 4, w: 1, h: 2 },
      'should be a box object'
    )

    t.end()
  })
}
