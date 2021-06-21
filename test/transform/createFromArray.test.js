const transform = require('../../index').transform

module.exports = (ts) => {
  ts.test('case: hapyy', (t) => {
    t.deepEqual(transform.createFromArray([1, 2, 3, 4]), {
      a: 1,
      b: 2,
      x: 3,
      y: 4
    })

    t.end()
  })
}
