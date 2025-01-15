const fine = require('../../index')
const circle3 = fine.circle3

module.exports = (ts) => {
  ts.test('case: strict equality', (t) => {
    const p = { x: 0, y: 0, z: 0, r: 0 }
    const q = { x: 1, y: 2, z: 3, r: 4 }
    const phat = { x: 0, y: 0, z: 0, r: 0.0000000001 }

    t.true(circle3.equal(p, p), 'should be identical')
    t.false(circle3.equal(p, q), 'should detect difference')
    t.false(circle3.equal(p, phat), 'should detect slight difference')
    t.true(circle3.equal(q, { x: 1, y: 2, z: 3, r: 4 }), 'should be identical in values')

    t.end()
  })
}
