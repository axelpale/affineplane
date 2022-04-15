exports.create = (points) => {
  // Create a polygon on plane. Deep-clones the points array.
  //
  // Parameters:
  //   points
  //     array of point2
  //
  // Return:
  //   a poly2, array of points
  //
  return points.map(p => { x: p.x, y: p.y })
}
