const point3 = require('../../lib/point3')

module.exports = (ts) => {
  ts.test('case: project by distance', (t) => {
    const origin = { x: 0, y: 0, z: 0 }
    const point = { x: 1, y: 0, z: 1 }
    const dist = Math.sqrt(2)

    t.deepEqual(
      point3.projectByDistance(point, origin, dist),
      { x: 2, y: 0, z: 2 },
      'project one unit ahead'
    )

    t.deepEqual(
      point3.projectByDistance(point, origin, -dist),
      { x: 0, y: 0, z: 0 },
      'project one unit back'
    )

    t.deepEqual(
      point3.projectByDistance(point, origin, 0),
      { x: 1, y: 0, z: 1 },
      'project zero units'
    )

    t.deepEqual(
      point3.projectByDistance(point, point, 1),
      { x: 1, y: 0, z: 1 },
      'should not project if impossible'
    )

    t.end()
  })
}
