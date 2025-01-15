const fine = require('../../index') // should be exported
const sphere2 = fine.sphere2

module.exports = (ts) => {
  ts.test('case: strict equality', (t) => {
    const p = { x: 0, y: 0, r: 0 }
    const q = { x: 1, y: 2, r: 3 }
    const phat = { x: 0, y: 0, r: 0.0000000001 }

    t.true(sphere2.equal(p, p), 'should be identical')
    t.false(sphere2.equal(p, q), 'should detect difference')
    t.false(sphere2.equal(p, phat), 'should detect slight difference')
    t.true(sphere2.equal(q, { x: 1, y: 2, r: 3 }), 'should be identical in values')

    t.end()
  })
}
