const plane3 = require('../../lib/plane3')

module.exports = (ts) => {
  ts.test('case: basic projectByDepth', (t) => {
    let plane, origin, delta

    plane = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    origin = { x: 0, y: 0, z: 0 }
    delta = 0
    t.deepEqual(
      plane3.projectByDepth(plane, origin, delta),
      { a: 1, b: 0, x: 0, y: 0, z: 0 },
      'should return unmodified plane because origin on the plane'
    )

    plane = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    origin = { x: 0, y: 0, z: -1 }
    delta = 1
    t.deepEqual(
      plane3.projectByDepth(plane, origin, delta),
      { a: 2, b: 0, x: 0, y: 0, z: 1 },
      'should dilate and translate'
    )

    t.end()
  })
}
