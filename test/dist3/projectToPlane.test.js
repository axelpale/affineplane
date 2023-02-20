const dist3 = require('../../lib/dist3')

module.exports = (ts) => {
  ts.test('case: smoke', (t) => {
    const d = 4
    const planea = { a: 2, b: 0, x: 0, y: 0, z: -2 }
    const cameraa = { x: 1, y: 1, z: -4 }
    t.deepEqual(
      dist3.projectTo(d, planea, cameraa),
      1,
      'perspective halves and target scale halves again'
    )

    t.end()
  })
}
