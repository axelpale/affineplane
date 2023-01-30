const transitFrom = require('../point3/transitFrom')

module.exports = (path, source) => {
  // @affineplane.path3.transitFrom(path, source)
  //
  // Represent a path on the reference basis.
  //
  // Parameters:
  //   path
  //     a path3, represented on the source basis.
  //   source
  //     a plane3, the source basis, represented
  //     .. on the reference basis.
  //
  // Return:
  //   a path3, represented on the reference basis.
  //
  return path.map(p => transitFrom(p, source))
}
