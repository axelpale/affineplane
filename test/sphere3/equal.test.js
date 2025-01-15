const fine = require('../../index') // should be exported
const sphere3 = fine.sphere3

module.exports = (ts) => {
  ts.test('case: strict equality', (t) => {
    const p = { x: 0, y: 0, z: 0, r: 0 }
    const q = { x: 1, y: 2, z: 3, r: 4 }
    const phat = { x: 0, y: 0, z: 0, r: 0.0000000001 }

    t.true(sphere3.equal(p, p), 'should be identical')
    t.false(sphere3.equal(p, q), 'should detect difference')
    t.false(sphere3.equal(p, phat), 'should detect slight difference')
    t.true(sphere3.equal(q, { x: 1, y: 2, z: 3, r: 4 }), 'should be identical in values')

    t.end()
  })
}
