module.exports = (points) => {
  // affineplane.path3.create(points)
  //
  // Create a path on plane. Deep-clones the points array.
  //
  // Parameters:
  //   points
  //     array of point3
  //
  // Return:
  //   a path3, array of points
  //
  return points.map(p => { return { x: p.x, y: p.y, z: p.z } })
}
