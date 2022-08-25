const plane3 = require('../../lib/plane3')

module.exports = (ts) => {
  ts.test('case: basic translations', (t) => {
    let plane, point

    plane = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    point = { x: 2, y: 2 }
    t.almostEqual(
      plane3.translateTo(plane, point),
      { a: 1, b: 0, x: 2, y: 2, z: 0 },
      'apply 2D point to identity'
    )

    plane = { a: 0, b: 2, x: 1, y: 2, z: 3 }
    point = { x: 2, y: 2, z: 2 }
    t.almostEqual(
      plane3.translateTo(plane, point),
      { a: 0, b: 2, x: 2, y: 2, z: 2 },
      'apply 3D point, preserve scale and angle'
    )

    t.end()
  })
}
