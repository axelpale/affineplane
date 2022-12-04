const plane2 = require('../../lib/plane2')

module.exports = (ts) => {
  ts.test('case: smoke almostEqual', (t) => {
    const a = { a: 1, b: 2, x: 3, y: 4 }
    const b = { a: 1, b: 2, x: 3, y: 4 }
    const c = { a: 1, b: 0, x: 0, y: 0 }

    t.true(plane2.almostEqual(a, a), 'same object')
    t.true(plane2.almostEqual(a, b), 'element-wise equal')
    t.false(plane2.almostEqual(a, c), 'values differ greatly')

    t.end()
  })
}
