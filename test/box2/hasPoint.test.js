const box2 = require('../../lib/box2')

module.exports = (ts) => {
  ts.test('case: basic hasPoint', (t) => {
    const box = { a: 1, b: 0, x: 1, y: 1, w: 2, h: 2 }
    t.false(box2.hasPoint(box, { x: 0, y: 0 }), 'outside')
    t.true(box2.hasPoint(box, { x: 1, y: 1 }), 'inside at edge')
    t.true(box2.hasPoint(box, { x: 2, y: 2 }), 'inside')
    t.true(box2.hasPoint(box, { x: 3, y: 3 }), 'outside at edge')
    t.false(box2.hasPoint(box, { x: 3, y: 4 }), 'outside beyond')

    const robox = { a: 0, b: 1, x: 3, y: 1, w: 2, h: 2 }
    t.false(box2.hasPoint(robox, { x: 0, y: 0 }), 'rotated, outside')
    t.true(box2.hasPoint(robox, { x: 1, y: 1 }), 'rotated, inside at edge')
    t.true(box2.hasPoint(robox, { x: 2, y: 2 }), 'rotated, inside')
    t.true(box2.hasPoint(robox, { x: 3, y: 3 }), 'rotated, at LB corner')
    t.false(box2.hasPoint(robox, { x: 3, y: 4 }), 'rotated, outside LB')

    t.end()
  })
}
