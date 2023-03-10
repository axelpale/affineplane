const affineplane = require('../../index')
const segment2 = affineplane.segment2

module.exports = (ts) => {
  ts.test('case: basic create', (t) => {
    t.deepEqual(
      segment2.create({ x: 0, y: 0 }, { x: 1, y: 1 }),
      [{ x: 0, y: 0 }, { x: 1, y: 1 }],
      'should form array'
    )

    t.end()
  })
}
