const point2 = require('../../lib/point2')

module.exports = (ts) => {
  ts.test('case: project by distance', (t) => {
    const origin = { x: 0, y: 0 }
    const point = { x: 1, y: 0 }

    t.deepEqual(
      point2.projectByDistance(point, origin, 1),
      { x: 2, y: 0 },
      'project one unit ahead'
    )

    t.deepEqual(
      point2.projectByDistance(point, origin, -1),
      { x: 0, y: 0 },
      'project one unit back'
    )

    t.deepEqual(
      point2.projectByDistance(point, origin, 0),
      { x: 1, y: 0 },
      'project zero units'
    )

    t.deepEqual(
      point2.projectByDistance(point, point, 1),
      { x: 1, y: 0 },
      'should not project if impossible'
    )

    t.end()
  })
}
