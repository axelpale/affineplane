const affineplane = require('../../index')
const size3 = affineplane.size3

module.exports = (ts) => {
  ts.test('case: basic', (t) => {
    const s = { w: 1, h: 2, d: 3 }
    t.deepEqual(
      size3.scaleBy(s, -1),
      { w: 1, h: 2, d: 3 },
      'should stay absolute'
    )

    t.deepEqual(
      size3.scaleBy(s, 2),
      { w: 2, h: 4, d: 6 },
      'should scale uniformly'
    )

    t.end()
  })
}
