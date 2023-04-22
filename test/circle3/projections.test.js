const circle3 = require('../../lib/circle3')

module.exports = (ts) => {
  ts.test('case: basic orthogonal projection to plane', (t) => {
    const plane = { a: 1, b: 0, x: 1, y: 2, z: 3 }
    t.deepEqual(
      circle3.projectTo({ x: 3, y: 0, z: 3, r: 3 }, plane),
      { x: 2, y: -2, r: 3 },
      'should translate'
    )

    t.end()
  })

  ts.test('case: basic perspective projection to plane', (t) => {
    let circle, plane, camera

    circle = { x: 3, y: 0, z: 0, r: 1 }
    plane = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    camera = { x: 1, y: 1, z: 0 }
    t.deepEqual(
      circle3.projectTo(circle, plane, camera),
      { x: 1, y: 1, r: 0 },
      'camera at geometry depth'
    )

    circle = { x: 2, y: 0, z: 0, r: 2 }
    plane = { a: 1, b: 0, x: 0, y: 0, z: -2 }
    camera = { x: 0, y: 0, z: -4 }
    t.deepEqual(
      circle3.projectTo(circle, plane, camera),
      { x: 1, y: 0, r: 1 },
      'camera away from projection plane'
    )

    t.end()
  })
}
