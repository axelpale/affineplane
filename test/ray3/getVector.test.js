const ray3 = require('../../lib/ray3')

module.exports = (ts) => {
  ts.test('case: get ray3 vector', (t) => {
    const r = { x: 1, y: 2, z: 3, dx: 4, dy: 5, dz: 6 }
    const v = ray3.getVector(r)

    t.deepEqual(v, { x: 4, y: 5, z: 6 }, 'should be a vector')

    t.end()
  })
}
