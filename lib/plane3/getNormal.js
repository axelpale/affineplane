// affineplane.plane3.getNormal(plane)
//
// Get a unit vector perpendicular to the plane.
//
// Parameters:
//   plane
//     a plane3 on the reference plane
//
// Return:
//   a vec3, the plane normal vector.
//
module.exports = function (plane) {
  // Because all planes are on xy, there is one
  // normal vector shared by all the planes.
  return { x: 0, y: 0, z: 1 }
}
