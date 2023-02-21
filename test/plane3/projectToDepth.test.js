const plane3 = require('../../lib/plane3')

module.exports = (ts) => {
  ts.test('case: basic projectToDepth', (t) => {
    const plane0 = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    const depth0 = 0
    const camera0 = { x: 1, y: 1, z: 0 }
    t.deepEqual(
      plane3.projectToDepth(plane0, depth0, camera0),
      { a: 0, b: 0, x: 1, y: 1, z: 0 },
      'singular cuz camera on geometry'
    )

    const plane1 = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    const depth1 = 1
    const camera1 = { x: 0, y: 0, z: -1 }
    t.deepEqual(
      plane3.projectToDepth(plane1, depth1, camera1),
      { a: 2, b: 0, x: 0, y: 0, z: 1 },
      'scale should double'
    )

    const plane2 = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    const depth2 = 3
    const camera2 = { x: 1, y: 1, z: -1 }
    t.deepEqual(
      plane3.projectToDepth(plane2, depth2, camera2),
      { a: 4, b: 0, x: -3, y: -3, z: 3 },
      'should scale and translate'
    )

    t.end()
  })
}
