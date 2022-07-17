<a name="top"></a>
# Affineplane API Documentation v1.2.0

Types and functions for affine 2D geometry.


- [affineplane.dir2](#affineplanedir2)
- [affineplane.dir2.create](#affineplanedir2create)
- [affineplane.dist2](#affineplanedist2)
- [affineplane.dist2.create](#affineplanedist2create)
- [affineplane.dist2.changeBasis](#affineplanedist2changeBasis)
- [affineplane.epsilon](#affineplaneepsilon)
- [affineplane.linear2](#affineplanelinear2)
- [affineplane.linear2.compose](#affineplanelinear2compose)
- [affineplane.linear2.copy](#affineplanelinear2copy)
- [affineplane.linear2.create](#affineplanelinear2create)
- [affineplane.linear2.polar](#affineplanelinear2polar)
- [affineplane.path2](#affineplanepath2)
- [affineplane.path2.create](#affineplanepath2create)
- [affineplane.poly2](#affineplanepoly2)
- [affineplane.poly2.create](#affineplanepoly2create)
- [affineplane.point2](#affineplanepoint2)
- [affineplane.point2.average](#affineplanepoint2average)
- [affineplane.point2.mean](#affineplanepoint2mean)
- [affineplane.point2.changeBasis](#affineplanepoint2changeBasis)
- [affineplane.point2.copy](#affineplanepoint2copy)
- [affineplane.point2.create](#affineplanepoint2create)
- [affineplane.point2.difference](#affineplanepoint2difference)
- [affineplane.point2.delta](#affineplanepoint2delta)
- [affineplane.point2.distance](#affineplanepoint2distance)
- [affineplane.point2.equal](#affineplanepoint2equal)
- [affineplane.point2.equals](#affineplanepoint2equals)
- [affineplane.point2.fromArray](#affineplanepoint2fromArray)
- [affineplane.point2.offset](#affineplanepoint2offset)
- [affineplane.point2.polarOffset](#affineplanepoint2polarOffset)
- [affineplane.point2.project](#affineplanepoint2project)
- [affineplane.point2.rotateBy](#affineplanepoint2rotateBy)
- [affineplane.point2.toArray](#affineplanepoint2toArray)
- [affineplane.point2.transform](#affineplanepoint2transform)
- [affineplane.point2.translate](#affineplanepoint2translate)
- [affineplane.point2.move](#affineplanepoint2move)
- [affineplane.point3](#affineplanepoint3)
- [affineplane.point3.create](#affineplanepoint3create)
- [affineplane.proj2](#affineplaneproj2)
- [affineplane.proj2.copy](#affineplaneproj2copy)
- [affineplane.proj2.create](#affineplaneproj2create)
- [affineplane.proj2.compose](#affineplaneproj2compose)
- [affineplane.proj2.inverse](#affineplaneproj2inverse)
- [affineplane.proj2.between](#affineplaneproj2between)
- [affineplane.proj2.dir2](#affineplaneproj2dir2)
- [affineplane.proj2.dist2](#affineplaneproj2dist2)
- [affineplane.proj2.point2](#affineplaneproj2point2)
- [affineplane.proj2.vector2](#affineplaneproj2vector2)
- [affineplane.proj2.linear2](#affineplaneproj2linear2)
- [affineplane.proj2.size2](#affineplaneproj2size2)
- [affineplane.proj2.tran2](#affineplaneproj2tran2)
- [affineplane.size2](#affineplanesize2)
- [affineplane.size2.area](#affineplanesize2area)
- [affineplane.size2.atNorm](#affineplanesize2atNorm)
- [affineplane.size2.create](#affineplanesize2create)
- [affineplane.size2.scaleBy](#affineplanesize2scaleBy)
- [affineplane.helm2](#affineplanehelm2)
- [affineplane.helm2.I](#affineplanehelm2I)
- [affineplane.tran2.ROT0](#affineplanetran2ROT0)
- [affineplane.tran2.ROT45](#affineplanetran2ROT45)
- [affineplane.tran2.ROT90](#affineplanetran2ROT90)
- [affineplane.tran2.ROT180](#affineplanetran2ROT180)
- [affineplane.tran2.ROT270](#affineplanetran2ROT270)
- [affineplane.tran2.HALF](#affineplanetran2HALF)
- [affineplane.tran2.X2](#affineplanetran2X2)
- [affineplane.helm2.almostEqual](#affineplanehelm2almostEqual)
- [affineplane.helm2.changeBasis](#affineplanehelm2changeBasis)
- [affineplane.helm2.compose](#affineplanehelm2compose)
- [affineplane.helm2.copy](#affineplanehelm2copy)
- [affineplane.helm2.create](#affineplanehelm2create)
- [affineplane.helm2.det](#affineplanehelm2det)
- [affineplane.tran2.solveLeft](#affineplanetran2solveLeft)
- [affineplane.tran2.solveRight](#affineplanetran2solveRight)
- [affineplane.helm2.equal](#affineplanehelm2equal)
- [affineplane.helm2.fromArray](#affineplanehelm2fromArray)
- [affineplane.helm2.fromPolar](#affineplanehelm2fromPolar)
- [affineplane.helm2.fromVector3r](#affineplanehelm2fromVector3r)
- [affineplane.helm2.getRotation](#affineplanehelm2getRotation)
- [affineplane.tran2.getScale](#affineplanetran2getScale)
- [affineplane.tran2.getTranslation](#affineplanetran2getTranslation)
- [affineplane.tran2.inverse](#affineplanetran2inverse)
- [affineplane.tran2.scaleBy](#affineplanetran2scaleBy)
- [affineplane.helm2.scaleTo](#affineplanehelm2scaleTo)
- [affineplane.tran2.rotateBy](#affineplanetran2rotateBy)
- [affineplane.tran2.rotateTo](#affineplanetran2rotateTo)
- [affineplane.tran2.rotateToOrtho](#affineplanetran2rotateToOrtho)
- [affineplane.tran2.toArray](#affineplanetran2toArray)
- [affineplane.tran2.toMatrix](#affineplanetran2toMatrix)
- [affineplane.tran2.toString](#affineplanetran2toString)
- [affineplane.tran2.toVector3r](#affineplanetran2toVector3r)
- [affineplane.tran2.transform](#affineplanetran2transform)
- [affineplane.tran2.translateBy](#affineplanetran2translateBy)
- [affineplane.tran2.translateTo](#affineplanetran2translateTo)
- [affineplane.tran2.validate](#affineplanetran2validate)
- [affineplane.vector2](#affineplanevector2)
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
- [affineplane.vector2.min](#affineplanevector2min)
- [affineplane.vector2.project](#affineplanevector2project)
- [affineplane.vector2.rotateBy](#affineplanevector2rotateBy)
- [affineplane.vector2.rotateTo](#affineplanevector2rotateTo)
- [affineplane.vector2.sum](#affineplanevector2sum)
- [affineplane.vector2.toArray](#affineplanevector2toArray)
- [affineplane.vector2.toPolar](#affineplanevector2toPolar)
- [affineplane.vector2.validate](#affineplanevector2validate)
- [affineplane.vector3](#affineplanevector3)
- [affineplane.vector3.add](#affineplanevector3add)
- [affineplane.vector3.copy](#affineplanevector3copy)
- [affineplane.vector3.create](#affineplanevector3create)
- [affineplane.vector3.toArray](#affineplanevector3toArray)
- [affineplane.vector3.validate](#affineplanevector3validate)
- [affineplane.tran2.toVector3r](#affineplanetran2toVector3r)
- [affineplane.helm2.fromVector3r](#affineplanehelm2fromVector3r)
- [affineplane.version](#affineplaneversion)

<a name="affineplanedir2"></a>
## affineplane.dir2

A direction is just a number in radians clockwise from
the positive x-axis. The direction is capped between -Pi (inclusive)
and Pi (exclusive).
When a direction is projected between planes, only the rotation of
the coordinate space affects the direction.

<a name="affineplanedir2create"></a>
## affineplane.dir2.create(r)

Create a new direction.

Parameters
- r
  - a number. The angle in radians.

Return
- a number. The angle in radians between -Pi and +Pi.

<a name="affineplanedist2"></a>
## affineplane.dist2


<a name="affineplanedist2create"></a>
## affineplane.dist2.create(d)

Create a measure. Basically it is just the absolute value of the number.

Parameters
- d
  - a number

Return
- a number, always zero or positive.

<a name="affineplanedist2changeBasis"></a>
## affineplane.dist2.changeBasis(d, source, target)

Convert a distance between bases.

Parameters
- d
  - a number, a measure on the source basis.
- sourceBasis
  - a [proj2](#affineplaneproj2), a transition from the source basis to the reference basis.
- targetBasis
  - a [proj2](#affineplaneproj2), a transition from the target basis to the reference basis.

Return
- a number, the scalar on the target basis.

<a name="affineplaneepsilon"></a>
## affineplane.epsilon

Default margin for non-strict numeric equality. For example 0.0000000001.

<a name="affineplanelinear2"></a>
## affineplane.linear2

Two-dimensional linear similarity transformation. In other words,
it describes a rotation and uniform scaling around (0,0).

Linear transformations cannot be used on [point2](#affineplanepoint2)
because the points in affine space
do not have origin. With an origin it is possible.
Therefore [vector2](#affineplanevector2) can be linearly transformed.

<a name="affineplanelinear2compose"></a>
## affineplane.linear2.compose(tr, ts)

Combine two linear transformations.

Parameters:
- tr
  - transformation to be applied last
- ts
  - transformation to be applied first

Return
- [tran2](#affineplanetran2)

<a name="affineplanelinear2copy"></a>
## affineplane.linear2.copy(lin)

Deep copy [linear2](#affineplanelinear2).

Parameters:
- lin
  - a [linear2](#affineplanelinear2)

Return:
- a [linear2](#affineplanelinear2)

<a name="affineplanelinear2create"></a>
## affineplane.linear2.create(a, b)

Create a two-dimensional linear non-reflective similarity transform
`{ a, b }`

Parameters:
- a
  - a number
- b
  - a number

Return:
- a [linear2](#affineplanelinear2)

<a name="affineplanelinear2polar"></a>
## affineplane.linear2.polar(scale, rotation)

Create a linear transformation from scale and rotation.
See also [affineplane.vector2](#affineplanevector2).polar.

Parameters
- scale
  - a number, multiplier
- rotation
  - a number, angle in radians

Return
- [linear2](#affineplanelinear2)

<a name="affineplanepath2"></a>
## affineplane.path2

Two-dimensional path; Array of [point2](#affineplanepoint2); Open sequence of points;
Does not form a polygon but a sequence of line segments.
`[{ x, y }, { x, y }, ...]`

<a name="affineplanepath2create"></a>
## affineplane.path2.create(points)

Create a path on plane. Deep-clones the points array.

Parameters:
- points
  - array of [point2](#affineplanepoint2)

Return:
- a path2, array of points

<a name="affineplanepoly2"></a>
## affineplane.poly2

A two-dimensional polygon; Array of [point2](#affineplanepoint2);
A closed sequence of points `[{ x, y }, { x, y }, ...]`

<a name="affineplanepoly2create"></a>
## affineplane.poly2.create(points)

Create a polygon on plane. Deep-clones the points array.

Parameters:
- points
  - array of [point2](#affineplanepoint2)

Return:
- a poly2, array of points

<a name="affineplanepoint2"></a>
## affineplane.point2

A two-dimensional point. A point is a position in affine space.
Due to affinity, two points cannot be added together,
although the distance between and their mean can be computed.
An affine space does not have origin; `{ x:0, y:0 }` is not an origin.

<a name="affineplanepoint2average"></a>
## affineplane.point2.average(ps)

Average of points.

Parameters
- ps
  - array of [point2](#affineplanepoint2)

Return
- a [point2](#affineplanepoint2)

<a name="affineplanepoint2mean"></a>
## affineplane.point2.mean

Alias for [affineplane.point2](#affineplanepoint2).average

<a name="affineplanepoint2changeBasis"></a>
## affineplane.point2.changeBasis(p, source, target)

Convert a point between bases.

Parameters
- p
  - a [point2](#affineplanepoint2), a point on the source basis.
- source
  - a [proj2](#affineplaneproj2), a transition from the source basis to the reference basis.
- target
  - a [proj2](#affineplaneproj2), a transition from the target basis to the reference basis.

Return
- a [point2](#affineplanepoint2), the same point but represented on the targer basis.

<a name="affineplanepoint2copy"></a>
## affineplane.point2.copy(p)

Copy point object.

Parameters
- p
  - a [point2](#affineplanepoint2)

Return
- a [point2](#affineplanepoint2)

<a name="affineplanepoint2create"></a>
## affineplane.point2.create(x, y)

Create a [point2](#affineplanepoint2) object: `{ x, y }`

Parameters
- x
  - a number. The x coordinate.
- y
  - a number. The y coordinate.

Return
- a [point2](#affineplanepoint2)

<a name="affineplanepoint2difference"></a>
## affineplane.point2.difference(p, q)

A vector from point p to point q.

Parameters:
- p
  - a [point2](#affineplanepoint2)
- q
  - a [point2](#affineplanepoint2)

Return
- a [vector2](#affineplanevector2)

<a name="affineplanepoint2delta"></a>
## affineplane.point2.delta

Alias for [affineplane.point2](#affineplanepoint2).difference

<a name="affineplanepoint2distance"></a>
## affineplane.point2.distance(p, q)

Distance between two points.

Parameters
- p
  - a [point2](#affineplanepoint2)
- q
  - a [point2](#affineplanepoint2)

Return
- a number, a distance from p to q (= distance from q to p)

<a name="affineplanepoint2equal"></a>
## affineplane.point2.equal(p, q)

Test if points p, q are equal.

Parameters
- p
  - a [point2](#affineplanepoint2)
- q
  - a [point2](#affineplanepoint2)

Return
- a boolean

<a name="affineplanepoint2equals"></a>
## affineplane.point2.equals

Alias for [affineplane.point2](#affineplanepoint2).equal

<a name="affineplanepoint2fromArray"></a>
## affineplane.point2.fromArray(arrp)

Create `{ x, y }` point from array `[x, y]`

Parameters:
- arrp
  - a two-element array

Return
- a [point2](#affineplanepoint2)

<a name="affineplanepoint2offset"></a>
## affineplane.point2.offset(p, dx, dy)

Offset a point by scalars dx dy.

Parameters:
- p
  - a [point2](#affineplanepoint2)
- dx
  - a number, a horizontal offset
- dy
  - a number, a vertical offset

Return
- a [point2](#affineplanepoint2), translated by the vector `{ x: dx, y: dy }`

<a name="affineplanepoint2polarOffset"></a>
## affineplane.point2.polarOffset(p, distance, angle)

Create a point away from p at the given distance and angle.

Parameters:
- p
  - a [point2](#affineplanepoint2)
- distance
  - a number, the distance from p.
- angle
  - a number, the angle in radians

Return
- a [point2](#affineplanepoint2)

<a name="affineplanepoint2project"></a>
## affineplane.point2.project(p, pr)

Project a point from a plane to another.

Parameters:
- p
  - a [point2](#affineplanepoint2)
- pr
  - a [proj2](#affineplaneproj2), the projection to apply to p.

Return
- a [point2](#affineplanepoint2)

<a name="affineplanepoint2rotateBy"></a>
## affineplane.point2.rotateBy(p, origin, radians)

Rotate point about the given center.

Parameters
- p
  - a [point2](#affineplanepoint2)
- origin
  - a [point2](#affineplanepoint2), the point around to rotate
- radians
  - a number, angle in radians

Return
- a [point2](#affineplanepoint2)

<a name="affineplanepoint2toArray"></a>
## affineplane.point2.toArray(p)

Get the [point2](#affineplanepoint2) object as an array.

Parameters:
- p
  - a [point2](#affineplanepoint2)

Return
- an array `[x, y]`

<a name="affineplanepoint2transform"></a>
## affineplane.point2.transform(p, tr)

Transform a point.

Parameters
- p
  - a [point2](#affineplanepoint2), `{ x, y }`
- tr
  - a [tran2](#affineplanetran2), a transform

Return
- a [point2](#affineplanepoint2), the transformed point

<a name="affineplanepoint2translate"></a>
## affineplane.point2.translate(p, vec)

Translate the point by the given vector.

Parameters:
- p
  - a [point2](#affineplanepoint2)
- vec
  - a [vector2](#affineplanevector2)

Return
- a [point2](#affineplanepoint2)

<a name="affineplanepoint2move"></a>
## affineplane.point2.move

Alias for [affineplane.point2](#affineplanepoint2).translate

<a name="affineplanepoint3"></a>
## affineplane.point3


<a name="affineplanepoint3create"></a>
## affineplane.point3.create(x, y, z)

Create a three-dimensional point `{x, y, z}`

Return
- a point3

<a name="affineplaneproj2"></a>
## affineplane.proj2

Projections between two-dimensional planes for various geometries.
The [proj2](#affineplaneproj2) projections are orthogonal projections from plane A to plane B,
assuming that the planes are parallel in 3D.

A projection can be used as a function that converts
coordinates of geometric structures from plane to plane.

The structure of projected objects stays completely intact.
Only the representation changes. Therefore projections are isomorphisms.

The structures are in affine space: there is no origin or 'global' plane.

The projection defines the location of plane A on plane B.
The projection defines the orientation of plane A on plane B.
A projection maps the position (0,0) on plane A to the same
position on plane B, represented in the basis of B.

If plane A is a child element and plane B the parent, then
the projection from A to B is equivalent to the location of A on B.

<a name="affineplaneproj2copy"></a>
## affineplane.proj2.copy(pr)

affineplaen.proj2.clone(pr)

Deep-copy the projection object.

Parameters
- pr
  - a [proj2](#affineplaneproj2), a projection

Return
- a [proj2](#affineplaneproj2), a projection

<a name="affineplaneproj2create"></a>
## affineplane.proj2.create(a, b, x, y)

Create a projection between two-dimensional planes: source and target.

Parameters
- a
  - a number. The diagonal of linear transformation.
- b
  - a number. The upper and lower triangle of lin. transf.
- x
  - a number. Position of the source's (0,0) on the target.
- y
  - a number. Position of the sources's (0,0) on the target.

Return
- a [proj2](#affineplaneproj2), a projection object

<a name="affineplaneproj2compose"></a>
## affineplane.proj2.compose(p, q)

[affineplane.proj2](#affineplaneproj2).combine(p, q)

Combine two projections.

Parameters:
- p
  - a [proj2](#affineplaneproj2), projection to be applied last
- q
  - a [proj2](#affineplaneproj2), projection to be applied first

Return
- a [proj2](#affineplaneproj2)

<a name="affineplaneproj2inverse"></a>
## affineplane.proj2.inverse(pr)

[affineplane.proj2](#affineplaneproj2).invert(pr)

Invert the projection. A projection from plane P to plane Q
becomes a projection from plane Q to plane P.

Parameters
- pr
  - a [proj2](#affineplaneproj2)

Return
- a [proj2](#affineplaneproj2), inversed projection

<a name="affineplaneproj2between"></a>
## affineplane.proj2.between(source, target)

Finds a projection from a source plane A to a target plane B
from their projections to a intermediate root plane R.
The result is a combination of the inverse of the target projection
and the source projection.

Parameters:
- source
  - a [proj2](#affineplaneproj2), a projection from the source plane A to a root plane R
- target
  - a [proj2](#affineplaneproj2), a projection from the target plane B to a root plane R

Return
- a [proj2](#affineplaneproj2)

<a name="affineplaneproj2dir2"></a>
## affineplane.proj2.dir2(pr, r)

[affineplane.proj2](#affineplaneproj2).direction(pr, r)

Project a direction angle from a plane to another.

Parameters:
- pr
  - a [proj2](#affineplaneproj2), a projection between planes
- r
  - a number, a direction angle in radians

Return
- a number, the equivalent direction on the target plane.

<a name="affineplaneproj2dist2"></a>
## affineplane.proj2.dist2(pr, d)

[affineplane.proj2](#affineplaneproj2).distance(pr, d)

Project a one-dimensional distance.

Parameters:
- pr
  - a [proj2](#affineplaneproj2), a projection between planes
- d
  - a number, a distance in two-dimensions

Return
- a number, the same distance on the target plane.

<a name="affineplaneproj2point2"></a>
## affineplane.proj2.point2(pr, p2)

[affineplane.proj2](#affineplaneproj2).point(pr, p2)

Project a [point2](#affineplanepoint2) from a plane to another.
Unlike [vector2](#affineplanevector2), point2 is affected by translation.

Parameters:
- pr
  - a [proj2](#affineplaneproj2)
- p
  - a [point2](#affineplanepoint2)

Return
- a [point2](#affineplanepoint2)

<a name="affineplaneproj2vector2"></a>
## affineplane.proj2.vector2(pr, v2)

Project a [vector2](#affineplanevector2) from a plane to another.
Translations do not affect vectors,
only scaling and rotation do.

Parameters:
- pr
  - a [proj2](#affineplaneproj2), projection between planes
- v2
  - a [vector2](#affineplanevector2), a translation on a plane, represented on the source plane.

Return:
- a [vector2](#affineplanevector2), the same vector represented on the target plane,

<a name="affineplaneproj2linear2"></a>
## affineplane.proj2.linear2(pr, lin)

Project a linear transformation from a plane to another.
Use to represent the linear transformation on another plane.

Parameters:
- pr
  - a [proj2](#affineplaneproj2), projection between planes
- lin
  - a [linear2](#affineplanelinear2), linear transformation, represented on the source plane.

Return:
- a [linear2](#affineplanelinear2), the same transformation represented on the target plane

<a name="affineplaneproj2size2"></a>
## affineplane.proj2.size2(pr, size)

Project a rectangular size from a plane to another.
Only the scale change affects the size.

Parameters:
- pr
  - a [proj2](#affineplaneproj2), a projection between planes
- size
  - a [size2](#affineplanesize2), a rectangular size in 2D

Return
- a number, the same size on the target plane.

<a name="affineplaneproj2tran2"></a>
## affineplane.proj2.tran2(pr, tr)

Transforms are quite similar to projections but they
happen on the plane, and thus are automorphisms.

Parameters:
- pr
  - a [proj2](#affineplaneproj2), projection to be applied
- tr
  - a [tran2](#affineplanetran2), an affine similarity transformation

Return
- a [tran2](#affineplanetran2), the same transformation on the target plane.

<a name="affineplanesize2"></a>
## affineplane.size2

Two-dimensional rectangular size, consisting of width and height.

<a name="affineplanesize2area"></a>
## affineplane.size2.area(sz)

Area. If your w and h are in px, this gives you
the total number of pixels.

Parameters
- sz
  - a [size2](#affineplanesize2)

Return
- a number

<a name="affineplanesize2atNorm"></a>
## affineplane.size2.atNorm(sz, nw, nh)

Find a point on the area.

Parameters
- sz
  - a [size2](#affineplanesize2)
- nw
  - a normalized width in 0..1
- nh
  - a normalized height

Return
- a [point2](#affineplanepoint2)

<a name="affineplanesize2create"></a>
## affineplane.size2.create(width, height)

Create a [size2](#affineplanesize2) object.

Parameters:
- width
  - a number
- height
  - a number

Return
- a [size2](#affineplanesize2)

<a name="affineplanesize2scaleBy"></a>
## affineplane.size2.scaleBy(sz, multiplier)

Ratio-preserving scale. Multiplies all dimensions uniformly.

Parameters:
- sz
  - a [size2](#affineplanesize2)
- multiplier
  - a number

Return:
- a [size2](#affineplanesize2)

<a name="affineplanehelm2"></a>
## affineplane.helm2

affineplane.tran2

Provides functions for a special kind of 2D transformation matrices.
These matrices represent translation, rotation, and uniform scale.
They are also known as *affine non-reflective similarity transformations*
as well as *two-dimensional Helmert transformations*.

The functions expect the transformation as an object
`{ a, b, x, y }`

<a name="affineplanehelm2I"></a>
## affineplane.helm2.I


<a name="affineplanetran2ROT0"></a>
## affineplane.tran2.ROT0


<a name="affineplanetran2ROT45"></a>
## affineplane.tran2.ROT45


<a name="affineplanetran2ROT90"></a>
## affineplane.tran2.ROT90


<a name="affineplanetran2ROT180"></a>
## affineplane.tran2.ROT180


<a name="affineplanetran2ROT270"></a>
## affineplane.tran2.ROT270


<a name="affineplanetran2HALF"></a>
## affineplane.tran2.HALF


<a name="affineplanetran2X2"></a>
## affineplane.tran2.X2


<a name="affineplanehelm2almostEqual"></a>
## affineplane.helm2.almostEqual(tr, ts, [epsilon])

Are two transforms almost equal? Return true if a matrix norm
of the difference is smaller than epsilon. We use modified
[L1 norm](https://mathworld.wolfram.com/L1-Norm.html) aka
Manhattan Distance to compute the difference.

Parameters:
- tr
  - a [tran2](#affineplanetran2), a transform
- ts
  - a [tran2](#affineplanetran2), a transform
- epsilon
  - optional number, default to transform.EPSILON.
  - Set to 0 for strict comparison.

Return:
- a boolean

<a name="affineplanehelm2changeBasis"></a>
## affineplane.helm2.changeBasis(tr, sourceBasis, targetBasis)

Convert transformation from a basis to another.

Parameters
- tr
  - a [tran2](#affineplanetran2), a transform on the source basis.
- sourceBasis
  - a [proj2](#affineplaneproj2), a transition from the source basis to
  - the reference basis.
- targetBasis
  - a [proj2](#affineplaneproj2), a transition from the target basis to
  - the reference basis.

Return
- a [tran2](#affineplanetran2), the given transform represented in the target basis.

<a name="affineplanehelm2compose"></a>
## affineplane.helm2.compose(tr, ts)

Multiply transformation matrix tr from
the right with the given transformation matrix ts.
In other words, transform the image of ts by tr.

Parameters:
- tr
  - a [tran2](#affineplanetran2)
- ts
  - a [tran2](#affineplanetran2)

Return:
- a [tran2](#affineplanetran2)

<a name="affineplanehelm2copy"></a>
## affineplane.helm2.copy(tr)

Parameters
- tr
  - a [tran2](#affineplanetran2), a transform

Return
- a [tran2](#affineplanetran2), a transform

<a name="affineplanehelm2create"></a>
## affineplane.helm2.create(a, b, x, y)

Create a 2D non-reflective similarity transform object.

Parameters
- a
  - a number. The diagonal of linear transformation.
- b
  - a number. The upper and lower triangle of lin. transf.
- x
  - a number. The translation towards x
- y
  - a number. The translation towards y

Return
- a [tran2](#affineplanetran2), a transform object

<a name="affineplanehelm2det"></a>
## affineplane.helm2.det(tr)

[affineplane.helm2](#affineplanehelm2).determinant(tr)

The matrix determinant of the transformation. If the determinant equals
zero then the matrix cannot be inverted and thus is not a valid
transformation. In practice, determinants close to zero are also
problematic due to floating point arithmetics.

Parameters
- tr
  - a [tran2](#affineplanetran2)

Return
- a number, the determinant.

<a name="affineplanetran2solveLeft"></a>
## affineplane.tran2.solveLeft(tb, tc)

Given transforms B, C, find transform A, where AB = C.
Given that B is invertible, then A = C * iB.

Parameters:
- tb
  - a [tran2](#affineplanetran2)
- tc
  - a [tran2](#affineplanetran2)

Return
- a [tran2](#affineplanetran2), a transform

<a name="affineplanetran2solveRight"></a>
## affineplane.tran2.solveRight(ta, tc)

Given the transforms A and C, find the transform B, where A * B = C.
Given that A is invertible, then B = iA * C.

Parameters:
- ta
  - a [tran2](#affineplanetran2)
- tc
  - a [tran2](#affineplanetran2)

Return
- a [tran2](#affineplanetran2), a transform

<a name="affineplanehelm2equal"></a>
## affineplane.helm2.equal(tr, ts)

Are transforms exactly equal?
Note that due to floating-point arithmetics, computation
might cause exact equality to be broken.
See [tran2](#affineplanetran2).almostEqual for relaxed alternative.

Parameters:
- tr
  - a [tran2](#affineplanetran2), a transform
- ts
  - a [tran2](#affineplanetran2), a transform

Return:
- a boolean

<a name="affineplanehelm2fromArray"></a>
## affineplane.helm2.fromArray(abxy)

Create an affine similarity transform from 4-element array.

Parameter
- abxy
  - an array with four number elements

Return
- a [tran2](#affineplanetran2), a similarity transform.

<a name="affineplanehelm2fromPolar"></a>
## affineplane.helm2.fromPolar(scale, rotation, tx, ty)

Create a transform object by using scale magnitude,
rotation angle, and translation.

Parameters:
- scale
  - a number, the scaling factor
- rotation
  - a number, rotation in radians from positive x axis towards pos. y axis.
- tx
  - optional number, translation toward positive x. Default 0.
- ty
  - optional number, translation toward positive y. Default 0.

Return:
- a [tran2](#affineplanetran2), a transform object

Precondition:
- scale must be positive

<a name="affineplanehelm2fromVector3r"></a>
## affineplane.helm2.fromVector3r(vec3r, vanishing)

Convert a 3D vector with rotation to a [tran2](#affineplanetran2). Essentially,
the z-coordinate will be projected to scaling at z=0.

Parameters:
- vec3r
  - a vector3r, a perspective point, a 3D vector with rotation.
  - Vanishing point and { vec3r.x, vec3r.y } must have the same basis.
- vanishing
  - a [point2](#affineplanepoint2)

Return
- a [tran2](#affineplanetran2)

<a name="affineplanehelm2getRotation"></a>
## affineplane.helm2.getRotation(tr)

Get the rotation component of the transform in radians.

Parameters:
- tr
  - a [tran2](#affineplanetran2)

Return:
- a number, in radians

<a name="affineplanetran2getScale"></a>
## affineplane.tran2.getScale(tr)

Get the scale component of the transformation.

Parameters:
- tr
  - a [tran2](#affineplanetran2)

Return:
- a number, the scale multiplier.

<a name="affineplanetran2getTranslation"></a>
## affineplane.tran2.getTranslation(tr)

Get translation component of the transformation as a vector.

Parameters:
- tr
  - a [tran2](#affineplanetran2)

Return:
- a [vector2](#affineplanevector2)

<a name="affineplanetran2inverse"></a>
## affineplane.tran2.inverse(tr)

Invert the transform. A transform from B to C
becomes a transform from C to B.

Parameters
- tr
  - a [tran2](#affineplanetran2)

Return
- a [tran2](#affineplanetran2), inversed transform

<a name="affineplanetran2scaleBy"></a>
## affineplane.tran2.scaleBy(tr, center, multiplier)

Scale image of the transform by the given multiplier
so that the given center point stays fixed.
The operation is also called homothety.

Parameter
- tr
  - a [tran2](#affineplanetran2), a transform
- center
  - a [point2](#affineplanepoint2), a point on the image of the transform
- multiplier
  - a number

Return
- a [tran2](#affineplanetran2), a transform

<a name="affineplanehelm2scaleTo"></a>
## affineplane.helm2.scaleTo(tr, center, scale)

Scale the given transform so that
1) its scale becomes equal with the given scale, and
2) its image stays fixed at the given center point.

Parameter
- tr
  - a [tran2](#affineplanetran2)
- center
  - a [point2](#affineplanepoint2), a point on the image of the transform
- scale
  - a number, target scale

Return
- a [tran2](#affineplanetran2), a transform

Throws if the given transform is singular, thus cannot be
uniquely scaled to the desired scale.

<a name="affineplanetran2rotateBy"></a>
## affineplane.tran2.rotateBy(tr, center, radians)

Rotate image of the transform by the given radians
so that the given center point stays fixed.

Parameter
- tr
  - a [tran2](#affineplanetran2), a transform
- center
  - a [point2](#affineplanepoint2), a point on the image of the transform
- radians
  - a number, angle in radians

Return
- a [tran2](#affineplanetran2), a transform

<a name="affineplanetran2rotateTo"></a>
## affineplane.tran2.rotateTo(tr, center, radians)

Rotate image of the transform to the given angle
so that the given center point stays fixed.

Parameter
- tr
  - a [tran2](#affineplanetran2), a transform
- center
  - a [point2](#affineplanepoint2), a point on the image of the transform
- radians
  - a number, angle to rotate to

Return
- a [tran2](#affineplanetran2), a transform

<a name="affineplanetran2rotateToOrtho"></a>
## affineplane.tran2.rotateToOrtho(tr, center)

Rotate to nearest orthogonal angle 0, 90, 180, and 270 deg.
Note that if the given transform represents exact 45, 135, 225, or 315 deg
rotation then the nearest orthogonal angle is arbitrarily either the next
or previous orthogonal angle due to the variation caused by
floating-point arithmetics.

Parameters:
- tr
  - a [tran2](#affineplanetran2)
- center
  - a [point2](#affineplanepoint2), a point on the image of the transform

Return
- a [tran2](#affineplanetran2)

<a name="affineplanetran2toArray"></a>
## affineplane.tran2.toArray(tr)

Return an array representation of the transformation.
Compatible with [tran2](#affineplanetran2).createFromArray(...)

Parameters:
- tr
  - a [tran2](#affineplanetran2)

Return
- an array, `[a, b, x, y]`

<a name="affineplanetran2toMatrix"></a>
## affineplane.tran2.toMatrix(tr)

Get the similarity transformation matrix
in the format common to other APIs, including:
- WebKitCSSMatrix alias DOMMatrix
- kld-affine
- MDN documentation in some parts

Parameters:
- tr
  - a [tran2](#affineplanetran2)

Return:
- `{ a, b, c, d, e, f }`

<a name="affineplanetran2toString"></a>
## affineplane.tran2.toString(tr)

Convert the transformation to a string compatible with the CSS
transform-function data type, for example `matrix(1, 2, -2, 1, 3, 4)`.
Together with transform.createFromString(...), this method enables [tran2](#affineplanetran2)
serialization to and from strings.

Parameters:
- tr
  - a [proj2](#affineplaneproj2)

Return:
- a string, CSS transform

<a name="affineplanetran2toVector3r"></a>
## affineplane.tran2.toVector3r(tr, vanishing)

A perspective projection from transformation to vector3r

Parameters
- tr
  - a [tran2](#affineplanetran2)
- vanishing
  - a [point2](#affineplanepoint2), the vanishing point.

Return
- a vector3r

<a name="affineplanetran2transform"></a>
## affineplane.tran2.transform(tr, ts)

Multiply transformation matrix tr from
the left with the given transformation matrix ts.
In other words, transform the image of tr by ts.

For multiplication from right, see compose.

Parameters:
- tr
  - a [tran2](#affineplanetran2)
- ts
  - a [tran2](#affineplanetran2)

Return
- a [tran2](#affineplanetran2)

<a name="affineplanetran2translateBy"></a>
## affineplane.tran2.translateBy(tr, vec)

Modify transformation so that its image
is translated by the given vector.
In other words it transforms points
further by the given vector.

Parameters
- tr
  - a [tran2](#affineplanetran2), a transform
- vec
  - a [vector2](#affineplanevector2), a vector `{ x, y }`

Return
- a [tran2](#affineplanetran2), a transform

<a name="affineplanetran2translateTo"></a>
## affineplane.tran2.translateTo(tr, p)

Modify the transformation so that the result maps `{ x: 0, y: 0 }`
to the given point.

Parameters
- tr
  - a [tran2](#affineplanetran2), a transform
- p
  - a [point2](#affineplanepoint2), a point `{ x, y }`

Return
- a [tran2](#affineplanetran2), a transform

<a name="affineplanetran2validate"></a>
## affineplane.tran2.validate(tr)

Check if object is a valid [tran2](#affineplanetran2).

Parameters:
- tr
  - an object

Return
- a boolean

<a name="affineplanevector2"></a>
## affineplane.vector2


<a name="affineplanevector2add"></a>
## affineplane.vector2.add(v, w)

Add two vectors. See vector.sum to add many vectors.

Parameters
- v
  - a [vector2](#affineplanevector2)
- w
  - a [vector2](#affineplanevector2)

Return
- a [vector2](#affineplanevector2)

<a name="affineplanevector2almostEqual"></a>
## affineplane.vector2.almostEqual(v, w, [epsilon])

Test if two vectors v and w are almost equal by the margin of epsilon.

Parameters
- v
  - a [vector2](#affineplanevector2)
- w
  - a [vector2](#affineplanevector2)
- epsilon
  - optional number, default to affineplane.EPSILON.
  - Set to 0 for strict comparison.

Return
- a boolean

<a name="affineplanevector2average"></a>
## affineplane.vector2.average(vs)

[affineplane.vector2](#affineplanevector2).mean(vs)

Average of the vectors.

Parameters
- vs
  - an array of [vector2](#affineplanevector2)

Return
- a [vector2](#affineplanevector2)

<a name="affineplanevector2copy"></a>
## affineplane.vector2.copy(v)

Copy vector object.

Parameters
- v
  - a [vector2](#affineplanevector2)

Return
- a [vector2](#affineplanevector2)

<a name="affineplanevector2create"></a>
## affineplane.vector2.create(x, y)

Create a vector object `{ x, y }`

Parameters
- x
  - a number. The translation along x-axis
- y
  - a number. The translation along y-axis

Return
- a [vector2](#affineplanevector2)

<a name="affineplanevector2difference"></a>
## affineplane.vector2.difference(v, w)

A vector between v and w

Parameters:
- v
  - a [vector2](#affineplanevector2)
- w
  - a [vector2](#affineplanevector2)

Return
- a [vector2](#affineplanevector2)

<a name="affineplanevector2fromArray"></a>
## affineplane.vector2.fromArray(arrp)

Create `{ x, y }` vector from array `[x, y]`

Return
- a [vector2](#affineplanevector2)

<a name="affineplanevector2fromPolar"></a>
## affineplane.vector2.fromPolar(magnitude, direction)

Create a vector from polar coordinates.

Parameters
- magnitude
  - a number, length of the vector
- direction
  - a number, angle in radians

Return
- a [vector2](#affineplanevector2)

<a name="affineplanevector2inverse"></a>
## affineplane.vector2.inverse(v)

Negate the vector.

Parameters
- v
  - a [vector2](#affineplanevector2)

Return
- a [vector2](#affineplanevector2)

<a name="affineplanevector2magnitude"></a>
## affineplane.vector2.magnitude(v)

The length of 2d vector.

Parameters
- v
  - a [vector2](#affineplanevector2)

Return
- a number

<a name="affineplanevector2max"></a>
## affineplane.vector2.max(v, w)

Element-wise maximum of two vectors.

Parameters
- v
  - a [vector2](#affineplanevector2)
- w
  - a [vector2](#affineplanevector2)

Return
- a [vector2](#affineplanevector2)

<a name="affineplanevector2min"></a>
## affineplane.vector2.min(v, w)

Element-wise minimum of two vectors

Parameters
- v
  - a [vector2](#affineplanevector2)
- w
  - a [vector2](#affineplanevector2)

Return
- a [vector2](#affineplanevector2)

<a name="affineplanevector2project"></a>
## affineplane.vector2.project(v, pr)

Project a point from a plane to another.

Parameters:
- v
  - a [vector2](#affineplanevector2)
- pr
  - a [proj2](#affineplaneproj2)

Return
- a [vector2](#affineplanevector2)

<a name="affineplanevector2rotateBy"></a>
## affineplane.vector2.rotateBy(v, radians)

Rotate vector by the given angle.

Parameters
- v
  - a [vector2](#affineplanevector2)
- radians
  - a number, from positive x-axis towards positive y-axis

Return
- a [vector2](#affineplanevector2)

<a name="affineplanevector2rotateTo"></a>
## affineplane.vector2.rotateTo(v, radians)

Rotate vector so that it points to the given angle.

Parameters
- v
  - a [vector2](#affineplanevector2)
- radians
  - a number from positive x-axis towards positive y-axis

Return
- a [vector2](#affineplanevector2)

<a name="affineplanevector2sum"></a>
## affineplane.vector2.sum(vs)

Add an array of vectors together. See vector.add to add two vectors.

Parameters
- vs
  - an array of [vector2](#affineplanevector2). The array can be empty.

Return
- a [vector2](#affineplanevector2)

<a name="affineplanevector2toArray"></a>
## affineplane.vector2.toArray(v)

Get the vector object as an array.

Parameters:
- v
  - a [vector2](#affineplanevector2)

Return
- an array `[x, y]`

<a name="affineplanevector2toPolar"></a>
## affineplane.vector2.toPolar(v)

Get polar coordinates of a vector.

Parameters
- v
  - a [vector2](#affineplanevector2)

Return
- object, polar coordinates `{ magnitude, direction }` where the direction is an angle in radians.

<a name="affineplanevector2validate"></a>
## affineplane.vector2.validate(v)

Check if object is a valid [vector2](#affineplanevector2).

Parameter
- v
  - an object

Return
- a boolean

<a name="affineplanevector3"></a>
## affineplane.vector3

Three-dimensional vector.

<a name="affineplanevector3add"></a>
## affineplane.vector3.add(v, w)


<a name="affineplanevector3copy"></a>
## affineplane.vector3.copy(v)


<a name="affineplanevector3create"></a>
## affineplane.vector3.create(x, y, z)


<a name="affineplanevector3toArray"></a>
## affineplane.vector3.toArray(v)


<a name="affineplanevector3validate"></a>
## affineplane.vector3.validate(v)

Check if object is a valid vector3.

Parameter
- v
  - an object

Return
- a boolean

<a name="affineplanetran2toVector3r"></a>
## affineplane.tran2.toVector3r(tr, vanishing)

A perspective projection from transformation to vector3r

Parameters
- tr
  - a [tran2](#affineplanetran2)
- vanishing
  - a [point2](#affineplanepoint2), the vanishing point.

Return
- a vector3r

<a name="affineplanehelm2fromVector3r"></a>
## affineplane.helm2.fromVector3r(vec3r, vanishing)

Convert a 3D vector with rotation to a [tran2](#affineplanetran2). Essentially,
the z-coordinate will be projected to scaling at z=0.

Parameters:
- vec3r
  - a vector3r, a perspective point, a 3D vector with rotation.
  - Vanishing point and { vec3r.x, vec3r.y } must have the same basis.
- vanishing
  - a [point2](#affineplanepoint2)

Return
- a [tran2](#affineplanetran2)

<a name="affineplaneversion"></a>
## affineplane.version

Package version string, for example '1.2.3'. Uses semantic versioning.

<p style="text-align: right">
<a href="#top">&uarr; Back To Top</a>
</p>
