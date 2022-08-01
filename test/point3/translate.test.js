const point3 = require('../../lib/point3')

module.exports = (ts) => {
  ts.test('case: basic translation', (t) => {
    t.deepEqual(point3.translate(
      { x: 0, y: 1, z: 0 },
      { x: 1, y: -1, z: 1 }
    ), { x: 1, y: 0, z: 1 })

    t.end()
  })

  ts.test('case: translate with 2d vector', (t) => {
    t.deepEqual(point3.translate(
      { x: 0, y: 1, z: 2 },
      { x: 1, y: -1 }
    ), { x: 1, y: 0, z: 2 })

    t.end()
  })
}
