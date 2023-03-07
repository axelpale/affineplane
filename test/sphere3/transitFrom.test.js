const sphere3 = require('../../lib/sphere3')

module.exports = (ts) => {
  ts.test('case: basic transit from plane', (t) => {
    let sphere, plane

    sphere = { x: 2, y: 3, z: 4, r: 4 }
    plane = { a: 1, b: 0, x: 2, y: 3, z: 4 }
    t.deepEqual(
      sphere3.transitFrom(sphere, plane),
      { x: 4, y: 6, z: 8, r: 4 },
      'translation'
    )

    sphere = { x: 2, y: 3, z: 4, r: 4 }
    plane = { a: 2, b: 0, x: 2, y: 3, z: 4 }
    t.deepEqual(
      sphere3.transitFrom(sphere, plane),
      { x: 6, y: 9, z: 12, r: 8 },
      'scaling and translation'
    )

    t.end()
  })
}
