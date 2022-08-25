const plane3 = require('../../lib/plane3')

module.exports = (ts) => {
  ts.test('case: basic translations', (t) => {
    let plane, vec

    plane = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    vec = { x: 2, y: 2 }
    t.almostEqual(
      plane3.translateBy(plane, vec),
      { a: 1, b: 0, x: 2, y: 2, z: 0 },
      'apply 2D vec to identity'
    )

    plane = { a: 0, b: 2, x: 1, y: 2, z: 3 }
    vec = { x: 2, y: 2, z: 2 }
    t.almostEqual(
      plane3.translateBy(plane, vec),
      { a: 0, b: 2, x: 3, y: 4, z: 5 },
      'apply 3D vec, preserve scale and angle'
    )

    t.end()
  })
}
