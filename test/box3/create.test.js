const affineplane = require('../../index')
const box3 = affineplane.box3

module.exports = (ts) => {
  ts.test('case: basic create', (t) => {
    t.deepEqual(
      box3.create({ a: 1, b: 0, x: 3, y: 4, z: 5 }, { w: 1, h: -2, d: 3 }),
      { a: 1, b: 0, x: 3, y: 4, z: 5, w: 1, h: 2, d: 3 },
      'should be a box object'
    )

    t.end()
  })
}
