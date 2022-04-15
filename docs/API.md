## Affineplane API Documentation

Types and functions for affine 2D geometry.

- [affineplane.dist2](#affineplanedist2)
- [affineplane.epsilon](#affineplaneepsilon)
- [affineplane.linear2](#affineplanelinear2)
- [affineplane.point2](#affineplanepoint2)
- [affineplane.point3](#affineplanepoint3)
- [affineplane.point3r](#affineplanepoint3r)
- [affineplane.proj2](#affineplaneproj2)
- [affineplane.proj3](#affineplaneproj3)
- [affineplane.rect2](#affineplanerect2)
- [affineplane.size2](#affineplanesize2)
- [affineplane.tran2](#affineplanetran2)
- [affineplane.vector2](#affineplanevector2)
- [affineplane.vector3](#affineplanevector3)
- [affineplane.vector3r](#affineplanevector3r)
- [affineplane.version](#affineplaneversion)

## affineplane.dist2

The distance measure is a directionless, always positive measure.
If projected between planes, only a change in the coordinate scale
affects the distance.

- [affineplane.dist2.create](#affineplanedist2create)
- [affineplane.dist2.changeBasis](#affineplanedist2changeBasis)
- [affineplane.dist2.rebase](#affineplanedist2rebase)

<a name="affineplanedist2create"></a>
### affineplane.dist2.create(d)

Create a measure. Basically it is just the absolute value of the number.

<p style="display: inline">Parameters:</p>

- `d`
  - a number

<p style="display: inline">Return:</p>

- a number, always zero or positive.

<a name="affineplanedist2changeBasis"></a>
### affineplane.dist2.changeBasis(d, sourceBasis, targetBasis)

Convert a distance between bases.

<p style="display: inline">Parameters:</p>

- `d`
  - a number, a measure on the source basis.
- `sourceBasis`
  - a [proj2](#affineplaneproj2), a transition from the source basis to
    the reference basis.
- `targetBasis`
  - a [proj2](#affineplaneproj2), a transition from the target basis to
    the reference basis.

<p style="display: inline">Return:</p>

- a number, the scalar on the target basis.

### affineplane.dist2.rebase

Alias of `affineplane.dist2.changeBasis`.

## affineplane.epsilon

Default margin for non-strict numeric equality.



## affineplane.linear2

Two-dimensional linear similarity transformation. In other words,
it describes a rotation and uniform scaling around (0,0).

- [affineplane.linear2.create](#affineplanelinear2create)

<a name="affineplanelinear2create"></a>
### affineplane.linear2.create(a, b)

Create a two-dimensional linear non-reflective singularity transform
`{ a, b }`

<p style="display: inline">Parameters:</p>

- `a`
  - a number
- `b`
  - a number

<p style="display: inline">Return:</p>

- a [linear2](#affineplanelinear2)

## affineplane.point2

A two-dimensional point. Due to affinity, two points cannot be added
together, although the distance between and their mean can be computed.
A point is a position in affine space.
An affine space does not have origin; `{ x:0, y:0 }` is not an origin.

- [affineplane.point2.average](#affineplanepoint2average)
- [affineplane.point2.mean](#affineplanepoint2mean)
- [affineplane.point2.changeBasis](#affineplanepoint2changeBasis)
- [affineplane.point2.copy](#affineplanepoint2copy)
- [affineplane.point2.create](#affineplanepoint2create)
- [affineplane.point2.delta](#affineplanepoint2delta)
- [affineplane.point2.difference](#affineplanepoint2difference)
- [affineplane.point2.distance](#affineplanepoint2distance)
- [affineplane.point2.equal](#affineplanepoint2equal)
- [affineplane.point2.fromArray](#affineplanepoint2fromArray)
- [affineplane.point2.offset](#affineplanepoint2offset)
- [affineplane.point2.polarOffset](#affineplanepoint2polarOffset)
- [affineplane.point2.rotateBy](#affineplanepoint2rotateBy)
- [affineplane.point2.toArray](#affineplanepoint2toArray)
- [affineplane.point2.transform](#affineplanepoint2transform)
- [affineplane.point2.translate](#affineplanepoint2translate)
- [affineplane.point2.move](#affineplanepoint2move)

<a name="affineplanepoint2average"></a>
### affineplane.point2.average(ps)

Average of points.

<p style="display: inline">Parameters:</p>

- `ps`
  - array of [point2](#affineplanepoint2)

<p style="display: inline">Return:</p>

- a [point2](#affineplanepoint2)

### affineplane.point2.mean

Alias of `affineplane.point2.average`.

<a name="affineplanepoint2changeBasis"></a>
### affineplane.point2.changeBasis(p, sourceBasis, targetBasis)

Convert a point between bases.

<p style="display: inline">Parameters:</p>

- `p`
  - a [point2](#affineplanepoint2), a point on the source basis.
- `sourceBasis`
  - a [proj2](#affineplaneproj2), a transition from the source basis to
    the reference basis.
- `targetBasis`
  - a [proj2](#affineplaneproj2), a transition from the target basis to
    the reference basis.

<p style="display: inline">Return:</p>

- a [point2](#affineplanepoint2), the same point but represented on the targer basis.

<a name="affineplanepoint2copy"></a>
### affineplane.point2.copy(p)

Copy point object.

<p style="display: inline">Parameters:</p>

- `p`
  - a [point2](#affineplanepoint2)

<p style="display: inline">Return:</p>

- a [point2](#affineplanepoint2)

<a name="affineplanepoint2create"></a>
### affineplane.point2.create(x, y)

Create a [point2](#affineplanepoint2) object: `{ x, y }`

<p style="display: inline">Parameters:</p>

- `x`
  - a number. The x coordinate.
- `y`
  - a number. The y coordinate.

<p style="display: inline">Return:</p>

- a [point2](#affineplanepoint2)

<a name="affineplanepoint2delta"></a>
### affineplane.point2.delta(p, q)

A vector from point p to point q

<p style="display: inline">Parameters:</p>

- `p`
  - a [point2](#affineplanepoint2)
- `q`
  - a [point2](#affineplanepoint2)

<p style="display: inline">Return:</p>

- a [vector2](#affineplanevector2)

### affineplane.point2.difference

Alias of `affineplane.point2.delta`.

<a name="affineplanepoint2distance"></a>
### affineplane.point2.distance(p, q)

Distance between two points.

<p style="display: inline">Parameters:</p>

- `p`
  - a [point2](#affineplanepoint2)
- `q`
  - a [point2](#affineplanepoint2)

<p style="display: inline">Return:</p>

- a number, a distance from p to q (= distance from q to p)

<a name="affineplanepoint2equal"></a>
### affineplane.point2.equal(p, q)

Test if points p, q are equal.

<p style="display: inline">Parameters:</p>

- `p`
  - a [point2](#affineplanepoint2)
- `q`
  - a [point2](#affineplanepoint2)

<p style="display: inline">Return:</p>

- a boolean

<a name="affineplanepoint2fromArray"></a>
### affineplane.point2.fromArray(arrp)

Create `{ x, y }` point from array `[x, y]`

<p style="display: inline">Return:</p>

- a [point2](#affineplanepoint2)

<a name="affineplanepoint2offset"></a>
### affineplane.point2.offset(p, dx, dy)

Offset a point by scalars dx dy.

<p style="display: inline">Parameters:</p>

- `p`
  - a [point2](#affineplanepoint2)
- `dx`
  - a number, a horizontal offset
- `dy`
  - a number, a vertical offset

<p style="display: inline">Return:</p>

- a [point2](#affineplanepoint2), translated by the vector `{ x: dx, y: dy }`

<a name="affineplanepoint2polarOffset"></a>
### affineplane.point2.polarOffset(p, distance, angle)

Create a point away from p at the given distance and angle.

<p style="display: inline">Parameters:</p>

- `p`
  - a [point2](#affineplanepoint2)
- `distance`
  - a number
- `angle`
  - a number, angle in radians

<p style="display: inline">Return:</p>

- a [point2](#affineplanepoint2)

<a name="affineplanepoint2rotateBy"></a>
### affineplane.point2.rotateBy(p, origin, radians)

Rotate point about the given center.

<p style="display: inline">Parameters:</p>

- `p`
  - a [point2](#affineplanepoint2)
- `origin`
  - a [point2](#affineplanepoint2), a point around to rotate
- `radians`
  - a number, angle in radians

<p style="display: inline">Return:</p>

- a [point2](#affineplanepoint2)

<a name="affineplanepoint2toArray"></a>
### affineplane.point2.toArray(p)

Get the [point2](#affineplanepoint2) object as an array.

<p style="display: inline">Parameters:</p>

- `p`
  - a [point2](#affineplanepoint2)

<p style="display: inline">Return:</p>

- an array `[x, y]`

<a name="affineplanepoint2transform"></a>
### affineplane.point2.transform(p, tr)

Transform a point.

<p style="display: inline">Parameters:</p>

- `p`
  - a [point2](#affineplanepoint2), `{ x, y }`
- `tr`
  - a [tran2](#affineplanetran2), a transform

<p style="display: inline">Return:</p>

- a [point2](#affineplanepoint2), the transformed point

<a name="affineplanepoint2translate"></a>
### affineplane.point2.translate(p, vec)

Translate the point by the given vector.

<p style="display: inline">Parameters:</p>

- `p`
  - a [point2](#affineplanepoint2)
- `vec`
  - a [vector2](#affineplanevector2)

<p style="display: inline">Return:</p>

- a [point2](#affineplanepoint2)

### affineplane.point2.move

Alias of `affineplane.point2.translate`.

## affineplane.point3

Three-dimensional point.

- [affineplane.point3.create](#affineplanepoint3create)

<a name="affineplanepoint3create"></a>
### affineplane.point3.create(x, y, z)

Create a three-dimensional point `{x, y, z}`

<p style="display: inline">Return:</p>

- a point3

## affineplane.point3r

Three-dimensional point with rotation around z-axis.
A 3D point with orientation around z-axis
TODO ? exports.toPlacement = require('../perspective/toTransform')

- [affineplane.point3r.copy](#affineplanepoint3rcopy)
- [affineplane.point3r.create](#affineplanepoint3rcreate)
- [affineplane.point3r.difference](#affineplanepoint3rdifference)

<a name="affineplanepoint3rcopy"></a>
### affineplane.point3r.copy(v)

Copy the vector.

<a name="affineplanepoint3rcreate"></a>
### affineplane.point3r.create(x, y, z, r)

Create a vector3r object.

<a name="affineplanepoint3rdifference"></a>
### affineplane.point3r.difference(v, w)

A vector3r VW from point3r V to point3r W

<p style="display: inline">Parameters:</p>

- `v`
  - a vector3r from O to point3r V
- `w`
  - a vector3r from O to pointer W

<p style="display: inline">Return:</p>

- a vector3r

## affineplane.proj2

Projections between two-dimensional planes for various geometries.
Projections are maps from plane A to plane B.
A projection can be used as a function that converts
coordinates of geometric structures from plane to plane.
The structure stays completely intact: isomorphism.
Only the representation changes.
The structures are in affine space: there is no origin or 'global' plane.

The projection defines the location of plane A on plane B.
The projection defines the orientation of plane A on plane B.
A projection maps the position (0,0) on plane A to the same
position on plane B, represented in the basis of B.

If plane A is a child element and plane B the parent, then
the projection from A to B is equivalent to the location of A on B.

- [affineplane.proj2.I](#affineplaneproj2I)
- [affineplane.proj2.IDENTITY](#affineplaneproj2IDENTITY)
- [affineplane.proj2.copy](#affineplaneproj2copy)
- [affineplane.proj2.create](#affineplaneproj2create)
- [affineplane.proj2.compose](#affineplaneproj2compose)
- [affineplane.proj2.combine](#affineplaneproj2combine)
- [affineplane.proj2.inverse](#affineplaneproj2inverse)
- [affineplane.proj2.invert](#affineplaneproj2invert)
- [affineplane.proj2.between](#affineplaneproj2between)
- [affineplane.proj2.delta](#affineplaneproj2delta)
- [affineplane.proj2.dist2](#affineplaneproj2dist2)
- [affineplane.proj2.point2](#affineplaneproj2point2)
- [affineplane.proj2.vector2](#affineplaneproj2vector2)
- [affineplane.proj2.linear2](#affineplaneproj2linear2)
- [affineplane.proj2.tran2](#affineplaneproj2tran2)

### affineplane.proj2.I

Projection from a plane to itself.

### affineplane.proj2.IDENTITY

Alias of `affineplane.proj2.I`.

<a name="affineplaneproj2copy"></a>
### affineplane.proj2.copy(pr)

<p style="display: inline">Parameters:</p>

- `pr`
  - a [proj2](#affineplaneproj2), a projection

<p style="display: inline">Return:</p>

- a [proj2](#affineplaneproj2), a projection

<a name="affineplaneproj2create"></a>
### affineplane.proj2.create(a, b, x, y)

Create a projection between two-dimensional planes: source and target.

<p style="display: inline">Parameters:</p>

- `a`
  - a number. The diagonal of linear transformation.
- `b`
  - a number. The upper and lower triangle of lin. transf.
- `x`
  - a number. Position of the source's (0,0) on the target.
- `y`
  - a number. Position of the sources's (0,0) on the target.

<p style="display: inline">Return:</p>

- a [proj2](#affineplaneproj2), a projection object

<a name="affineplaneproj2compose"></a>
### affineplane.proj2.compose(p, q)

Combine two projections.

<p style="display: inline">Parameters:</p>

- `p`
  - a [proj2](#affineplaneproj2), projection to be applied last
- `q`
  - a [proj2](#affineplaneproj2), projection to be applied first

<p style="display: inline">Return:</p>

- a [proj2](#affineplaneproj2)

### affineplane.proj2.combine

Alias of `affineplane.proj2.compose`.

<a name="affineplaneproj2inverse"></a>
### affineplane.proj2.inverse(pr)

Invert the projection. A projection from plane P to plane Q
becomes a projection from plane Q to plane P.

<p style="display: inline">Parameters:</p>

- `pr`
  - a [proj2](#affineplaneproj2)

<p style="display: inline">Return:</p>

- a [proj2](#affineplaneproj2), inversed projection

### affineplane.proj2.invert

Alias of `affineplane.proj2.inverse`.

<a name="affineplaneproj2between"></a>
### affineplane.proj2.between(sourceProj, targetProj)

Finds a projection from a source plane A to a target plane B
from their projections to a intermediate root plane R.
The result is a combination of the inverse of the target projection
and the source projection.

<p style="display: inline">Parameters:</p>

- `sourceProj`
  - a [proj2](#affineplaneproj2), a projection from the source plane A to a root plane R
- `targetProj`
  - a [proj2](#affineplaneproj2), a projection from the target plane B to a root plane R

<p style="display: inline">Return:</p>

- a [proj2](#affineplaneproj2)

### affineplane.proj2.delta

Alias of `affineplane.proj2.between`.

<a name="affineplaneproj2dist2"></a>
### affineplane.proj2.dist2(pr, d)

Project a one-dimensional distance.

<p style="display: inline">Parameters:</p>

- `pr`
  - a [proj2](#affineplaneproj2), projection between planes
- `d`
  - a number, a distance in two-dimensions

<p style="display: inline">Return:</p>

- a number, the same distance on the target plane.

<a name="affineplaneproj2point2"></a>
### affineplane.proj2.point2(pr, p2)

Project [point2](#affineplanepoint2) from plane to another.
Unlike [vector2](#affineplanevector2), [point2](#affineplanepoint2) is affected by translation.

<p style="display: inline">Parameters:</p>

- `pr`
  - a [proj2](#affineplaneproj2)
- `p`
  - a [point2](#affineplanepoint2)

<p style="display: inline">Return:</p>

- a [point2](#affineplanepoint2)

<a name="affineplaneproj2vector2"></a>
### affineplane.proj2.vector2(pr, v2)

Project [vector2](#affineplanevector2) from plane to another.
Translations do not affect vectors,
only scaling and rotation do.

<p style="display: inline">Parameters:</p>

- `pr`
  - a [proj2](#affineplaneproj2), projection between planes
- `v2`
  - a [vector2](#affineplanevector2), a translation on a plane,
    represented on the source plane.

<p style="display: inline">Return:</p>

- a [vector2](#affineplanevector2), the same vector represented on the target plane,

<a name="affineplaneproj2linear2"></a>
### affineplane.proj2.linear2(pr, lin2)

Project a linear transformation from plane to another.
Use to represent the linear transformation on another plane.

<p style="display: inline">Parameters:</p>

- `pr`
  - a [proj2](#affineplaneproj2), projection between planes
- `lin2`
  - a [linear2](#affineplanelinear2), linear transformation, represented on the source plane.

<p style="display: inline">Return:</p>

- a [linear2](#affineplanelinear2), the same transformation represented on the target plane

<a name="affineplaneproj2tran2"></a>
### affineplane.proj2.tran2(pr, tr)

Transforms are quite similar to projections but they
happen on the plane, and thus are automorphisms.

<p style="display: inline">Parameters:</p>

- `pr`
  - a [proj2](#affineplaneproj2), projection to be applied
- `tr`
  - a [tran2](#affineplanetran2), an affine similarity transformation

<p style="display: inline">Return:</p>

- a [tran2](#affineplanetran2), the same transformation on the target plane.

## affineplane.proj3

Perspective projection between parallel two-dimensional planes.
Orthogonal perspective projection between parallel planes.

- [affineplane.proj3.create](#affineplaneproj3create)

<a name="affineplaneproj3create"></a>
### affineplane.proj3.create(a, b, x, y, z)

## affineplane.rect2

Rectangle on a two-dimensional plane.

- [affineplane.rect2.at](#affineplanerect2at)
- [affineplane.rect2.atBottomLeft](#affineplanerect2atBottomLeft)
- [affineplane.rect2.atBottomMid](#affineplanerect2atBottomMid)
- [affineplane.rect2.atBottomRight](#affineplanerect2atBottomRight)
- [affineplane.rect2.atMidLeft](#affineplanerect2atMidLeft)
- [affineplane.rect2.atMid](#affineplanerect2atMid)
- [affineplane.rect2.atMidRight](#affineplanerect2atMidRight)
- [affineplane.rect2.atNorm](#affineplanerect2atNorm)
- [affineplane.rect2.atTopLeft](#affineplanerect2atTopLeft)
- [affineplane.rect2.atTopMid](#affineplanerect2atTopMid)
- [affineplane.rect2.atTopRight](#affineplanerect2atTopRight)
- [affineplane.rect2.changeBasis](#affineplanerect2changeBasis)
- [affineplane.rect2.create](#affineplanerect2create)

<a name="affineplanerect2at"></a>
### affineplane.rect2.at(rect, rx, ry)

Take a point on the rect, represented on the rects outer basis.

<p style="display: inline">Parameters:</p>

- `rect`
  - a rect2
- `rx`
  - horizontal distance from the top-left corner of the rectangle
  - represented on the rects inner basis
- `ry`
  - vertical distance from the top-left corner of the rectangle
  - represented on the rects inner basis

<p style="display: inline">Return:</p>

- a [point2](#affineplanepoint2) on the outer basis

<a name="affineplanerect2atBottomLeft"></a>
### affineplane.rect2.atBottomLeft(rect)

<a name="affineplanerect2atBottomMid"></a>
### affineplane.rect2.atBottomMid(rect)

<a name="affineplanerect2atBottomRight"></a>
### affineplane.rect2.atBottomRight(rect)

<a name="affineplanerect2atMidLeft"></a>
### affineplane.rect2.atMidLeft(rect)

<a name="affineplanerect2atMid"></a>
### affineplane.rect2.atMid(rect)

<a name="affineplanerect2atMidRight"></a>
### affineplane.rect2.atMidRight(rect)

<a name="affineplanerect2atNorm"></a>
### affineplane.rect2.atNorm(rect, nw, nh)

Take a point on the rect.

<p style="display: inline">Parameters:</p>

- `rect`
  - a rectangle
- `nw`
  - normalized width 0..1
- `nh`
  - normalized height 0..1

<p style="display: inline">Return:</p>

- a point on the rect's outer basis

<a name="affineplanerect2atTopLeft"></a>
### affineplane.rect2.atTopLeft(rect)

<a name="affineplanerect2atTopMid"></a>
### affineplane.rect2.atTopMid(rect)

<a name="affineplanerect2atTopRight"></a>
### affineplane.rect2.atTopRight(rect)

<a name="affineplanerect2changeBasis"></a>
### affineplane.rect2.changeBasis(rect, sourceBasis, targetBasis)

Convert a rectangle between bases.

<p style="display: inline">Parameters:</p>

- `rect`
  - a rectangle on the source basis.
- `sourceBasis`
  - a ABXY, a transition from the source basis to
  - the reference basis.
- `targetBasis`
  - a ABXY, a transition from the target basis to
  - the reference basis.

<p style="display: inline">Return:</p>

- the rectangle on the targer basis.

<a name="affineplanerect2create"></a>
### affineplane.rect2.create(a, b, x, y, w, h)

<p style="display: inline">Parameters:</p>

- `a`
- `b`
- `x`
- `y`
- `w`
  - `width`
- `h`
  - `height`

## affineplane.size2

Rectangular size, consisting of width and height.

- [affineplane.size2.area](#affineplanesize2area)
- [affineplane.size2.atNorm](#affineplanesize2atNorm)
- [affineplane.size2.create](#affineplanesize2create)
- [affineplane.size2.scaleBy](#affineplanesize2scaleBy)

<a name="affineplanesize2area"></a>
### affineplane.size2.area(sz)

Area. If your w and h are in px, this gives you
the total number of pixels.

<p style="display: inline">Parameters:</p>

- `sz`
  - a [size2](#affineplanesize2)

<p style="display: inline">Return:</p>

- a number

<a name="affineplanesize2atNorm"></a>
### affineplane.size2.atNorm(sz, nw, nh)

Find a point on the area.

<p style="display: inline">Parameters:</p>

- `sz`
  - a [size2](#affineplanesize2)
- `nw`
  - a normalized width in 0..1
- `nh`
  - a normalized height

<p style="display: inline">Return:</p>

- a [point2](#affineplanepoint2)

<a name="affineplanesize2create"></a>
### affineplane.size2.create(width, height)

Create a [size2](#affineplanesize2) object.

<p style="display: inline">Parameters:</p>

- `width`
  - a number
- `height`
  - a number

<p style="display: inline">Return:</p>

- a [size2](#affineplanesize2)

<a name="affineplanesize2scaleBy"></a>
### affineplane.size2.scaleBy(sz, multiplier)

Ratio-preserving scale. Multiplies all dimensions.

<p style="display: inline">Parameters:</p>

- `sz`
  - a [size2](#affineplanesize2)
- `multiplier`
  - a number

<p style="display: inline">Return:</p>

- a [size2](#affineplanesize2)

## affineplane.tran2

Two-dimensional non-reflective similarity transformation.
Provides functions for 2D transformation matrices, and to be exact,
affine non-reflective similarity transformation matrices.

Clockwise rotation of 45 degrees.

- [affineplane.tran2.I](#affineplanetran2I)
- [affineplane.tran2.IDENTITY](#affineplanetran2IDENTITY)
- [affineplane.tran2.ROT45](#affineplanetran2ROT45)
- [affineplane.tran2.ROT90](#affineplanetran2ROT90)
- [affineplane.tran2.ROT180](#affineplanetran2ROT180)
- [affineplane.tran2.ROT270](#affineplanetran2ROT270)
- [affineplane.tran2.HALF](#affineplanetran2HALF)
- [affineplane.tran2.X2](#affineplanetran2X2)
- [affineplane.tran2.almostEqual](#affineplanetran2almostEqual)
- [affineplane.tran2.almostEquals](#affineplanetran2almostEquals)
- [affineplane.tran2.changeBasis](#affineplanetran2changeBasis)
- [affineplane.tran2.compose](#affineplanetran2compose)
- [affineplane.tran2.copy](#affineplanetran2copy)
- [affineplane.tran2.create](#affineplanetran2create)
- [affineplane.tran2.solveLeft](#affineplanetran2solveLeft)
- [affineplane.tran2.solveRight](#affineplanetran2solveRight)
- [affineplane.tran2.equal](#affineplanetran2equal)
- [affineplane.tran2.equals](#affineplanetran2equals)
- [affineplane.tran2.fromArray](#affineplanetran2fromArray)
- [affineplane.tran2.fromPolar](#affineplanetran2fromPolar)
- [affineplane.tran2.fromVector3r](#affineplanetran2fromVector3r)
- [affineplane.tran2.getRotation](#affineplanetran2getRotation)
- [affineplane.tran2.getScale](#affineplanetran2getScale)
- [affineplane.tran2.getTranslation](#affineplanetran2getTranslation)
- [affineplane.tran2.multiply](#affineplanetran2multiply)
- [affineplane.tran2.inverse](#affineplanetran2inverse)
- [affineplane.tran2.scaleBy](#affineplanetran2scaleBy)
- [affineplane.tran2.scaleTo](#affineplanetran2scaleTo)
- [affineplane.tran2.rebase](#affineplanetran2rebase)
- [affineplane.tran2.rotateBy](#affineplanetran2rotateBy)
- [affineplane.tran2.rotateTo](#affineplanetran2rotateTo)
- [affineplane.tran2.toArray](#affineplanetran2toArray)
- [affineplane.tran2.toMatrix](#affineplanetran2toMatrix)
- [affineplane.tran2.toString](#affineplanetran2toString)
- [affineplane.tran2.toVector3r](#affineplanetran2toVector3r)
- [affineplane.tran2.transform](#affineplanetran2transform)
- [affineplane.tran2.transit](#affineplanetran2transit)
- [affineplane.tran2.translateBy](#affineplanetran2translateBy)
- [affineplane.tran2.translateTo](#affineplanetran2translateTo)
- [affineplane.tran2.validate](#affineplanetran2validate)

### affineplane.tran2.I

Identity transform, a kind of multiplication by 1.

### affineplane.tran2.IDENTITY

Alias of `affineplane.tran2.I`.

### affineplane.tran2.ROT45


### affineplane.tran2.ROT90

Clockwise rotation of 90 degrees.

### affineplane.tran2.ROT180

Rotation of 180 degrees.

### affineplane.tran2.ROT270

Clockwise rotation of 270 degrees.

### affineplane.tran2.HALF

Scaling to half size.

### affineplane.tran2.X2

Scaling to double size.

<a name="affineplanetran2almostEqual"></a>
### affineplane.tran2.almostEqual(tr, ts, epsilon)

Are two transforms almost equal? Return true if a matrix norm
of the difference is smaller than epsilon. We use modified L1 norm
that values a, b, x, and y as equally important.

<p style="display: inline">Parameters:</p>

- `tr`
  - a [tran2](#affineplanetran2), a transform
- `ts`
  - a [tran2](#affineplanetran2), a transform
- `epsilon`
  - optional number, default to transform.EPSILON.
  - Set to 0 for strict comparison.

<p style="display: inline">Return:</p>

- a boolean

### affineplane.tran2.almostEquals

Alias of `affineplane.tran2.almostEqual`.

<a name="affineplanetran2changeBasis"></a>
### affineplane.tran2.changeBasis(tr, sourceBasis, targetBasis)

Convert transformation from basis to another.

<p style="display: inline">Parameters:</p>

- `tr`
  - a [tran2](#affineplanetran2), a transform on the source basis.
- `sourceBasis`
  - a [proj2](#affineplaneproj2), a transition from the source basis to
  - the reference basis.
- `targetBasis`
  - a [proj2](#affineplaneproj2), a transition from the target basis to
  - the reference basis.

<p style="display: inline">Return:</p>

- a [tran2](#affineplanetran2), the given transform represented in the target basis.

<a name="affineplanetran2compose"></a>
### affineplane.tran2.compose(tr, ts)

Multiply transformation matrix tr from
the right with the given transformation matrix ts.
In other words, transform the image of ts by tr.

<p style="display: inline">Parameters:</p>

- `tr`
  - a [tran2](#affineplanetran2)
- `ts`
  - a [tran2](#affineplanetran2)

<p style="display: inline">Return:</p>

- a [tran2](#affineplanetran2)

<a name="affineplanetran2copy"></a>
### affineplane.tran2.copy(tr)

<p style="display: inline">Parameters:</p>

- `tr`
  - a [tran2](#affineplanetran2), a transform

<p style="display: inline">Return:</p>

- a [tran2](#affineplanetran2), a transform

<a name="affineplanetran2create"></a>
### affineplane.tran2.create(a, b, x, y)

Create a 2D non-reflective similarity transform object.

<p style="display: inline">Parameters:</p>

- `a`
  - a number. The diagonal of linear transformation.
- `b`
  - a number. The upper and lower triangle of lin. transf.
- `x`
  - a number. The translation towards x
- `y`
  - a number. The translation towards y

<p style="display: inline">Return:</p>

- a [tran2](#affineplanetran2), a transform object

<a name="affineplanetran2solveLeft"></a>
### affineplane.tran2.solveLeft(tb, tc)

Given transforms B, C, find transform A, where AB = C.
Given that B is invertible, then A = C * iB.

<p style="display: inline">Parameters:</p>

- `tb`
  - a [tran2](#affineplanetran2)
- `tc`
  - a [tran2](#affineplanetran2)

<p style="display: inline">Return:</p>

- a [tran2](#affineplanetran2), a transform

<a name="affineplanetran2solveRight"></a>
### affineplane.tran2.solveRight(ta, tc)

Given the transforms A and C, find the transform B, where A * B = C.
Given that A is invertible, then B = iA * C.

<p style="display: inline">Parameters:</p>

- `ta`
  - a [tran2](#affineplanetran2)
- `tc`
  - a [tran2](#affineplanetran2)

<p style="display: inline">Return:</p>

- a [tran2](#affineplanetran2), a transform

<a name="affineplanetran2equal"></a>
### affineplane.tran2.equal(tr, ts)

Are transforms exactly equal?
Note that due to floating-point arithmetics, computation
might cause exact equality to be broken.
See [tran2](#affineplanetran2).almostEqual for relaxed alternative.

<p style="display: inline">Parameters:</p>

- `tr`
  - a [tran2](#affineplanetran2), a transform
- `ts`
  - a [tran2](#affineplanetran2), a transform

<p style="display: inline">Return:</p>

- a boolean

### affineplane.tran2.equals

Alias of `affineplane.tran2.equal`.

<a name="affineplanetran2fromArray"></a>
### affineplane.tran2.fromArray(abxy)

Create an affine similarity transform from 4-element array.

<p style="display: inline">Parameters:</p>

- `abxy`
  - an array with four number elements

<p style="display: inline">Return:</p>

- a [tran2](#affineplanetran2), a similarity transform.

<a name="affineplanetran2fromPolar"></a>
### affineplane.tran2.fromPolar(scale, rotation, tx, ty)

Create a transform object by using scale magnitude,
rotation angle, and translation.

<p style="display: inline">Parameters:</p>

- `scale`
  - a number, the scaling factor
- `rotation`
  - a number, rotation in radians from positive x axis towards pos. y axis.
- `tx`
  - a number, translation toward pos. x
- `ty`
  - a number, translation toward pos. y

<p style="display: inline">Return:</p>

- a [tran2](#affineplanetran2), a transform object

Precondition:
  scale must be positive

<a name="affineplanetran2fromVector3r"></a>
### affineplane.tran2.fromVector3r(vec3r, vanishing)

To transform

<p style="display: inline">Parameters:</p>

- `vec3r`
  - a vector3r, a perspective point, a 3D vector with rotation.
  - Vanishing point and { vec3r.x, vec3r.y } must have the same basis.
- `vanishing`
  - a [point2](#affineplanepoint2)

<p style="display: inline">Return:</p>

- a [tran2](#affineplanetran2)

<a name="affineplanetran2getRotation"></a>
### affineplane.tran2.getRotation(tr)

Get the rotation component of the transform in radians.

<p style="display: inline">Parameters:</p>

- `tr`
  - a [tran2](#affineplanetran2)

<p style="display: inline">Return:</p>

- a number, in radians

<a name="affineplanetran2getScale"></a>
### affineplane.tran2.getScale(tr)

Get the scale component of the transformation.

<p style="display: inline">Parameters:</p>

- `tr`
  - a [tran2](#affineplanetran2)

<p style="display: inline">Return:</p>

- a number, the scale multiplier.

<a name="affineplanetran2getTranslation"></a>
### affineplane.tran2.getTranslation(tr)

Get translation component of the transformation as a vector.

<p style="display: inline">Parameters:</p>

- `tr`
  - a [tran2](#affineplanetran2)

<p style="display: inline">Return:</p>

- a [vector2](#affineplanevector2)

### affineplane.tran2.multiply

Alias of `affineplane.tran2.compose`.

<a name="affineplanetran2inverse"></a>
### affineplane.tran2.inverse(tr)

Invert the transform. A transform from B to C
becomes a transform from C to B.

<p style="display: inline">Parameters:</p>

- `tr`
  - a [tran2](#affineplanetran2)

<p style="display: inline">Return:</p>

- a [tran2](#affineplanetran2), inversed transform

<a name="affineplanetran2scaleBy"></a>
### affineplane.tran2.scaleBy(tr, center, multiplier)

Scale image of the transform by the given multiplier
so that the given center point stays fixed.
The operation is also called homothety.

<p style="display: inline">Parameters:</p>

- `tr`
  - a [tran2](#affineplanetran2), a transform
- `center`
  - a [point2](#affineplanepoint2), a point
- `multiplier`
  - a number

<p style="display: inline">Return:</p>

- a [tran2](#affineplanetran2), a transform

<a name="affineplanetran2scaleTo"></a>
### affineplane.tran2.scaleTo(tr, center, scale)

Scale the given transform so that
1) its scale becomes equal with the given scale, and
2) its image stays fixed at the given center point.

<p style="display: inline">Parameters:</p>

- `tr`
  - a [tran2](#affineplanetran2)
- `center`
  - a [point2](#affineplanepoint2), a fixed pivot point for scaling.
- `scale`
  - a number, target scale

<p style="display: inline">Return:</p>

- a [tran2](#affineplanetran2), a transform

Throws if the given transform is singular, thus cannot be
uniquely scaled to the desired scale.

### affineplane.tran2.rebase

Alias of `affineplane.tran2.changeBasis`.

<a name="affineplanetran2rotateBy"></a>
### affineplane.tran2.rotateBy(tr, center, radians)

Rotate image of the transform by the given radians
so that the given center point stays fixed.

<p style="display: inline">Parameters:</p>

- `tr`
  - a [tran2](#affineplanetran2), a transform
- `center`
  - a [point2](#affineplanepoint2), a point
- `radians`
  - a number, angle in radians

<p style="display: inline">Return:</p>

- a [tran2](#affineplanetran2), a transform

<a name="affineplanetran2rotateTo"></a>
### affineplane.tran2.rotateTo(tr, center, radians)

Rotate image of the transform to the given angle
so that the given center point stays fixed.

<p style="display: inline">Parameters:</p>

- `tr`
  - a [tran2](#affineplanetran2), a transform
- `center`
  - a [point2](#affineplanepoint2), a point
- `radians`
  - a number, angle to rotate to

<p style="display: inline">Return:</p>

- a [tran2](#affineplanetran2), a transform

<a name="affineplanetran2toArray"></a>
### affineplane.tran2.toArray(tr)

Return an array representation of the transformation.
Compatible with [tran2](#affineplanetran2).createFromArray(...)

<p style="display: inline">Parameters:</p>

- `tr`
  - a [tran2](#affineplanetran2)

<p style="display: inline">Return:</p>

- an array, `[a, b, x, y]`

<a name="affineplanetran2toMatrix"></a>
### affineplane.tran2.toMatrix(tr)

Get the similarity transformation matrix
in the format common to other APIs, including:
- WebKitCSSMatrix alias DOMMatrix
- kld-affine
- MDN documentation in some parts

<p style="display: inline">Parameters:</p>

- `tr`
  - a [tran2](#affineplanetran2)

<p style="display: inline">Return:</p>

- `{ a, b, c, d, e, f }`

<a name="affineplanetran2toString"></a>
### affineplane.tran2.toString(tr)

Return a string of CSS transform-function data type.
Together with transform.createFromString(...), this method allows
serialization to and from strings.

<p style="display: inline">Parameters:</p>

- `tr`
  - a [proj2](#affineplaneproj2)

<p style="display: inline">Return:</p>

- a string, CSS transform

<a name="affineplanetran2toVector3r"></a>
### affineplane.tran2.toVector3r(tr, vanishing)

A perspective projection from transformation to vector3r

<p style="display: inline">Parameters:</p>

- `tr`
  - a [tran2](#affineplanetran2)
- `vanishing`
  - a [point2](#affineplanepoint2), the vanishing point.

<p style="display: inline">Return:</p>

- a vector3r

<a name="affineplanetran2transform"></a>
### affineplane.tran2.transform(tr, ts)

Multiply transformation matrix tr from
the left with the given transformation matrix ts.
In other words, transform the image of tr by ts.

For multiplication from right, see compose.

<p style="display: inline">Parameters:</p>

- `tr`
  - a [tran2](#affineplanetran2)
- `ts`
  - a [tran2](#affineplanetran2)

<p style="display: inline">Return:</p>

- a [tran2](#affineplanetran2)

### affineplane.tran2.transit

Alias of `affineplane.tran2.changeBasis`.

<a name="affineplanetran2translateBy"></a>
### affineplane.tran2.translateBy(tr, vec)

Modify transformation so that its image
is translated by the given vector.
In other words it transforms points
further by the given vector.

<p style="display: inline">Parameters:</p>

- `tr`
  - a [tran2](#affineplanetran2), a transform
- `vec`
  - a [vector2](#affineplanevector2), a vector `{ x, y }`

<p style="display: inline">Return:</p>

- a [tran2](#affineplanetran2), a transform

<a name="affineplanetran2translateTo"></a>
### affineplane.tran2.translateTo(tr, p)

Modify transformation so that it maps `{ x: 0, y: 0 }`
to the given point.

<p style="display: inline">Parameters:</p>

- `tr`
  - a [tran2](#affineplanetran2), a transform
- `p`
  - a [point2](#affineplanepoint2), a point `{ x, y }`

<p style="display: inline">Return:</p>

- a [tran2](#affineplanetran2), a transform

<a name="affineplanetran2validate"></a>
### affineplane.tran2.validate(tr)

Check if object is a valid [tran2](#affineplanetran2).

<p style="display: inline">Parameters:</p>

- `tr`
  - an object

<p style="display: inline">Return:</p>

- a boolean

## affineplane.vector2

Two-dimensional vector.
Vector is a two dimensional dynamic movent between points.

- [affineplane.vector2.add](#affineplanevector2add)
- [affineplane.vector2.almostEqual](#affineplanevector2almostEqual)
- [affineplane.vector2.average](#affineplanevector2average)
- [affineplane.vector2.copy](#affineplanevector2copy)
- [affineplane.vector2.create](#affineplanevector2create)
- [affineplane.vector2.difference](#affineplanevector2difference)
- [affineplane.vector2.fromArray](#affineplanevector2fromArray)
- [affineplane.vector2.fromPolar](#affineplanevector2fromPolar)
- [affineplane.vector2.inverse](#affineplanevector2inverse)
- [affineplane.vector2.magnitude](#affineplanevector2magnitude)
- [affineplane.vector2.max](#affineplanevector2max)
- [affineplane.vector2.mean](#affineplanevector2mean)
- [affineplane.vector2.min](#affineplanevector2min)
- [affineplane.vector2.negation](#affineplanevector2negation)
- [affineplane.vector2.norm](#affineplanevector2norm)
- [affineplane.vector2.opposite](#affineplanevector2opposite)
- [affineplane.vector2.rotateBy](#affineplanevector2rotateBy)
- [affineplane.vector2.rotateTo](#affineplanevector2rotateTo)
- [affineplane.vector2.sum](#affineplanevector2sum)
- [affineplane.vector2.toArray](#affineplanevector2toArray)
- [affineplane.vector2.validate](#affineplanevector2validate)

<a name="affineplanevector2add"></a>
### affineplane.vector2.add(v, w)

Add two vectors. See vector.sum to add many vectors.

<p style="display: inline">Parameters:</p>

- `v`
  - a [vector2](#affineplanevector2)
- `w`
  - a [vector2](#affineplanevector2)

<p style="display: inline">Return:</p>

- a [vector2](#affineplanevector2)

<a name="affineplanevector2almostEqual"></a>
### affineplane.vector2.almostEqual(v, w, epsilon)

Test if two vectors v,w are almost equal by the margin of epsilon.

<p style="display: inline">Parameters:</p>

- `v`
  - a [vector2](#affineplanevector2)
- `w`
  - a [vector2](#affineplanevector2)
- `epsilon`
  - optional number, default to [affineplane.EPSILON](#affineplaneEPSILON).
  - Set to 0 for strict comparison.

<p style="display: inline">Return:</p>

- a boolean

<a name="affineplanevector2average"></a>
### affineplane.vector2.average(vs)

Average of the vector endpoints. See polarMean for polar variant.

<p style="display: inline">Parameters:</p>

- `vs`
  - an array of [vector2](#affineplanevector2)

<p style="display: inline">Return:</p>

- a [vector2](#affineplanevector2)

<a name="affineplanevector2copy"></a>
### affineplane.vector2.copy(v)

Copy vector object.

<p style="display: inline">Parameters:</p>

- `v`
  - a [vector2](#affineplanevector2)

<p style="display: inline">Return:</p>

- a [vector2](#affineplanevector2)

<a name="affineplanevector2create"></a>
### affineplane.vector2.create(x, y)

Create a vector object `{ x, y }`

<p style="display: inline">Parameters:</p>

- `x`
  - a number. The translation along x-axis
- `y`
  - a number. The translation along y-axis

<p style="display: inline">Return:</p>

- a [vector2](#affineplanevector2)

<a name="affineplanevector2difference"></a>
### affineplane.vector2.difference(v, w)

A vector between v and w

<p style="display: inline">Parameters:</p>

- `v`
  - a [vector2](#affineplanevector2)
- `w`
  - a [vector2](#affineplanevector2)

<p style="display: inline">Return:</p>

- a [vector2](#affineplanevector2)

<a name="affineplanevector2fromArray"></a>
### affineplane.vector2.fromArray(arrp)

Create `{ x, y }` vector from array `[x, y]`

<p style="display: inline">Return:</p>

- a [vector2](#affineplanevector2)

<a name="affineplanevector2fromPolar"></a>
### affineplane.vector2.fromPolar(magnitude, direction)

Create a vector from polar coordinates.

<p style="display: inline">Parameters:</p>

- `magnitude`
  - a number, length of the vector
- `direction`
  - a number, angle in radians

<p style="display: inline">Return:</p>

- a [vector2](#affineplanevector2)

<a name="affineplanevector2inverse"></a>
### affineplane.vector2.inverse(v)

Negate the vector.

<p style="display: inline">Parameters:</p>

- `v`
  - a [vector2](#affineplanevector2)

<p style="display: inline">Return:</p>

- a [vector2](#affineplanevector2)

<a name="affineplanevector2magnitude"></a>
### affineplane.vector2.magnitude(v)

The length of 2d vector.

<p style="display: inline">Parameters:</p>

- `v`
  - a [vector2](#affineplanevector2)

<p style="display: inline">Return:</p>

- a number

<a name="affineplanevector2max"></a>
### affineplane.vector2.max(v, w)

Element-wise maximum of two vectors.

<p style="display: inline">Parameters:</p>

- `v`
  - a [vector2](#affineplanevector2)
- `w`
  - a [vector2](#affineplanevector2)

<p style="display: inline">Return:</p>

- a [vector2](#affineplanevector2)

### affineplane.vector2.mean

Alias of `affineplane.vector2.average`.

<a name="affineplanevector2min"></a>
### affineplane.vector2.min(v, w)

Element-wise minimum of two vectors

<p style="display: inline">Parameters:</p>

- `v`
  - a [vector2](#affineplanevector2)
- `w`
  - a [vector2](#affineplanevector2)

<p style="display: inline">Return:</p>

- a [vector2](#affineplanevector2)

### affineplane.vector2.negation

Alias of `affineplane.vector2.inverse`.

### affineplane.vector2.norm

Alias of `affineplane.vector2.magnitude`.

### affineplane.vector2.opposite

Alias of `affineplane.vector2.negation`.

<a name="affineplanevector2rotateBy"></a>
### affineplane.vector2.rotateBy(v, radians)

Rotate vector by the given angle.

<p style="display: inline">Parameters:</p>

- `v`
  - a [vector2](#affineplanevector2)
- `radians`
  - a number, from positive x-axis towards positive y-axis

<p style="display: inline">Return:</p>

- a [vector2](#affineplanevector2)

<a name="affineplanevector2rotateTo"></a>
### affineplane.vector2.rotateTo(v, radians)

Rotate vector so that it points to the given angle.

<p style="display: inline">Parameters:</p>

- `v`
  - a [vector2](#affineplanevector2)
- `radians`
  - a number from positive x-axis towards positive y-axis

<p style="display: inline">Return:</p>

- a [vector2](#affineplanevector2)

<a name="affineplanevector2sum"></a>
### affineplane.vector2.sum(vs)

Add an array of vectors together. See vector.add to add two vectors.

<p style="display: inline">Parameters:</p>

- `vs`
  - an array of [vector2](#affineplanevector2). The array can be empty.

<p style="display: inline">Return:</p>

- a [vector2](#affineplanevector2)

<a name="affineplanevector2toArray"></a>
### affineplane.vector2.toArray(v)

Get the vector object as an array.

<p style="display: inline">Parameters:</p>

- `v`
  - a [vector2](#affineplanevector2)

<p style="display: inline">Return:</p>

- an array `[x, y]`

<a name="affineplanevector2validate"></a>
### affineplane.vector2.validate(v)

Check if object is a valid [vector2](#affineplanevector2).

<p style="display: inline">Parameters:</p>

- `v`
  - an object

<p style="display: inline">Return:</p>

- a boolean

## affineplane.vector3

Three-dimensional vector.

- [affineplane.vector3.add](#affineplanevector3add)
- [affineplane.vector3.copy](#affineplanevector3copy)
- [affineplane.vector3.create](#affineplanevector3create)
- [affineplane.vector3.toArray](#affineplanevector3toArray)
- [affineplane.vector3.validate](#affineplanevector3validate)

<a name="affineplanevector3add"></a>
### affineplane.vector3.add(v, w)

<a name="affineplanevector3copy"></a>
### affineplane.vector3.copy(v)

<a name="affineplanevector3create"></a>
### affineplane.vector3.create(x, y, z)

<a name="affineplanevector3toArray"></a>
### affineplane.vector3.toArray(v)

<a name="affineplanevector3validate"></a>
### affineplane.vector3.validate(v)

Check if object is a valid vector3.

<p style="display: inline">Parameters:</p>

- `v`
  - an object

<p style="display: inline">Return:</p>

- a boolean

## affineplane.vector3r

Three-dimensional vector with rotation around z-axis.
3D Vector + Rotation

- [affineplane.vector3r.add](#affineplanevector3radd)
- [affineplane.vector3r.copy](#affineplanevector3rcopy)
- [affineplane.vector3r.create](#affineplanevector3rcreate)
- [affineplane.vector3r.difference](#affineplanevector3rdifference)
- [affineplane.vector3r.fromArray](#affineplanevector3rfromArray)
- [affineplane.vector3r.fromTran2](#affineplanevector3rfromTran2)
- [affineplane.vector3r.toArray](#affineplanevector3rtoArray)
- [affineplane.vector3r.toTran2](#affineplanevector3rtoTran2)
- [affineplane.vector3r.validate](#affineplanevector3rvalidate)

<a name="affineplanevector3radd"></a>
### affineplane.vector3r.add(v, w)

<p style="display: inline">Parameters:</p>

- `v`
  - a vector3r
- `w`
  - a vector3r

<p style="display: inline">Return:</p>

- a vector3r

<a name="affineplanevector3rcopy"></a>
### affineplane.vector3r.copy(v)

Copy the vector.

<a name="affineplanevector3rcreate"></a>
### affineplane.vector3r.create(x, y, z, r)

Create a vector3r object.

<a name="affineplanevector3rdifference"></a>
### affineplane.vector3r.difference(v, w)

A vector3r VW from point3r V to point3r W

<p style="display: inline">Parameters:</p>

- `v`
  - a vector3r from O to point3r V
- `w`
  - a vector3r from O to pointer W

<p style="display: inline">Return:</p>

- a vector3r

<a name="affineplanevector3rfromArray"></a>
### affineplane.vector3r.fromArray(arrp)

Create `{ x, y, z, r }` from array `[x, y, z, r]`

<p style="display: inline">Parameters:</p>

- `arrp`
  - an array `[x,y,z,r]`

<p style="display: inline">Return:</p>

- a vector3r

<a name="affineplanevector3rfromTran2"></a>
### affineplane.vector3r.fromTran2(tr, vanishing)

A perspective projection from transformation to vector3r

<p style="display: inline">Parameters:</p>

- `tr`
  - a [tran2](#affineplanetran2)
- `vanishing`
  - a [point2](#affineplanepoint2), the vanishing point.

<p style="display: inline">Return:</p>

- a vector3r

<a name="affineplanevector3rtoArray"></a>
### affineplane.vector3r.toArray(v)

<p style="display: inline">Parameters:</p>

- `v`
  - a vector3r

<p style="display: inline">Return:</p>

- an array, `[x, y, z, r]`

<a name="affineplanevector3rtoTran2"></a>
### affineplane.vector3r.toTran2(vec3r, vanishing)

To transform

<p style="display: inline">Parameters:</p>

- `vec3r`
  - a vector3r, a perspective point, a 3D vector with rotation.
  - Vanishing point and { vec3r.x, vec3r.y } must have the same basis.
- `vanishing`
  - a [point2](#affineplanepoint2)

<p style="display: inline">Return:</p>

- a [tran2](#affineplanetran2)

<a name="affineplanevector3rvalidate"></a>
### affineplane.vector3r.validate(v)

Check if object is a valid vector3r.

<p style="display: inline">Parameters:</p>

- `v`
  - an object

<p style="display: inline">Return:</p>

- a boolean

## affineplane.version

Package version string. Uses semantic versioning.



