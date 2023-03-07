const sphere3 = require('../../lib/sphere3')

module.exports = (ts) => {
  ts.test('case: basic orthogonal projection to plane', (t) => {
    const plane = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    t.deepEqual(
      sphere3.projectTo({ x: 3, y: 0, z: 2, r: 2 }, plane),
      { x: 3, y: 0, r: 2 },
      'should remove z dim'
    )

    const planeb = { a: 1, b: 0, x: 1, y: 2, z: 3 }
    t.deepEqual(
      sphere3.projectTo({ x: 3, y: 0, z: 3, r: 3 }, planeb),
      { x: 2, y: -2, r: 3 },
      'should translate'
    )

    t.end()
  })

  ts.test('case: basic perspective projection to plane', (t) => {
    let sphere, plane, camera

    sphere = { x: 3, y: 0, z: 0, r: 1 }
    plane = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    camera = { x: 1, y: 1, z: 0 }
    t.deepEqual(
      sphere3.projectTo(sphere, plane, camera),
      { x: 1, y: 1, r: 0 },
      'camera at geometry depth'
    )

    sphere = { x: 2, y: 0, z: 0, r: 2 }
    plane = { a: 1, b: 0, x: 0, y: 0, z: -2 }
    camera = { x: 0, y: 0, z: -4 }
    t.deepEqual(
      sphere3.projectTo(sphere, plane, camera),
      { x: 1, y: 0, r: 1 },
      'camera away from projection plane'
    )

    sphere = { x: 6, y: 0, z: 2, r: 3 }
    plane = { a: 1, b: 0, x: 0, y: 0, z: -2 }
    camera = { x: 0, y: 0, z: -4 }
    t.deepEqual(
      sphere3.projectTo(sphere, plane, camera),
      { x: 2, y: 0, r: 1 },
      'geometry deeper than ref plane'
    )

    t.end()
  })
}
