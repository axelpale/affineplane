const point3 = require('../../lib/point3')

module.exports = (ts) => {
  ts.test('case: copy point3', (t) => {
    const p = { x: 1, y: 2, z: 5 }
    const c = point3.copy(p)

    t.deepEqual(p, c, 'same content')
    t.notEqual(p, c, 'not same object')

    t.end()
  })
}
