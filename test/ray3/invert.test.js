const ray3 = require('../../lib/ray3')

module.exports = (ts) => {
  ts.test('case: negate ray', (t) => {
    const r = { x: 1, y: 2, z: 3, dx: 4, dy: 5, dz: 6 }
    t.deepEqual(
      ray3.invert(r),
      { x: 1, y: 2, z: 3, dx: -4, dy: -5, dz: -6 },
      'should negate only span'
    )

    t.deepEqual(ray3.negate(r), ray3.invert(r), 'should have alias')

    t.end()
  })
}
