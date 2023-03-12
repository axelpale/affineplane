const plane3 = require('../../lib/plane3')

module.exports = (ts) => {
  ts.test('case: basic at', (t) => {
    let plane

    plane = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    t.almostEqualPoint(
      plane3.at(plane, 2, 2, 2),
      { x: 2, y: 2, z: 2 },
      'apply to identity'
    )

    plane = { a: 0, b: 2, x: 1, y: 2, z: 3 }
    t.almostEqualPoint(
      plane3.at(plane, 3, 3, 3),
      { x: -5, y: 8, z: 9 },
      'should scale and rotate accordingly'
    )

    t.end()
  })
}
