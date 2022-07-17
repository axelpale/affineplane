module.exports = (v, w) => {
  // affineplane.vector3.add(v, w)
  //
  return {
    x: v.x + w.x,
    y: v.y + w.y,
    z: v.z + w.z
  }
}
