const helm3 = require('../../lib/helm3')
const plane3 = require('../../lib/plane3')

module.exports = (ts) => {
  ts.test('case: basic orthogonal projection to plane', (t) => {
    const plane = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    t.deepEqual(
      helm3.projectToPlane({ a: 2, b: 0, x: 3, y: 0, z: 2 }, plane),
      { a: 2, b: 0, x: 3, y: 0 },
      'trivial'
    )

    const planeb = { a: 2, b: 0, x: 1, y: 2, z: 0 }
    t.deepEqual(
      helm3.projectToPlane({ a: 2, b: 0, x: 3, y: 0, z: 2 }, planeb),
      { a: 1, b: 0, x: 1, y: -1 },
      'project tr to plane orthogonally'
    )

    t.end()
  })
}
