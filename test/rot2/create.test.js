const rot2 = require('../../index').rot2

module.exports = (ts) => {
  ts.test('case: basic create', (t) => {
    t.deepEqual(
      rot2.create(1, 0),
      {
        a: 1,
        b: 0
      },
      'create rot2 object'
    )

    t.end()
  })
}
