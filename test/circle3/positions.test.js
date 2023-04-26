const circle3 = require('../../lib/circle3')

module.exports = (ts) => {
  ts.test('case: basic atCenter', (t) => {
    t.deepEqual(
      circle3.atCenter({ x: 1, y: 1, z: 1, r: 1 }),
      { x: 1, y: 1, z: 1 },
      'should drop radius'
    )

    t.end()
  })
}
