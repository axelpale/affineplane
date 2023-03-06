const box3 = require('../../lib/box3')

module.exports = (ts) => {
  ts.test('case: basic hasPoint', (t) => {
    const box = { a: 1, b: 0, x: 1, y: 1, z: 1, w: 2, h: 2, d: 2 }
    t.false(box3.hasPoint(box, { x: 0, y: 0, z: 0 }), 'outside')
    t.true(box3.hasPoint(box, { x: 1, y: 1, z: 1 }), 'inside at edge')
    t.true(box3.hasPoint(box, { x: 2, y: 2, z: 2 }), 'inside')
    t.true(box3.hasPoint(box, { x: 3, y: 3, z: 3 }), 'outside at edge')
    t.false(box3.hasPoint(box, { x: 3, y: 4, z: 3 }), 'outside beyond')

    const robox = { a: 0, b: 1, x: 3, y: 1, z: 1, w: 2, h: 2, d: 2 }
    t.false(box3.hasPoint(robox, { x: 0, y: 0, z: 0 }), 'rotated, outside')
    t.true(box3.hasPoint(robox, { x: 1, y: 1, z: 1 }), 'rotated, inside at edge')
    t.true(box3.hasPoint(robox, { x: 2, y: 2, z: 2 }), 'rotated, inside')
    t.true(box3.hasPoint(robox, { x: 3, y: 3, z: 3 }), 'rotated, at LB corner')
    t.false(box3.hasPoint(robox, { x: 3, y: 4, z: 3 }), 'rotated, outside LB')

    t.end()
  })
}
