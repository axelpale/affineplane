module.exports = (feats) => {
  if (typeof feats !== 'object') {
    throw new Error('invalid plane feature object')
  }

  let angle, scale, x, y

  if (typeof feats.angle !== 'number') {
    angle = 0
  } else {
    angle = feats.angle
  }

  if (typeof feats.scale !== 'number') {
    scale = 1
  } else {
    scale = feats.scale
  }

  if (typeof feats.origin !== 'object') {
    x = 0
    y = 0
  } else {
    x = feats.origin.x
    y = feats.origin.y
  }

  return {
    a: scale * Math.cos(angle),
    b: scale * Math.sin(angle),
    x: x,
    y: y
  }
}
