const sphere2 = require('../../lib/sphere2')

module.exports = (ts) => {
  ts.test('case: basic polar offset', (t) => {
    t.deepEqual(
      sphere2.polarOffset({ x: 0, y: 0, r: 1 }, 1, 0),
      { x: 1, y: 0, r: 1 },
      'should move towards x'
    )

    t.deepEqual(
      sphere2.polarOffset({ x: 3, y: -3, r: 2 }, 2, Math.PI / 2),
      { x: 3, y: -1, r: 2 },
      'should move towards y, keep radius'
    )

    t.end()
  })
}
