const helm3 = require('../../lib/helm3')

module.exports = (ts) => {
  ts.test('case: basic', (t) => {
    const h = { a: 1, b: 2, x: 3, y: 4, z: 5 }
    const hc = helm3.copy(h)
    t.deepEqual(h, hc, 'equal value')
    t.notEqual(h, hc, 'not strictly equal')

    t.end()
  })
}
