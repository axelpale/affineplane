const plane3 = require('../../lib/plane3')

module.exports = (ts) => {
  ts.test('case: basic projectToScale', (t) => {
    const plane0 = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    const scale0 = 1
    const camera0 = { x: 1, y: 1, z: 0 }
    t.deepEqual(
      plane3.projectToScale(plane0, scale0, camera0),
      { a: 1, b: 0, x: 0, y: 0, z: 0 },
      'identity cuz camera on plane'
    )

    const plane1 = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    const scale1 = 2
    const camera1 = { x: 0, y: 0, z: -1 }
    t.deepEqual(
      plane3.projectToScale(plane1, scale1, camera1),
      { a: 2, b: 0, x: 0, y: 0, z: 1 },
      'should translate to depth'
    )

    const plane2 = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    const scale2 = 4
    const camera2 = { x: 1, y: 1, z: -1 }
    t.deepEqual(
      plane3.projectToScale(plane2, scale2, camera2),
      { a: 4, b: 0, x: -3, y: -3, z: 3 },
      'should scale and translate'
    )

    t.end()
  })
}
