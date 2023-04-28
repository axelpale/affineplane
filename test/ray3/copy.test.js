const ray3 = require('../../lib/ray3')

module.exports = (ts) => {
  ts.test('case: copy ray3', (t) => {
    const r = { x: 1, y: 2, z: 3, dx: 1, dy: 2, dz: 3 }
    const c = ray3.copy(r)

    t.deepEqual(r, c, 'same content')
    t.notEqual(r, c, 'not same object')

    t.end()
  })
}
