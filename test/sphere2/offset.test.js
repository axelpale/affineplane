const sphere2 = require('../../lib/sphere2')

module.exports = (ts) => {
  ts.test('case: basic offset', (t) => {
    t.deepEqual(
      sphere2.offset({ x: 0, y: 0, r: 1 }, 1, 1),
      { x: 1, y: 1, r: 1 },
      'should move by unit'
    )

    t.deepEqual(
      sphere2.offset({ x: 3, y: -3, r: 1 }, 1, 1),
      { x: 4, y: -2, r: 1 },
      'non zero center point should move by unit'
    )

    t.end()
  })
}
