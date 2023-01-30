const transitFrom = require('../point2/transitFrom')

module.exports = (path, source) => {
  // @affineplane.path2.transitFrom(path, source)
  //
  // Represent a path on the reference basis.
  //
  // Parameters:
  //   path
  //     a path2, represented on the source basis.
  //   source
  //     a plane2, the source basis, represented
  //     .. on the reference basis.
  //
  // Return:
  //   a path2, represented on the reference basis.
  //
  return path.map(p => transitFrom(p, source))
}
