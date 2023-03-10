const sphere3 = require('../../lib/sphere3')

module.exports = (ts) => {
  ts.test('case: basic offset', (t) => {
    t.deepEqual(
      sphere3.offset({ x: 0, y: 0, z: 0, r: 1 }, 1, 1, 1),
      { x: 1, y: 1, z: 1, r: 1 },
      'should move by unit'
    )

    t.deepEqual(
      sphere3.offset({ x: 3, y: -3, z: 3, r: 1 }, 1, 1, 1),
      { x: 4, y: -2, z: 4, r: 1 },
      'non zero center point should move by unit'
    )

    t.end()
  })
}
