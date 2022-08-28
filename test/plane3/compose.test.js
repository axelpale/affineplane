const plane3 = require('../../lib/plane3')

module.exports = (ts) => {
  ts.test('case: basic compose', (t) => {
    const planea = { a: 1, b: 0, x: 1, y: 2, z: 3 }
    const planeb = { a: 2, b: 0, x: 2, y: 3, z: 4 }

    t.deepEqual(
      plane3.compose(planea, planeb),
      { a: 2, b: 0, x: 3, y: 5, z: 7 },
      'plane on plane'
    )

    t.end()
  })
}
