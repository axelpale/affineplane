const sphere3 = require('../../lib/sphere3')

module.exports = (ts) => {
  ts.test('case: basic polar offset', (t) => {
    t.deepEqual(
      sphere3.polarOffset({ x: 0, y: 0, z: 0, r: 1 }, 1, 0),
      { x: 1, y: 0, z: 0, r: 1 },
      'should move towards x'
    )

    t.deepEqual(
      sphere3.polarOffset({ x: 3, y: -3, z: 3, r: 1 }, 1, 2, 0),
      { x: 3, y: -3, z: 4, r: 1 },
      'should move towards z, theta does not matter'
    )

    t.end()
  })
}
