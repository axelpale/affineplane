// Convert coordinate representation of objects
// between planes that have different basis.
//
// A transition is a similarity transformation matrix
// that maps a vector or a matrix to another coordinate system.
//
// In the context of a hierarchy of planes,
// - let Fa be a formation/position of plane Pa on the reference/root
//   plane Pr.
// - let Tar be a transition from the plane Pa to the plane Pr.
// - let Tra be a transition from the plane Pr to the plane Pa.
// Now the following hold:
// - Tar = Fa
// - Tra = inverse(Fa)
//
