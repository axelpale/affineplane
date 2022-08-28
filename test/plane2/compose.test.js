const plane2 = require('../../lib/plane2')

module.exports = (ts) => {
  ts.test('case: basic compose', (t) => {
    const planea = { a: 1, b: 0, x: 1, y: 1 }
    const planeb = { a: 2, b: 0, x: 2, y: 2 }

    t.deepEqual(
      plane2.compose(planea, planeb),
      { a: 2, b: 0, x: 3, y: 3 },
      'plane on plane'
    )

    t.end()
  })
}
