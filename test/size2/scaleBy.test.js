const affineplane = require('../../index')
const size2 = affineplane.size2

module.exports = (ts) => {
  ts.test('case: basic', (t) => {
    const s = { w: 1, h: 2 }
    t.deepEqual(
      size2.scaleBy(s, -1),
      { w: 1, h: 2 },
      'should stay absolute'
    )

    t.deepEqual(
      size2.scaleBy(s, 2),
      { w: 2, h: 4 },
      'should scale uniformly'
    )

    t.end()
  })
}
