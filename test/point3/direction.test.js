const point3 = require('../../lib/point3')

module.exports = (ts) => {
  ts.test('case: basic difference', (t) => {
    t.deepEqual(point3.direction(
      { x: 3, y: 0, z: 0 },
      { x: 3, y: 3, z: 0 }
    ), { x: 0, y: 1, z: 0 }, 'should point pos y')

    t.deepEqual(point3.direction(
      { x: 3, y: 2, z: 3 },
      { x: 3, y: 2, z: 0 }
    ), { x: 0, y: 0, z: -1 }, 'should point neg z')

    t.deepEqual(point3.direction(
      { x: 3, y: 3, z: 1 },
      { x: 3, y: 3, z: 1 }
    ), { x: 1, y: 0, z: 0 }, 'should default when no dir')

    t.end()
  })
}
