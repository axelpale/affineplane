const ray3 = require('../../lib/ray3')

module.exports = (ts) => {
  ts.test('case: trivial trasitTo', (t) => {
    const basis = { a: 1, b: 0, x: 0, y: 0, z: 0 }

    t.deepEqual(
      ray3.transitTo(ray3.ZERO, basis),
      ray3.ZERO,
      'identity basis should not affect zero ray'
    )

    const ray = { x: 1, y: 1, z: 1, dx: 1, dy: 1, dz: 1 }
    t.deepEqual(
      ray3.transitTo(ray, basis),
      ray,
      'identity basis should not affect ray'
    )

    t.end()
  })

  ts.test('case: basic transitTo', (t) => {
    let ray, basis

    ray = { x: 1, y: 1, z: 1, dx: 1, dy: 1, dz: 1 }
    basis = { a: 1, b: 0, x: 1, y: 1, z: 1 }
    t.deepEqual(
      ray3.transitTo(ray, basis),
      { x: 0, y: 0, z: 0, dx: 1, dy: 1, dz: 1 },
      'translation does not affect ray direction'
    )

    ray = { x: 3, y: 3, z: 3, dx: 2, dy: 2, dz: 2 }
    basis = { a: 2, b: 0, x: 1, y: 1, z: 1 }
    t.deepEqual(
      ray3.transitTo(ray, basis),
      { x: 1, y: 1, z: 1, dx: 1, dy: 1, dz: 1 },
      'scaling preserves ray direction'
    )

    t.end()
  })
}
