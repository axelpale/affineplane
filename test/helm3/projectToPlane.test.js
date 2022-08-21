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

  ts.test('case: basic perspective projection to plane', (t) => {
    const plane = { a: 1, b: 0, x: 0, y: 0, z: 0 }
    const camera = { x: 1, y: 1, z: 0 }
    t.deepEqual(
      helm3.projectToPlane({ a: 2, b: 0, x: 3, y: 0, z: 0 }, plane, camera),
      { a: 0, b: 0, x: 1, y: 1 },
      'singular cuz camera on geometry'
    )

    const planeb = { a: 1, b: 0, x: 0, y: 0, z: -2 }
    const camerab = { x: 0, y: 0, z: -4 }
    t.deepEqual(
      helm3.projectToPlane({ a: 2, b: 0, x: 2, y: 0, z: 0 }, planeb, camerab),
      { a: 1, b: 0, x: 1, y: 0 },
      'effect to half due to perspect'
    )

    const planec = { a: 3, b: 0, x: 0, y: 0, z: -2 }
    const camerac = { x: 0, y: 0, z: -4 }
    t.deepEqual(
      helm3.projectToPlane({ a: 6, b: 0, x: 6, y: 0, z: 4 }, planec, camerac),
      { a: 0.5, b: 0, x: 0.5, y: 0 },
      'scaled projection plane'
    )

    t.end()
  })

}
