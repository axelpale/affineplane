const affineplane = require('../../index')
const vector = affineplane.vector2

module.exports = (ts) => {
  ts.test('case: happy', (t) => {
    t.deepEqual(vector.create(1, 2), {
      x: 1,
      y: 2
    }, 'create vector object')

    t.end()
  })
}
