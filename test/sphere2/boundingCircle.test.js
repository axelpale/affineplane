const sphere2 = require('../../index').sphere2

module.exports = (ts) => {
  ts.test('case: bounding circle of circles', (t) => {
    t.deepEqual(
      sphere2.boundingCircle([
        { x: 0, y: 0, r: 1 }
      ]),
      { x: 0, y: 0, r: 1 },
      'trivial single'
    )

    t.deepEqual(
      sphere2.boundingCircle([
        { x: 0, y: 0, r: 1 },
        { x: 0, y: 2, r: 1 }
      ]),
      { x: 0, y: 1, r: 2 },
      'should match exactly'
    )

    t.end()
  })
}
