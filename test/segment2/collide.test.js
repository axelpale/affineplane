const affineplane = require('../../index')
const segment2 = affineplane.segment2

module.exports = (ts) => {
  ts.test('case: basic collide', (t) => {
    let seg0, seg1

    seg0 = [{ x: 0, y: 0 }, { x: 2, y: 0 }]
    seg1 = [{ x: 1, y: -1 }, { x: 1, y: 1 }]
    t.true(segment2.collide(seg0, seg1), 'trivial collision')

    t.true(segment2.collide(seg0, seg0), 'should collide with self')
    t.true(segment2.collide(seg1, seg1), 'should collide with vertical self')

    seg0 = [{ x: 0, y: 0 }, { x: 2, y: 0 }]
    seg1 = [{ x: 2, y: 0 }, { x: 4, y: 0 }]
    t.true(segment2.collide(seg0, seg1), 'ends meet')

    seg0 = [{ x: 0, y: 0 }, { x: 2, y: 0 }]
    seg1 = [{ x: 3, y: 0 }, { x: 5, y: 0 }]
    t.false(segment2.collide(seg0, seg1), 'ends do not meet')

    t.end()
  })
}
