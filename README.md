# affineplane

Affine 2D plane geometry library

## Geometries

- Point
  - A 2D point on an affine plane
  - The affine plane has no origin. The operation of adding a point to another point does not mean anything because the result depends on the origin and the plane does not have an origin.
  - `{ x, y }`
- Vector
  - A 2D difference on an affine plane
  - Meaning a kind of translation, change, or move on the plane
  - It has origin at `{ dx: 0, dy: 0 }` and therefore it also has length and angle, and can be added and multiplied.
  - `{ dx, dy }`
- Path
  - An open sequence of points
- Polygon
  - A closed sequence of points
- Box
  - A 2D rectangle
  - `{ xmin, ymin, xmax, ymax }`
- Linear
  - A linear transformation matrix
  - More strictly: a linear non-reflective similarity transformation matrix
  - It captures scaling and rotation around origin.
  - `{ a, b }`
- Position or Placement
  - An affine transformation matrix
  - Represents a position of an object on a space
  - A point with scale and rotation
  - `{ a, b, x, y }`
- Transit
  - An affine transformation matrix
  - Represents a change of basis
  - Use to convert geometries between coordinate systems
  - `{ pa, pb, px, py }`
- Affine or Transform
  - An affine transformation matrix
  - Represents a translation, rotation, and/or scaling on a plane
  - `{ da, db, dx, dy }`
- Scaling
  - `{ ds }`
- Rotation
  - `{ dr }`
- Point3
  - `{ x, y, z }`
- Vector3
  - `{ dx, dy, dz }`
  - `{ x, y, z, r }`