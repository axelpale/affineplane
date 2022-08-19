const point2 = require('../../lib/point2')
const line2 = require('../../lib/line2')

module.exports = (ts) => {
  ts.test('case: basic projection to line', (t) => {
    const origin = { x: 0, y: 0 }
    const span = { x: 1, y: 0 }
    const line = line2.create(origin, span)
    t.deepEqual(
      point2.projectToLine({ x: 3, y: 1 }, line),
      { x: 3, y: 0 }
    )

    t.end()
  })

  ts.test('case: ortho case', (t) => {
    const origin = { x: 2, y: 2 }
    const span = { x: -1, y: -1 }
    const line = line2.create(origin, span)
    t.deepEqual(
      point2.projectToLine({ x: 3, y: -3 }, line),
      { x: 0, y: 0 }
    )

    t.end()
  })
}
