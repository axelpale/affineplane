const affineplane = require('../../index')
const helm2 = affineplane.helm2
const EPSILON = affineplane.EPSILON

module.exports = (ts) => {
  ts.test('case: various matches', (t) => {
    const a = { a: 1, b: 2, x: 3, y: 4 }
    const b = { a: 1, b: 2, x: 3, y: 4 }
    const c = { a: 1, b: 0, x: 0, y: 0 }
    const d = { a: 1 - EPSILON, b: 2, x: 3, y: 4 }
    t.notEqual(a, b, 'a is not b')
    t.deepEqual(a, b, 'a is identical to b')
    t.ok(helm2.equal(a, b), 'element-wise equal')
    t.notOk(helm2.equal(a, c), 'values differ greatly')
    t.notOk(helm2.equal(a, d), 'values differ slightly')

    t.end()
  })
}
