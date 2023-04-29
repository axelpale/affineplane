const ray3 = require('../../lib/ray3')

module.exports = (ts) => {
  ts.test('case: create ray3', (t) => {
    const origin = { x: 1, y: 2, z: 3 }
    const span = { x: 1, y: 2, z: 3 }
    const r = ray3.create(origin, span)

    t.deepEqual(r, { x: 1, y: 2, z: 3, dx: 1, dy: 2, dz: 3 }, 'same values')

    t.end()
  })
}
