const affineplane = require('../../index')
const path3 = affineplane.path3

module.exports = (ts) => {
  ts.test('case: basic projectTo', (t) => {
    // let path, plane

    const path = [{ x: 0, y: 0, z: 0 }, { x: 1, y: 1, z: 1 }]
    const plane = { a: 2, b: 0, x: 0, y: 2, z: -2 }

    t.deepEqual(
      path3.projectTo(path, plane),
      [{ x: 0, y: -1 }, { x: 0.5, y: -0.5 }],
      'orthogonal projection should be equivalent to 2D transitTo'
    )

    const camera = { x: 0, y: 0, z: -5 }
    t.deepEqual(
      path3.projectTo(path, plane, camera),
      [{ x: 0, y: -1 }, { x: 0.25, y: -0.75 }],
      'orthogonal projection should be equivalent to transitTo'
    )

    t.end()
  })
}
