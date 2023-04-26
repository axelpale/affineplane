const fine = require('../../index') // should be exported
const circle3 = fine.circle3

module.exports = (ts) => {
  ts.test('case: copy, create', (t) => {
    t.deepEqual(
      circle3.create(1, 2, 3, 4),
      { x: 1, y: 2, z: 3, r: 4 },
      'should create valid'
    )

    const circ = { x: 1, y: 2, z: 3, r: 4 }
    const copy = circle3.copy(circ)
    t.deepEqual(copy, circ, 'should be similar')
    t.notEqual(copy, circ, 'should not be same')

    t.end()
  })
}
