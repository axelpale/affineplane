const plane2 = require('../../lib/plane2')

module.exports = (ts) => {
  ts.test('case: basic at', (t) => {
    let plane

    plane = { a: 1, b: 0, x: 0, y: 0 }
    t.almostEqualPoint(
      plane2.at(plane, 2, 2),
      { x: 2, y: 2 },
      'apply to identity'
    )

    plane = { a: 0, b: 2, x: 1, y: 2 }
    t.almostEqualPoint(
      plane2.at(plane, 3, 3),
      { x: -5, y: 8 },
      'should scale and rotate accordingly'
    )

    t.end()
  })
}
