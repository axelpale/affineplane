const affineplane = require('../../index')
const path3 = affineplane.path3

module.exports = (ts) => {
  ts.test('case: basic transitTo', (t) => {
    // let path, plane

    const path = [{ x: 0, y: 2, z: 0 }, { x: 2, y: 4, z: 2 }]
    const plane = { a: 2, b: 0, x: 0, y: 2, z: 0 }

    t.deepEqual(
      path3.transitTo(path, plane),
      [{ x: 0, y: 0, z: 0 }, { x: 1, y: 1, z: 1 }],
      'scale and translation should affect'
    )

    t.end()
  })
}
