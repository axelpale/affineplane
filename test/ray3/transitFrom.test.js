const ray3 = require('../../lib/ray3')

module.exports = (ts) => {
  ts.test('case: trivial', (t) => {
    const basis = { a: 1, b: 0, x: 0, y: 0, z: 0 }

    t.deepEqual(
      ray3.transitFrom(ray3.ZERO, basis),
      ray3.ZERO,
      'zero ray stays zero'
    )
    t.deepEqual(
      ray3.transitFrom({ x: 1, y: 1, z: 1, dx: 1, dy: 1, dz: 1 }, basis),
      { x: 1, y: 1, z: 1, dx: 1, dy: 1, dz: 1 },
      'ones ray'
    )

    t.end()
  })

  ts.test('case: basic', (t) => {
    let ray, basis

    ray = { x: 1, y: 1, z: 1, dx: 1, dy: 1, dz: 1 }
    basis = { a: 1, b: 0, x: 1, y: 1, z: 1 }
    t.deepEqual(
      ray3.transitFrom(ray, basis),
      { x: 2, y: 2, z: 2, dx: 1, dy: 1, dz: 1 },
      'translation affects only origin'
    )

    ray = { x: 1, y: 1, z: 1, dx: 1, dy: 1, dz: 1 }
    basis = { a: 2, b: 0, x: 1, y: 1, z: 1 }
    t.deepEqual(
      ray3.transitFrom(ray, basis),
      { x: 3, y: 3, z: 3, dx: 2, dy: 2, dz: 2 },
      'scaling affects both'
    )

    ray = { x: 1, y: 1, z: 1, dx: 1, dy: 1, dz: 1 }
    basis = { a: 0, b: 2, x: 1, y: 1, z: 1 }
    t.deepEqual(
      ray3.transitFrom(ray, basis),
      { x: -1, y: 3, z: 3, dx: -2, dy: 2, dz: 2 },
      'rotation affects both'
    )

    t.end()
  })
}
