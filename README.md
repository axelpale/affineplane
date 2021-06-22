# affineplane

A 2D plane geometry and dynamics library for spatial 2D applications. Written in JavaScript (ECMAScript 6) with a functional, class-free style.

## Geometries

For `{ x, y }`:

- point2d (alias .point2 .point)
- vector2d (alias .vector2d .vector .vec)

For `{ x, y, z, r }`:

- point3dr (alias .point3r)
- vector3dr (alias .vec3r)

For `{ a, b, x, y }`:

- formation (alias .form .placement)
- transformation (alias .transform, .tran, .motion)
- transition
  - functions to change of basis
  HEY wait a minute. The change of basis is just a couple of methods.
  It should be just a part of transformation api.

Basis change for `{ a, b, x, y }`:

- transition

Conversion between `{ x, y, z, r }` and `{ a, b, x, y }`:

- projection


## Possible geometries

- Vector
  - An abstract `{ x, y }`
  - provides operators for Point and Translation
- Point
  - A 2D point on an affine plane
  - The affine plane has no origin. The operation of adding a point to another point does not mean anything because the result depends on the origin and the plane does not have an origin.
  - `{ x, y }`
- Translation
  - A 2D difference on an affine plane
  - Meaning a kind of translation, change, or move on the plane
  - It has origin at `{ x: 0, y: 0 }` and therefore it also has length and angle, and can be added and multiplied.
  - `{ x, y }`
- Path
  - An open sequence of points
  - `[{ x, y }, { x, y }, ...]`
- Polygon
  - A closed sequence of points
  - `[{ x, y }, { x, y }, ...]`
- Box
  - A 2D rectangle
  - `{ xmin, ymin, xmax, ymax }`
- Transform
  - An abstract `{ a, b, x, y }`
- Linear
  - A linear transformation matrix
  - More strictly: a linear non-reflective similarity transformation matrix
  - It captures scaling and rotation around origin.
  - `{ a, b }`
- Position or Placement or Plane
  - An affine transformation matrix
  - Represents a position and orientation of an object on a plane
  - A point with scale and rotation
  - `{ a, b, x, y }`
- Transit
  - An affine transformation matrix
  - Represents a change of basis
  - Use to convert geometries between coordinate systems
  - `{ a, b, x, y }`
- Affine or Transform
  - An affine transformation matrix
  - Represents a translation, rotation, and/or scaling on a plane
  - `{ a, b, x, y }`
- Scaling
  - `{ ds }`
- Rotation
  - `{ dr }`
- Point3
  - `{ x, y, z }`
- Vector3
  - `{ dx, dy, dz }`
  - `{ x, y, z, r }`
- Perspective or Projection or Vector4
  - `{ x, y, z, r }`
  - `{ a, b, x, y }`
- Origin2
  - `{ ox, oy }`

What if we redefine "point"?

- Point
  - An affine transformation matrix
  - Represents a position of an object on a plane
  - A point with scale and rotation angle
  - `{ a, b, x, y }`
  - `{ x, y, z, r }`
- Vector
  - An affine transformation matrix
  - Represents change of a position on a plane
  - A vector with scaling and rotation
  - `{ da, db, dx, dy }`
  - `{ dx, dy, dz, dr }`

What if

- Formation
- Transformation

Z defined as zoom layers

z <- z - 1 <=> scale <- scale * 2
z <- z + 1 <=> scale <- scale * (1 / 2)
z <- z + 2 <=> scale <- scale * (1 / 4)
z <- z + 3 <=> scale <- scale * (1 / 8)

=> scale = 1 / (z ** 2)

z = -1 <=> scale = 0.5
z = 0 <=> scale = 1
z = 1 <=> scale = 2
z = 2 <=> scale = 4

Z defined as viewing distance

z <- z * 0 <=> scale <- scale / 0
z <- z * 1 <=> scale <- scale / 1
z <- z * 2 <=> scale <- scale / 2
z <- z * 4 <=> scale <- scale / 4

=> scale = 1 / z

## Geometries and API

Point
- create
- copy
- distance
- difference
- equal
- translate
- transform
- mean

Vector
- add
- multiply
- transform

Path
- addPoint
- atIndex
- transform
- mean

Polygon
- addPoint
- atIndex
- transform
- mean

Rectangle or Box
- atTopLeft

Placement
- copy
- create
- between or difference
- equal
- mean (of multiple placements)
- rotate
- translate
- transform

Motion
- copy
- create
- combine, multiply

Transition
- between two placements or planes
