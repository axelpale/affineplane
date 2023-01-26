const orient2 = require('../../index').orient2

module.exports = (ts) => {
  ts.test('case: basic create', (t) => {
    t.deepEqual(
      orient2.create(1, 0),
      { a: 1, b: 0 },
      'create orient2 object'
    )

    t.end()
  })
}
