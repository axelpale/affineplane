module.exports = (points) => {
  // affineplane.path2.create(points)
  //
  // Create a path on plane. Deep-clones the points array.
  //
  // Parameters:
  //   points
  //     array of point2
  //
  // Return:
  //   a path2, array of points
  //
  return points.map(p => { return { x: p.x, y: p.y } })
}
