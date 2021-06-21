const transform = require('../../index').transform

module.exports = (ts) => {
  ts.test('case: happy', (t) => {
    t.deepEqual(transform.create(1, 2, 3, 4), {
      a: 1,
      b: 2,
      x: 3,
      y: 4
    }, 'create transform object')

    t.end()
  })
}
