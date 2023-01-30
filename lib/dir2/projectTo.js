// affineplane.dir2.projectTo(dir, plane)
//
// Project a 2D direction onto a 2D plane. Perspective does not
// affect the direction.
//
// Parameters:
//   dir
//     a dir2 in the reference basis.
//   plane
//     a plane3 in the reference basis.
//     .. The image plane.
//
// Return:
//   a dir2 on the image plane.
//
module.exports = require('./transitTo')
