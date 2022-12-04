const plane3 = require('../../lib/plane3')

module.exports = (ts) => {
  ts.test('case: smoke almostEqual', (t) => {
    const a = { a: 1, b: 2, x: 3, y: 4, z: 5 }
    const b = { a: 1, b: 2, x: 3, y: 4, z: 5 }
    const c = { a: 1, b: 0, x: 0, y: 0, z: 0 }

    t.true(plane3.almostEqual(a, a), 'same object')
    t.true(plane3.almostEqual(a, b), 'element-wise equal')
    t.false(plane3.almostEqual(a, c), 'values differ greatly')

    t.end()
  })
}
