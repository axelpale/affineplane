const ray3 = require('../../lib/ray3')

module.exports = (ts) => {
  ts.test('case: get ray3 origin', (t) => {
    const r = { x: 1, y: 2, z: 3, dx: 4, dy: 5, dz: 6 }
    const p = ray3.getOrigin(r)

    t.deepEqual(p, { x: 1, y: 2, z: 3 }, 'should be a point')

    t.end()
  })
}
