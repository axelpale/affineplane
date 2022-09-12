<a name="top"></a>
# Affineplane API Documentation v2.4.0

Welcome to affineplane API reference documentation. See also [Usage](https://axelpale.github.io/affineplane/) and [GitHub](https://github.com/axelpale/affineplane) for introduction and source code. The docs are generated with [yamdog](https://axelpale.github.io/yamdog/).


<a name="affineplane"></a>
## [affineplane](#affineplane)

The [affineplane](#affineplane) module provides functions for affine 2D geometry.
The functions are grouped in the following submodules.

- [affineplane.dir2](#affineplanedir2)
- [affineplane.dist2](#affineplanedist2)
- [affineplane.epsilon](#affineplaneepsilon)
- [affineplane.helm2](#affineplanehelm2)
- [affineplane.helm3](#affineplanehelm3)
- [affineplane.line2](#affineplaneline2)
- [affineplane.line3](#affineplaneline3)
- [affineplane.path2](#affineplanepath2)
- [affineplane.plane2](#affineplaneplane2)
- [affineplane.plane3](#affineplaneplane3)
- [affineplane.point2](#affineplanepoint2)
- [affineplane.point3](#affineplanepoint3)
- [affineplane.poly2](#affineplanepoly2)
- [affineplane.size2](#affineplanesize2)
- [affineplane.vec2](#affineplanevec2)
- [affineplane.vec3](#affineplanevec3)
- [affineplane.vector2](#affineplanevector2)
- [affineplane.vector3](#affineplanevector3)
- [affineplane.version](#affineplaneversion)


Source: [lib/index.js](https://github.com/axelpale/affineplane/blob/main/lib/index.js)

<a name="affineplanedir2"></a>
## [affineplane](#affineplane).[dir2](#affineplanedir2)

Number in ]-π, π]

A direction is just an angle number in radians clockwise from
the positive x-axis. The direction is capped between -Pi (exclusive)
and Pi (inclusive).

When a direction is transited between planes, only the rotation of
the coordinate space affects the direction.

![Direction angle](docs/geometry_direction.png)

- [affineplane.dir2.create](#affineplanedir2create)
- [affineplane.dir2.transitFrom](#affineplanedir2transitfrom)
- [affineplane.dir2.transitTo](#affineplanedir2transitto)


Source: [dir2/index.js](https://github.com/axelpale/affineplane/blob/main/lib/dir2/index.js)

<a name="affineplanedir2create"></a>
## [affineplane](#affineplane).[dir2](#affineplanedir2).[create](#affineplanedir2create)(r)

Create a new direction. Angles outside ]-π,π] are mapped
within the limits with modulus operators.

**Parameters:**
- *r*
  - a number. The angle in radians.

**Returns:**
- a number. The angle in radians between ]-PI, +PI]

Source: [create.js](https://github.com/axelpale/affineplane/blob/main/lib/dir2/create.js)

<a name="affineplanedir2transitfrom"></a>
## [affineplane](#affineplane).[dir2](#affineplanedir2).[transitFrom](#affineplanedir2transitfrom)(dir, source)

Transit a direction angle from the source plane
to the reference plane.

**Parameters:**
- *dir*
  - a number, a dir2 angle in radians on the source plane.
- *source*
  - a [plane2](#affineplaneplane2), the source plane, represented on the reference plane.

**Returns:**
- a number, a dir2 angle, represented on the reference plane.

Source: [transitFrom.js](https://github.com/axelpale/affineplane/blob/main/lib/dir2/transitFrom.js)

<a name="affineplanedir2transitto"></a>
## [affineplane](#affineplane).[dir2](#affineplanedir2).[transitTo](#affineplanedir2transitto)(dir, target)

Transit a dir2 to a target plane.
In other words, represent the direction
in the coordinate system of the target plane.

**Parameters:**
- *dir*
  - a number, a dir2 on the reference plane.
- *target*
  - a [plane2](#affineplaneplane2), the target plane, represented on the reference plane.

**Returns:**
- a number, a dir2 on the target plane.

Source: [transitTo.js](https://github.com/axelpale/affineplane/blob/main/lib/dir2/transitTo.js)

<a name="affineplanedist2"></a>
## [affineplane](#affineplane).[dist2](#affineplanedist2)

The distance measure is a directionless, always positive number.
If transited between planes, only a change in the coordinate scale
affects the distance. Rotation or translation of the plane does not
change the distance measure.

![Distance transited between planes](docs/projection_distance_2d.png)

- [affineplane.dist2.create](#affineplanedist2create)
- [affineplane.dist2.transitFrom](#affineplanedist2transitfrom)
- [affineplane.dist2.transitTo](#affineplanedist2transitto)


Source: [dist2/index.js](https://github.com/axelpale/affineplane/blob/main/lib/dist2/index.js)

<a name="affineplanedist2create"></a>
## [affineplane](#affineplane).[dist2](#affineplanedist2).[create](#affineplanedist2create)(d)

Create a measure. Basically it is just the absolute value of the number.

**Parameters:**
- *d*
  - a number

**Returns:**
- a number, always zero or positive.

Source: [create.js](https://github.com/axelpale/affineplane/blob/main/lib/dist2/create.js)

<a name="affineplanedist2transitfrom"></a>
## [affineplane](#affineplane).[dist2](#affineplanedist2).[transitFrom](#affineplanedist2transitfrom)(dist, source)

Transit a distance from the source plane
to the reference plane.

**Parameters:**
- *dist*
  - a number, a dist2 distance measure on the source plane.
- *source*
  - a [plane2](#affineplaneplane2), the source plane, represented on the reference plane.

**Returns:**
- a number, a dist2, represented on the reference plane.

Source: [transitFrom.js](https://github.com/axelpale/affineplane/blob/main/lib/dist2/transitFrom.js)

<a name="affineplanedist2transitto"></a>
## [affineplane](#affineplane).[dist2](#affineplanedist2).[transitTo](#affineplanedist2transitto)(dist, target)

Transit a dist2 to a target plane.
In other words, represent the distance
in the coordinate system of the plane.

**Parameters:**
- *dist*
  - a number, a dist2 on the reference plane.
- *target*
  - a [plane2](#affineplaneplane2), the target plane, represented on the reference plane.

**Returns:**
- a number, a dist2 on the target plane.

Source: [transitTo.js](https://github.com/axelpale/affineplane/blob/main/lib/dist2/transitTo.js)

<a name="affineplaneepsilon"></a>
## [affineplane](#affineplane).[epsilon](#affineplaneepsilon)

Default margin for non-strict numeric equality.
For example `0.0000000001`.

Source: [epsilon.js](https://github.com/axelpale/affineplane/blob/main/lib/epsilon.js)

<a name="affineplanehelm2"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2)

Provides functions for a special kind of 2D transformation matrices,
*two-dimensional Helmert transformations*.
These matrices represent translation, rotation, and uniform dilation.
They are also known as *affine non-reflective similarity transformations*.

The functions expect the transformation as an object with properties
`{ a, b, x, y }`

Like [vec2](#affineplanevec2) and unlike [point2](#affineplanepoint2), [helm2](#affineplanehelm2) represents movement.
Therefore it has no single position in space,
and is not affected by plane translations.
See [affineplane.plane2](#affineplaneplane2) for a positional variant.

- [affineplane.helm2.addDilation](#affineplanehelm2adddilation)
- [affineplane.helm2.addRotation](#affineplanehelm2addrotation)
- [affineplane.helm2.almostEqual](#affineplanehelm2almostequal)
- [affineplane.helm2.almostEquals](#affineplanehelm2almostequals)
- [affineplane.helm2.clone](#affineplanehelm2clone)
- [affineplane.helm2.combine](#affineplanehelm2combine)
- [affineplane.helm2.compose](#affineplanehelm2compose)
- [affineplane.helm2.copy](#affineplanehelm2copy)
- [affineplane.helm2.create](#affineplanehelm2create)
- [affineplane.helm2.det](#affineplanehelm2det)
- [affineplane.helm2.determinant](#affineplanehelm2determinant)
- [affineplane.helm2.equal](#affineplanehelm2equal)
- [affineplane.helm2.equals](#affineplanehelm2equals)
- [affineplane.helm2.fromArray](#affineplanehelm2fromarray)
- [affineplane.helm2.fromFeatures](#affineplanehelm2fromfeatures)
- [affineplane.helm2.fromPolar](#affineplanehelm2frompolar)
- [affineplane.helm2.getDilation](#affineplanehelm2getdilation)
- [affineplane.helm2.getRotation](#affineplanehelm2getrotation)
- [affineplane.helm2.getScale](#affineplanehelm2getscale)
- [affineplane.helm2.getTranslation](#affineplanehelm2gettranslation)
- [affineplane.helm2.HALF](#affineplanehelm2half)
- [affineplane.helm2.I](#affineplanehelm2i)
- [affineplane.helm2.IDENTITY](#affineplanehelm2identity)
- [affineplane.helm2.inverse](#affineplanehelm2inverse)
- [affineplane.helm2.invert](#affineplanehelm2invert)
- [affineplane.helm2.multiply](#affineplanehelm2multiply)
- [affineplane.helm2.projectTo](#affineplanehelm2projectto)
- [affineplane.helm2.ROT0](#affineplanehelm2rot0)
- [affineplane.helm2.ROT180](#affineplanehelm2rot180)
- [affineplane.helm2.ROT270](#affineplanehelm2rot270)
- [affineplane.helm2.ROT45](#affineplanehelm2rot45)
- [affineplane.helm2.ROT90](#affineplanehelm2rot90)
- [affineplane.helm2.rotateBy](#affineplanehelm2rotateby)
- [affineplane.helm2.scaleBy](#affineplanehelm2scaleby)
- [affineplane.helm2.setDilation](#affineplanehelm2setdilation)
- [affineplane.helm2.setRotation](#affineplanehelm2setrotation)
- [affineplane.helm2.setTranslation](#affineplanehelm2settranslation)
- [affineplane.helm2.setTranslation](#affineplanehelm2settranslation)
- [affineplane.helm2.SINGULAR](#affineplanehelm2singular)
- [affineplane.helm2.snapRotation](#affineplanehelm2snaprotation)
- [affineplane.helm2.solveLeft](#affineplanehelm2solveleft)
- [affineplane.helm2.solveRight](#affineplanehelm2solveright)
- [affineplane.helm2.toArray](#affineplanehelm2toarray)
- [affineplane.helm2.toMatrix](#affineplanehelm2tomatrix)
- [affineplane.helm2.toString](#affineplanehelm2tostring)
- [affineplane.helm2.transform](#affineplanehelm2transform)
- [affineplane.helm2.transitFrom](#affineplanehelm2transitfrom)
- [affineplane.helm2.UNIT](#affineplanehelm2unit)
- [affineplane.helm2.validate](#affineplanehelm2validate)
- [affineplane.helm2.X2](#affineplanehelm2x2)


Source: [helm2/index.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/index.js)

<a name="affineplanehelm2adddilation"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[addDilation](#affineplanehelm2adddilation)(tr, delta)

Increase the scale multiplier of the transformation by addition.
The rotation and translation properties are preserved.

**Parameters:**
- *tr*
  - a [helm2](#affineplanehelm2)
- *delta*
  - a number, the increment in scaling.

**Returns:**
- a [helm2](#affineplanehelm2)

Source: [addDilation.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/addDilation.js)

<a name="affineplanehelm2addrotation"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[addRotation](#affineplanehelm2addrotation)(tr, angle)

Increase rotation angle of the transformation by angle.
The dilation and translation properties are preserved.

**Parameters:**
- *tr*
  - a [helm2](#affineplanehelm2)
- *rotation*
  - a number in radians

**Returns:**
- a [helm2](#affineplanehelm2)

Source: [addRotation.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/addRotation.js)

<a name="affineplanehelm2almostequal"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[almostEqual](#affineplanehelm2almostequal)(tr, ts, [epsilon])

Are two transforms almost equal? Return true if a matrix norm
of the difference is smaller than epsilon. We use modified
[L1 norm](https://mathworld.wolfram.com/L1-Norm.html) aka
Manhattan Distance to compute the difference.

**Parameters:**
- *tr*
  - a [helm2](#affineplanehelm2), a transform
- *ts*
  - a [helm2](#affineplanehelm2), a transform
- *epsilon*
  - optional number, default to [affineplane.epsilon](#affineplaneepsilon). Set to 0 for strict comparison.

**Returns:**
- a boolean

Aliases: [affineplane.helm2.almostEquals](#affineplanehelm2almostequals)

Source: [almostEqual.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/almostEqual.js)

<a name="affineplanehelm2almostequals"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[almostEquals](#affineplanehelm2almostequals)

Alias of [affineplane.helm2.almostEqual](#affineplanehelm2almostequal)

Source: [almostEqual.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/almostEqual.js)

<a name="affineplanehelm2clone"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[clone](#affineplanehelm2clone)

Alias of [affineplane.helm2.copy](#affineplanehelm2copy)

Source: [copy.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/copy.js)

<a name="affineplanehelm2combine"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[combine](#affineplanehelm2combine)

Alias of [affineplane.helm2.compose](#affineplanehelm2compose), [affineplane.helm2.multiply](#affineplanehelm2multiply)

Source: [compose.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/compose.js)

<a name="affineplanehelm2compose"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[compose](#affineplanehelm2compose)(tr, ts)

Multiply transformation matrix tr from
the right with the given transformation matrix ts.
In other words, transform the image of ts by tr.

**Parameters:**
- *tr*
  - a [helm2](#affineplanehelm2)
- *ts*
  - a [helm2](#affineplanehelm2)

**Returns:**
- a [helm2](#affineplanehelm2)

Aliases: [affineplane.helm2.combine](#affineplanehelm2combine), [affineplane.helm2.multiply](#affineplanehelm2multiply)

Source: [compose.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/compose.js)

<a name="affineplanehelm2copy"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[copy](#affineplanehelm2copy)(tr)

**Parameters:**
- *tr*
  - a [helm2](#affineplanehelm2), a transform

**Returns:**
- a [helm2](#affineplanehelm2), a transform

Aliases: [affineplane.helm2.clone](#affineplanehelm2clone)

Source: [copy.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/copy.js)

<a name="affineplanehelm2create"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[create](#affineplanehelm2create)(a, b, x, y)

Create a 2D non-reflective similarity transform object.

**Parameters:**
- *a*
  - a number. The diagonal of linear transformation.
- *b*
  - a number. The upper and lower triangle of lin. transf.
- *x*
  - a number. The translation towards x
- *y*
  - a number. The translation towards y

**Returns:**
- a [helm2](#affineplanehelm2), a transform object

Source: [create.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/create.js)

<a name="affineplanehelm2det"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[det](#affineplanehelm2det)(tr)

The matrix determinant of the transformation. If the determinant equals
zero then the matrix cannot be inverted and thus is not a valid
transformation. In practice, determinants close to zero are also
problematic due to floating point arithmetics.

**Parameters:**
- *tr*
  - a [helm2](#affineplanehelm2)

**Returns:**
- a number, the determinant.

Aliases: [affineplane.helm2.determinant](#affineplanehelm2determinant)

Source: [det.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/det.js)

<a name="affineplanehelm2determinant"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[determinant](#affineplanehelm2determinant)(tr)

Alias of [affineplane.helm2.det](#affineplanehelm2det)

Source: [det.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/det.js)

<a name="affineplanehelm2equal"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[equal](#affineplanehelm2equal)(tr, ts)

Are transforms exactly equal?
Note that due to floating-point arithmetics, computation
might cause exact equality to be broken.
See [affineplane.helm2.almostEqual](#affineplanehelm2almostequal) for relaxed alternative.

**Parameters:**
- *tr*
  - a [helm2](#affineplanehelm2), a transform
- *ts*
  - a [helm2](#affineplanehelm2), a transform

**Returns:**
- a boolean

Aliases: [affineplane.helm2.equals](#affineplanehelm2equals)

Source: [equal.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/equal.js)

<a name="affineplanehelm2equals"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[equals](#affineplanehelm2equals)

Alias of [affineplane.helm2.equal](#affineplanehelm2equal)

Source: [equal.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/equal.js)

<a name="affineplanehelm2fromarray"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[fromArray](#affineplanehelm2fromarray)(abxy)

Create an affine similarity transform from 4-element array.

**Parameters:**
- *abxy*
  - an array with four number elements `[a, b, x, y]`

**Returns:**
- a [helm2](#affineplanehelm2), a similarity transform.

Source: [fromArray.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/fromArray.js)

<a name="affineplanehelm2fromfeatures"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[fromFeatures](#affineplanehelm2fromfeatures)(feats)

Create a [helm2](#affineplanehelm2) transformation from human-readable features.

**Parameters:**
- *feats*
  - object with properties:
    - *dilation*
      - a number, a multiplier
    - *rotation*
      - a number, in radians
    - *translation*
      - a [vec2](#affineplanevec2), the displacement vector

**Returns:**
- a [helm2](#affineplanehelm2)

Source: [fromFeatures.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/fromFeatures.js)

<a name="affineplanehelm2frompolar"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[fromPolar](#affineplanehelm2frompolar)(scale, rotation, tx, ty)

Create a transform object by using scale magnitude,
rotation angle, and translation.

**Parameters:**
- *scale*
  - a number, the scaling factor
- *rotation*
  - a number, rotation in radians from positive x-axis towards pos. y-axis.
- *tx*
  - optional number, translation toward positive x. Default 0.
- *ty*
  - optional number, translation toward positive y. Default 0.

**Returns:**
- a [helm2](#affineplanehelm2), a transform object

Precondition:
- scale must be positive

Source: [fromPolar.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/fromPolar.js)

<a name="affineplanehelm2getdilation"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[getDilation](#affineplanehelm2getdilation)(tr)

Get the dilation component of the transformation.

**Parameters:**
- *tr*
  - a [helm2](#affineplanehelm2)

**Returns:**
- a number, the scale multiplier.

Aliases: [affineplane.helm2.getScale](#affineplanehelm2getscale)

Source: [getDilation.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/getDilation.js)

<a name="affineplanehelm2getrotation"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[getRotation](#affineplanehelm2getrotation)(tr)

Get the rotation component of the transform in radians.

**Parameters:**
- *tr*
  - a [helm2](#affineplanehelm2)

**Returns:**
- a number, in radians

Source: [getRotation.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/getRotation.js)

<a name="affineplanehelm2getscale"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[getScale](#affineplanehelm2getscale)

Alias of [affineplane.helm2.getDilation](#affineplanehelm2getdilation)

Source: [getDilation.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/getDilation.js)

<a name="affineplanehelm2gettranslation"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[getTranslation](#affineplanehelm2gettranslation)(tr)

Get translation component of the transformation as a vector.

**Parameters:**
- *tr*
  - a [helm2](#affineplanehelm2)

**Returns:**
- a [vec2](#affineplanevec2)

Source: [getTranslation.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/getTranslation.js)

<a name="affineplanehelm2half"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[HALF](#affineplanehelm2half)

Scaling to half size.

Source: [helm2/index.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/index.js)

<a name="affineplanehelm2i"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[I](#affineplanehelm2i)

Identity transform, a kind of multiplication by 1.

Aliases: [affineplane.helm2.IDENTITY](#affineplanehelm2identity)

Source: [helm2/index.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/index.js)

<a name="affineplanehelm2identity"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[IDENTITY](#affineplanehelm2identity)

Alias of [affineplane.helm2.I](#affineplanehelm2i)

Source: [helm2/index.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/index.js)

<a name="affineplanehelm2inverse"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[inverse](#affineplanehelm2inverse)(tr)

Invert the transform. A transform from B to C
becomes a transform from C to B.

**Parameters:**
- *tr*
  - a [helm2](#affineplanehelm2)

**Returns:**
- a [helm2](#affineplanehelm2), inversed transform

Aliases: [affineplane.helm2.invert](#affineplanehelm2invert)

Source: [inverse.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/inverse.js)

<a name="affineplanehelm2invert"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[invert](#affineplanehelm2invert)(tr)

Alias of [affineplane.helm2.inverse](#affineplanehelm2inverse)

Source: [inverse.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/inverse.js)

<a name="affineplanehelm2multiply"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[multiply](#affineplanehelm2multiply)

Alias of [affineplane.helm2.compose](#affineplanehelm2compose), [affineplane.helm2.combine](#affineplanehelm2combine)

Source: [compose.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/compose.js)

<a name="affineplanehelm2projectto"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[projectTo](#affineplanehelm2projectto)(tr, plane, camera)

Project transformation onto a plane.
If camera is given perspectively.

**Parameters:**
- *tr*
  - a [helm2](#affineplanehelm2) on the reference plane z=0.
- *plane*
  - a [plane3](#affineplaneplane3) in the reference space. The projection plane.
- *camera*
  - optional [point3](#affineplanepoint3) in the reference space. The camera position. Set for perspective projection.

**Returns:**
- a [helm2](#affineplanehelm2) on the projection plane.

Source: [projectTo.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/projectTo.js)

<a name="affineplanehelm2rot0"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[ROT0](#affineplanehelm2rot0)

Zero angle rotation.

Source: [helm2/index.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/index.js)

<a name="affineplanehelm2rot180"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[ROT180](#affineplanehelm2rot180)

Rotation of 180 degrees.

Source: [helm2/index.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/index.js)

<a name="affineplanehelm2rot270"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[ROT270](#affineplanehelm2rot270)

Clockwise rotation of 270 degrees.

Source: [helm2/index.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/index.js)

<a name="affineplanehelm2rot45"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[ROT45](#affineplanehelm2rot45)

Clockwise rotation of 45 degrees.

Source: [helm2/index.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/index.js)

<a name="affineplanehelm2rot90"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[ROT90](#affineplanehelm2rot90)

Clockwise rotation of 90 degrees.

Source: [helm2/index.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/index.js)

<a name="affineplanehelm2rotateby"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[rotateBy](#affineplanehelm2rotateby)(tr, radians)

Rotate image of the transform by the given radians.
This changes the direction of the translation but
preserves the scaling and rotating effects.

**Parameters:**
- *tr*
  - a [helm2](#affineplanehelm2), a transform
- *radians*
  - a number, angle in radians

**Returns:**
- a [helm2](#affineplanehelm2), a transform

Source: [rotateBy.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/rotateBy.js)

<a name="affineplanehelm2scaleby"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[scaleBy](#affineplanehelm2scaleby)(tr, multiplier)

Scale image of the transform by the given multiplier.
Dilation and translation are multiplied,
rotation and translation direction are preserved.

**Parameters:**
- *tr*
  - a [helm2](#affineplanehelm2), a transform on the reference plane.
- *multiplier*
  - a number

**Returns:**
- a [helm2](#affineplanehelm2), a transform

Source: [scaleBy.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/scaleBy.js)

<a name="affineplanehelm2setdilation"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[setDilation](#affineplanehelm2setdilation)(tr, dilation)

Replace scaling of the transformation.
The rotation and translation properties are preserved.

**Parameters:**
- *tr*
  - a [helm2](#affineplanehelm2)
- *dilation*
  - a number

**Returns:**
- a [helm2](#affineplanehelm2)

Source: [setDilation.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/setDilation.js)

<a name="affineplanehelm2setrotation"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[setRotation](#affineplanehelm2setrotation)(tr, angle)

Replace rotation angle of the transformation.
The dilation and translation properties are preserved.

**Parameters:**
- *tr*
  - a [helm2](#affineplanehelm2)
- *rotation*
  - a number in radians

**Returns:**
- a [helm2](#affineplanehelm2)

Source: [setRotation.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/setRotation.js)

<a name="affineplanehelm2settranslation"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[setTranslation](#affineplanehelm2settranslation)(tr, vec)

Increase translation property of the transformation by a vector.
The dilation and rotation properties are preserved.

**Parameters:**
- *tr*
  - a [helm2](#affineplanehelm2)
- *vec*
  - a [vec2](#affineplanevec2), the new translation vector

**Returns:**
- a [helm2](#affineplanehelm2)

Source: [addTranslation.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/addTranslation.js)

<a name="affineplanehelm2settranslation"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[setTranslation](#affineplanehelm2settranslation)(tr, vec)

Replace translation property of the transformation.
The dilation and rotation properties are preserved.

**Parameters:**
- *tr*
  - a [helm2](#affineplanehelm2)
- *vec*
  - a [vec2](#affineplanevec2), the new translation vector

**Returns:**
- a [helm2](#affineplanehelm2)

Source: [setTranslation.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/setTranslation.js)

<a name="affineplanehelm2singular"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[SINGULAR](#affineplanehelm2singular)

Singular transform, resembles multiplication by 0.
Note that singular transformations are note valid affine transformations
because singularity cannot be inverted.
For example with numbers, you can multiply 2 by 0 to produce 0 but
you cannot multiply 0 to produce the original 2.

Source: [helm2/index.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/index.js)

<a name="affineplanehelm2snaprotation"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[snapRotation](#affineplanehelm2snaprotation)(tr)

Round the rotation property of the transformation
to nearest orthogonal angle 0, 90, 180, and 270 deg.
Note that if the given transform has exact 45, 135, 225, or 315 deg
rotation then the nearest orthogonal angle is arbitrarily either the next
or previous orthogonal angle due to the variation caused by
floating-point arithmetics.

**Parameters:**
- *tr*
  - a [helm2](#affineplanehelm2)

**Returns:**
- a [helm2](#affineplanehelm2)

Source: [snapRotation.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/snapRotation.js)

<a name="affineplanehelm2solveleft"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[solveLeft](#affineplanehelm2solveleft)(tb, tc)

Given transforms B, C, find transform A, where AB = C.
Given that B is invertible, then A = C * iB.

**Parameters:**
- *tb*
  - a [helm2](#affineplanehelm2)
- *tc*
  - a [helm2](#affineplanehelm2)

**Returns:**
- a [helm2](#affineplanehelm2), a transform

Source: [solveLeft.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/solveLeft.js)

<a name="affineplanehelm2solveright"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[solveRight](#affineplanehelm2solveright)(ta, tc)

Given the transforms A and C, find the transform B, where A * B = C.
Given that A is invertible, then B = iA * C.

**Parameters:**
- *ta*
  - a [helm2](#affineplanehelm2)
- *tc*
  - a [helm2](#affineplanehelm2)

**Returns:**
- a [helm2](#affineplanehelm2), a transform

Source: [solveRight.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/solveRight.js)

<a name="affineplanehelm2toarray"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[toArray](#affineplanehelm2toarray)(tr)

**Returns:** an array representation of the transformation.
Compatible with [affineplane.helm2.fromArray](#affineplanehelm2fromarray).

**Parameters:**
- *tr*
  - a [helm2](#affineplanehelm2)

**Returns:**
- an array, `[a, b, x, y]`

Source: [toArray.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/toArray.js)

<a name="affineplanehelm2tomatrix"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[toMatrix](#affineplanehelm2tomatrix)(tr)

Get the similarity transformation matrix
in the format common to other APIs, including:
- WebKitCSSMatrix alias DOMMatrix
- kld-affine
- MDN documentation in some parts

**Parameters:**
- *tr*
  - a [helm2](#affineplanehelm2)

**Returns:**
- `{ a, b, c, d, e, f }`

Source: [toMatrix.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/toMatrix.js)

<a name="affineplanehelm2tostring"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[toString](#affineplanehelm2tostring)(tr)

Convert the transformation to a string compatible with the CSS
transform-function data type, for example `matrix(1, 2, -2, 1, 3, 4)`.
Together with [affineplane.helm2](#affineplanehelm2).fromString(...), this method enables
[helm2](#affineplanehelm2) serialization to and from strings.

**Parameters:**
- *tr*
  - a [helm2](#affineplanehelm2)

**Returns:**
- a string, CSS transform

Source: [toString.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/toString.js)

<a name="affineplanehelm2transform"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[transform](#affineplanehelm2transform)(tr, ts)

Multiply transformation matrix tr from
the left with the given transformation matrix ts.
In other words, transform the image of tr by ts.

For multiplication from right, see [affineplane.helm2.compose](#affineplanehelm2compose).

**Parameters:**
- *tr*
  - a [helm2](#affineplanehelm2)
- *ts*
  - a [helm2](#affineplanehelm2)

**Returns:**
- a [helm2](#affineplanehelm2)

Source: [transform.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/transform.js)

<a name="affineplanehelm2transitfrom"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[transitFrom](#affineplanehelm2transitfrom)(tr, plane)

Transit a [helm2](#affineplanehelm2) from the source plane
to the reference plane. Note that:
- scale and rotation of the plane affects only the translating property of [helm2](#affineplanehelm2), so that the direction of translation is preserved.
- translation of the plane does not affect [helm2](#affineplanehelm2) at all.
- scaling and rotation properties of [helm2](#affineplanehelm2) are preserved as is.

**Parameters:**
- *tr*
  - a [helm2](#affineplanehelm2) transformation on the source plane.
- *plane*
  - a [plane2](#affineplaneplane2), the source plane, represented on the reference plane.

**Returns:**
- a [helm2](#affineplanehelm2), represented on the reference plane.

Source: [transitFrom.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/transitFrom.js)

<a name="affineplanehelm2unit"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[UNIT](#affineplanehelm2unit)

A unit transform. Scales by sqrt(2), rotates by 45deg,
and translates by vector (1,1)

Source: [helm2/index.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/index.js)

<a name="affineplanehelm2validate"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[validate](#affineplanehelm2validate)(tr)

Check if object is a valid [helm2](#affineplanehelm2).

**Parameters:**
- *tr*
  - an object

**Returns:**
- a boolean

Source: [validate.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/validate.js)

<a name="affineplanehelm2x2"></a>
## [affineplane](#affineplane).[helm2](#affineplanehelm2).[X2](#affineplanehelm2x2)

Scaling to double size.

Source: [helm2/index.js](https://github.com/axelpale/affineplane/blob/main/lib/helm2/index.js)

<a name="affineplanehelm3"></a>
## [affineplane](#affineplane).[helm3](#affineplanehelm3)

Functions for a special 3D affine transformation that consists of
a translation in 3D, rotation around z-axis, and uniform scaling,
alias dilation.
In other words, the transformation is a 2D Helmert transformation
with additional ability to translate along z-axis, hence the name.

A [helm3](#affineplanehelm3) is an object `{ a, b, x, y, z }`

Like [vec3](#affineplanevec3) and unlike [point3](#affineplanepoint3), [helm3](#affineplanehelm3) represents movement.
Therefore it has no single position in space,
and is not affected by plane translations.
See [affineplane.plane3](#affineplaneplane3) for a positional variant.

- [affineplane.helm3.addDilation](#affineplanehelm3adddilation)
- [affineplane.helm3.addRotation](#affineplanehelm3addrotation)
- [affineplane.helm3.addTranslation](#affineplanehelm3addtranslation)
- [affineplane.helm3.almostEqual](#affineplanehelm3almostequal)
- [affineplane.helm3.almostEquals](#affineplanehelm3almostequals)
- [affineplane.helm3.clone](#affineplanehelm3clone)
- [affineplane.helm3.combine](#affineplanehelm3combine)
- [affineplane.helm3.compose](#affineplanehelm3compose)
- [affineplane.helm3.copy](#affineplanehelm3copy)
- [affineplane.helm3.create](#affineplanehelm3create)
- [affineplane.helm3.det](#affineplanehelm3det)
- [affineplane.helm3.determinant](#affineplanehelm3determinant)
- [affineplane.helm3.equal](#affineplanehelm3equal)
- [affineplane.helm3.equals](#affineplanehelm3equals)
- [affineplane.helm3.fromArray](#affineplanehelm3fromarray)
- [affineplane.helm3.fromFeatures](#affineplanehelm3fromfeatures)
- [affineplane.helm3.getDilation](#affineplanehelm3getdilation)
- [affineplane.helm3.getRotation](#affineplanehelm3getrotation)
- [affineplane.helm3.getScale](#affineplanehelm3getscale)
- [affineplane.helm3.getTranslation](#affineplanehelm3gettranslation)
- [affineplane.helm3.HALF](#affineplanehelm3half)
- [affineplane.helm3.I](#affineplanehelm3i)
- [affineplane.helm3.IDENTITY](#affineplanehelm3identity)
- [affineplane.helm3.inverse](#affineplanehelm3inverse)
- [affineplane.helm3.invert](#affineplanehelm3invert)
- [affineplane.helm3.projectTo](#affineplanehelm3projectto)
- [affineplane.helm3.ROT0](#affineplanehelm3rot0)
- [affineplane.helm3.ROT180](#affineplanehelm3rot180)
- [affineplane.helm3.ROT270](#affineplanehelm3rot270)
- [affineplane.helm3.ROT45](#affineplanehelm3rot45)
- [affineplane.helm3.ROT90](#affineplanehelm3rot90)
- [affineplane.helm3.rotateBy](#affineplanehelm3rotateby)
- [affineplane.helm3.scaleBy](#affineplanehelm3scaleby)
- [affineplane.helm3.setDilation](#affineplanehelm3setdilation)
- [affineplane.helm3.setRotation](#affineplanehelm3setrotation)
- [affineplane.helm3.setTranslation](#affineplanehelm3settranslation)
- [affineplane.helm3.SINGULAR](#affineplanehelm3singular)
- [affineplane.helm3.toArray](#affineplanehelm3toarray)
- [affineplane.helm3.toMatrix](#affineplanehelm3tomatrix)
- [affineplane.helm3.transitFrom](#affineplanehelm3transitfrom)
- [affineplane.helm3.UNIT](#affineplanehelm3unit)
- [affineplane.helm3.validate](#affineplanehelm3validate)
- [affineplane.helm3.X2](#affineplanehelm3x2)
- [affineplane.helm3.ZERO](#affineplanehelm3zero)


Source: [helm3/index.js](https://github.com/axelpale/affineplane/blob/main/lib/helm3/index.js)

<a name="affineplanehelm3adddilation"></a>
## [affineplane](#affineplane).[helm3](#affineplanehelm3).[addDilation](#affineplanehelm3adddilation)(tr, delta)

Increase the scale multiplier of the transformation by addition.
The rotation and translation properties are preserved.

**Parameters:**
- *tr*
  - a [helm3](#affineplanehelm3)
- *delta*
  - a number, the increment in scaling.

**Returns:**
- a [helm3](#affineplanehelm3)

Source: [addDilation.js](https://github.com/axelpale/affineplane/blob/main/lib/helm3/addDilation.js)

<a name="affineplanehelm3addrotation"></a>
## [affineplane](#affineplane).[helm3](#affineplanehelm3).[addRotation](#affineplanehelm3addrotation)(tr, angle)

Increase rotation angle of the transformation by an angle.
The dilation and translation properties are preserved.

**Parameters:**
- *tr*
  - a [helm3](#affineplanehelm3)
- *rotation*
  - a number in radians

**Returns:**
- a [helm3](#affineplanehelm3)

Source: [addRotation.js](https://github.com/axelpale/affineplane/blob/main/lib/helm3/addRotation.js)

<a name="affineplanehelm3addtranslation"></a>
## [affineplane](#affineplane).[helm3](#affineplanehelm3).[addTranslation](#affineplanehelm3addtranslation)(tr, vec)

Modify transformation so that its image
is translated by the given vector.
In other words it transforms points
further by the given vector.

**Parameters:**
- *tr*
  - a [helm3](#affineplanehelm3), a transform
- *vec*
  - a [vec2](#affineplanevec2) or [vec3](#affineplanevec3)

**Returns:**
- a [helm3](#affineplanehelm3), a transform

Source: [addTranslation.js](https://github.com/axelpale/affineplane/blob/main/lib/helm3/addTranslation.js)

<a name="affineplanehelm3almostequal"></a>
## [affineplane](#affineplane).[helm3](#affineplanehelm3).[almostEqual](#affineplanehelm3almostequal)(tr, ts, [epsilon])

Are two transforms almost equal? Return true if a matrix norm
of the difference is smaller than epsilon. We use modified
[L1 norm](https://mathworld.wolfram.com/L1-Norm.html) aka
Manhattan Distance to compute the difference.

**Parameters:**
- *tr*
  - a [helm3](#affineplanehelm3), a transform
- *ts*
  - a [helm3](#affineplanehelm3), a transform
- *epsilon*
  - optional number, default to [affineplane.epsilon](#affineplaneepsilon). Set to 0 for strict comparison.

**Returns:**
- a boolean, true if equal

Aliases: [affineplane.helm3.almostEquals](#affineplanehelm3almostequals)

Source: [almostEqual.js](https://github.com/axelpale/affineplane/blob/main/lib/helm3/almostEqual.js)

<a name="affineplanehelm3almostequals"></a>
## [affineplane](#affineplane).[helm3](#affineplanehelm3).[almostEquals](#affineplanehelm3almostequals)

Alias of [affineplane.helm3.almostEqual](#affineplanehelm3almostequal)

Source: [almostEqual.js](https://github.com/axelpale/affineplane/blob/main/lib/helm3/almostEqual.js)

<a name="affineplanehelm3clone"></a>
## [affineplane](#affineplane).[helm3](#affineplanehelm3).[clone](#affineplanehelm3clone)

Alias of [affineplane.helm3.copy](#affineplanehelm3copy)

Source: [copy.js](https://github.com/axelpale/affineplane/blob/main/lib/helm3/copy.js)

<a name="affineplanehelm3combine"></a>
## [affineplane](#affineplane).[helm3](#affineplanehelm3).[combine](#affineplanehelm3combine)

Alias of [affineplane.helm3.compose](#affineplanehelm3compose)

Source: [compose.js](https://github.com/axelpale/affineplane/blob/main/lib/helm3/compose.js)

<a name="affineplanehelm3compose"></a>
## [affineplane](#affineplane).[helm3](#affineplanehelm3).[compose](#affineplanehelm3compose)(tr, ts)

Multiply the [helm3](#affineplanehelm3) matrix tr from
the right with the [helm3](#affineplanehelm3) matrix ts.
In other words, transform the image of ts by tr.

**Parameters:**
- *tr*
  - a [helm3](#affineplanehelm3)
- *ts*
  - a [helm3](#affineplanehelm3)

**Returns:**
- a [helm3](#affineplanehelm3)

Aliases: [affineplane.helm3.combine](#affineplanehelm3combine)

Source: [compose.js](https://github.com/axelpale/affineplane/blob/main/lib/helm3/compose.js)

<a name="affineplanehelm3copy"></a>
## [affineplane](#affineplane).[helm3](#affineplanehelm3).[copy](#affineplanehelm3copy)(tr)

**Parameters:**
- *tr*
  - a [helm3](#affineplanehelm3), a transform

**Returns:**
- a [helm3](#affineplanehelm3), a transform

Aliases: [affineplane.helm3.clone](#affineplanehelm3clone)

Source: [copy.js](https://github.com/axelpale/affineplane/blob/main/lib/helm3/copy.js)

<a name="affineplanehelm3create"></a>
## [affineplane](#affineplane).[helm3](#affineplanehelm3).[create](#affineplanehelm3create)(a, b, x, y, z)

Create a new [helm3](#affineplanehelm3) object.

**Parameters:**ters
- *a*
  - number, linear transform basis vector element
- *b*
  - number, linear transform basis vector element
- *x*
  - number, change in horizontal position
- *y*
  - number, change in vertical position
- *z*
  - number, change in depth

**Returns:**
- a [helm3](#affineplanehelm3)

Source: [create.js](https://github.com/axelpale/affineplane/blob/main/lib/helm3/create.js)

<a name="affineplanehelm3det"></a>
## [affineplane](#affineplane).[helm3](#affineplanehelm3).[det](#affineplanehelm3det)(tr)

The matrix determinant of the transformation.
If the determinant equals zero then the matrix cannot be inverted and
thus is not a valid transformation.
In practice, determinants close to zero are also
problematic due to floating point arithmetics.

**Parameters:**
- *tr*
  - a [helm3](#affineplanehelm3)

**Returns:**
- a number, the determinant.

Aliases: [affineplane.helm3.determinant](#affineplanehelm3determinant)

Source: [det.js](https://github.com/axelpale/affineplane/blob/main/lib/helm3/det.js)

<a name="affineplanehelm3determinant"></a>
## [affineplane](#affineplane).[helm3](#affineplanehelm3).[determinant](#affineplanehelm3determinant)(tr)

Alias of [affineplane.helm3.det](#affineplanehelm3det)

Source: [det.js](https://github.com/axelpale/affineplane/blob/main/lib/helm3/det.js)

<a name="affineplanehelm3equal"></a>
## [affineplane](#affineplane).[helm3](#affineplanehelm3).[equal](#affineplanehelm3equal)(tr, ts)

True if transformations are exactly equal.
Note that due to floating-point arithmetics, computation
might cause exact equality to be broken.
See [affineplane.helm3.almostEqual](#affineplanehelm3almostequal) for a relaxed alternative.

**Parameters:**
- *tr*
  - a [helm3](#affineplanehelm3), a transform
- *ts*
  - a [helm3](#affineplanehelm3), a transform

**Returns:**
- a boolean

Aliases: [affineplane.helm3.equals](#affineplanehelm3equals)

Source: [equal.js](https://github.com/axelpale/affineplane/blob/main/lib/helm3/equal.js)

<a name="affineplanehelm3equals"></a>
## [affineplane](#affineplane).[helm3](#affineplanehelm3).[equals](#affineplanehelm3equals)

Alias of [affineplane.helm3.equal](#affineplanehelm3equal)

Source: [equal.js](https://github.com/axelpale/affineplane/blob/main/lib/helm3/equal.js)

<a name="affineplanehelm3fromarray"></a>
## [affineplane](#affineplane).[helm3](#affineplanehelm3).[fromArray](#affineplanehelm3fromarray)(arr)

Create an affine similarity transform from 5-element array.

**Parameters:**
- *arr*
  - an array of five numbers `[a, b, x, y, z]`

**Returns:**
- a [helm3](#affineplanehelm3)

Source: [fromArray.js](https://github.com/axelpale/affineplane/blob/main/lib/helm3/fromArray.js)

<a name="affineplanehelm3fromfeatures"></a>
## [affineplane](#affineplane).[helm3](#affineplanehelm3).[fromFeatures](#affineplanehelm3fromfeatures)(feats)

Create a [helm3](#affineplanehelm3) transformation from human-readable features.

**Parameters:**
- *feats*
  - object with properties:
    - *dilation*
      - a number, a scale multiplier
    - *rotation*
      - a number, delta angle in radians
    - *translation*
      - a [vec3](#affineplanevec3), the displacement vector

**Returns:**
- [helm3](#affineplanehelm3)

Source: [fromFeatures.js](https://github.com/axelpale/affineplane/blob/main/lib/helm3/fromFeatures.js)

<a name="affineplanehelm3getdilation"></a>
## [affineplane](#affineplane).[helm3](#affineplanehelm3).[getDilation](#affineplanehelm3getdilation)(tr)

Get the dilation component of the transformation.

**Parameters:**
- *tr*
  - a [helm3](#affineplanehelm3)

**Returns:**
- a number, the scale multiplier.

Aliases: [affineplane.helm3.getScale](#affineplanehelm3getscale)

Source: [getDilation.js](https://github.com/axelpale/affineplane/blob/main/lib/helm3/getDilation.js)

<a name="affineplanehelm3getrotation"></a>
## [affineplane](#affineplane).[helm3](#affineplanehelm3).[getRotation](#affineplanehelm3getrotation)(tr)

Get the rotation component of the transform in radians.
This is rotation around z-axis to right hand direction.

**Parameters:**
- *tr*
  - a [helm3](#affineplanehelm3)

**Returns:**
- a number, angle in radians

Source: [getRotation.js](https://github.com/axelpale/affineplane/blob/main/lib/helm3/getRotation.js)

<a name="affineplanehelm3getscale"></a>
## [affineplane](#affineplane).[helm3](#affineplanehelm3).[getScale](#affineplanehelm3getscale)

Alias of [affineplane.helm3.getDilation](#affineplanehelm3getdilation)

Source: [getDilation.js](https://github.com/axelpale/affineplane/blob/main/lib/helm3/getDilation.js)

<a name="affineplanehelm3gettranslation"></a>
## [affineplane](#affineplane).[helm3](#affineplanehelm3).[getTranslation](#affineplanehelm3gettranslation)(tr)

Get translation component of the transformation as a vector.

**Parameters:**
- *tr*
  - a [helm3](#affineplanehelm3)

**Returns:**
- a [vec3](#affineplanevec3)

Source: [getTranslation.js](https://github.com/axelpale/affineplane/blob/main/lib/helm3/getTranslation.js)

<a name="affineplanehelm3half"></a>
## [affineplane](#affineplane).[helm3](#affineplanehelm3).[HALF](#affineplanehelm3half)

Scaling to half size.

Source: [helm3/index.js](https://github.com/axelpale/affineplane/blob/main/lib/helm3/index.js)

<a name="affineplanehelm3i"></a>
## [affineplane](#affineplane).[helm3](#affineplanehelm3).[I](#affineplanehelm3i)

Identity transform, a kind of multiplication by 1.

Aliases: [affineplane.helm3.IDENTITY](#affineplanehelm3identity)

Source: [helm3/index.js](https://github.com/axelpale/affineplane/blob/main/lib/helm3/index.js)

<a name="affineplanehelm3identity"></a>
## [affineplane](#affineplane).[helm3](#affineplanehelm3).[IDENTITY](#affineplanehelm3identity)

Alias of [affineplane.helm3.I](#affineplanehelm3i)

Source: [helm3/index.js](https://github.com/axelpale/affineplane/blob/main/lib/helm3/index.js)

<a name="affineplanehelm3inverse"></a>
## [affineplane](#affineplane).[helm3](#affineplanehelm3).[inverse](#affineplanehelm3inverse)(tr)

Invert the transform. A transform from B to C
becomes a transform from C to B.

**Parameters:**
- *tr*
  - a [helm3](#affineplanehelm3)

**Returns:**
- a [helm3](#affineplanehelm3), inversed transform

Aliases: [affineplane.helm3.invert](#affineplanehelm3invert)

Source: [inverse.js](https://github.com/axelpale/affineplane/blob/main/lib/helm3/inverse.js)

<a name="affineplanehelm3invert"></a>
## [affineplane](#affineplane).[helm3](#affineplanehelm3).[invert](#affineplanehelm3invert)

Alias of [affineplane.helm3.inverse](#affineplanehelm3inverse)

Source: [inverse.js](https://github.com/axelpale/affineplane/blob/main/lib/helm3/inverse.js)

<a name="affineplanehelm3projectto"></a>
## [affineplane](#affineplane).[helm3](#affineplanehelm3).[projectTo](#affineplanehelm3projectto)(tr, plane)

Project transformation onto a plane orthogonally.

**Parameters:**
- *tr*
  - a [helm3](#affineplanehelm3) in the reference space.
- *plane*
  - a [plane3](#affineplaneplane3) in the reference space. The image plane.

**Returns:**
- a [helm2](#affineplanehelm2) on the image plane.

Source: [projectTo.js](https://github.com/axelpale/affineplane/blob/main/lib/helm3/projectTo.js)

<a name="affineplanehelm3rot0"></a>
## [affineplane](#affineplane).[helm3](#affineplanehelm3).[ROT0](#affineplanehelm3rot0)

Zero angle rotation.

Source: [helm3/index.js](https://github.com/axelpale/affineplane/blob/main/lib/helm3/index.js)

<a name="affineplanehelm3rot180"></a>
## [affineplane](#affineplane).[helm3](#affineplanehelm3).[ROT180](#affineplanehelm3rot180)

Rotation of 180 degrees.

Source: [helm3/index.js](https://github.com/axelpale/affineplane/blob/main/lib/helm3/index.js)

<a name="affineplanehelm3rot270"></a>
## [affineplane](#affineplane).[helm3](#affineplanehelm3).[ROT270](#affineplanehelm3rot270)

Clockwise rotation of 270 degrees.

Source: [helm3/index.js](https://github.com/axelpale/affineplane/blob/main/lib/helm3/index.js)

<a name="affineplanehelm3rot45"></a>
## [affineplane](#affineplane).[helm3](#affineplanehelm3).[ROT45](#affineplanehelm3rot45)

Clockwise rotation of 45 degrees.

Source: [helm3/index.js](https://github.com/axelpale/affineplane/blob/main/lib/helm3/index.js)

<a name="affineplanehelm3rot90"></a>
## [affineplane](#affineplane).[helm3](#affineplanehelm3).[ROT90](#affineplanehelm3rot90)

Clockwise rotation of 90 degrees.

Source: [helm3/index.js](https://github.com/axelpale/affineplane/blob/main/lib/helm3/index.js)

<a name="affineplanehelm3rotateby"></a>
## [affineplane](#affineplane).[helm3](#affineplanehelm3).[rotateBy](#affineplanehelm3rotateby)(tr, radians)

Rotate image of the transform by the given radians around z-axis.
This changes the direction of the translation but
preserves the scaling and rotating effects as well as
the translation along z.

**Parameters:**
- *tr*
  - a [helm3](#affineplanehelm3), a transform
- *radians*
  - a number, angle in radians

**Returns:**
- a [helm3](#affineplanehelm3), a transform

Source: [rotateBy.js](https://github.com/axelpale/affineplane/blob/main/lib/helm3/rotateBy.js)

<a name="affineplanehelm3scaleby"></a>
## [affineplane](#affineplane).[helm3](#affineplanehelm3).[scaleBy](#affineplanehelm3scaleby)(tr, multiplier)

Scale image of the transform by the given multiplier.
Dilation and translation are multiplied,
rotation and translation direction are preserved.
Note that also translation along z becomes multiplied.

**Parameters:**
- *tr*
  - a [helm3](#affineplanehelm3), a transform on the reference plane.
- *multiplier*
  - a number

**Returns:**
- a [helm3](#affineplanehelm3), a transform

Source: [scaleBy.js](https://github.com/axelpale/affineplane/blob/main/lib/helm3/scaleBy.js)

<a name="affineplanehelm3setdilation"></a>
## [affineplane](#affineplane).[helm3](#affineplanehelm3).[setDilation](#affineplanehelm3setdilation)(tr, dilation)

Replace scaling of the transformation.
The rotation and translation properties are preserved.

**Parameters:**
- *tr*
  - a [helm3](#affineplanehelm3)
- *dilation*
  - a number

**Returns:**
- a [helm3](#affineplanehelm3)

Source: [setDilation.js](https://github.com/axelpale/affineplane/blob/main/lib/helm3/setDilation.js)

<a name="affineplanehelm3setrotation"></a>
## [affineplane](#affineplane).[helm3](#affineplanehelm3).[setRotation](#affineplanehelm3setrotation)(tr, angle)

Replace rotation angle of the transformation.
The dilation and translation properties are preserved.

**Parameters:**
- *tr*
  - a [helm3](#affineplanehelm3)
- *rotation*
  - a number in radians

**Returns:**
- a [helm3](#affineplanehelm3)

Source: [setRotation.js](https://github.com/axelpale/affineplane/blob/main/lib/helm3/setRotation.js)

<a name="affineplanehelm3settranslation"></a>
## [affineplane](#affineplane).[helm3](#affineplanehelm3).[setTranslation](#affineplanehelm3settranslation)(tr, vec)

Replace translation property of the transformation.
The dilation and rotation properties are preserved.

**Parameters:**
- *tr*
  - a [helm3](#affineplanehelm3)
- *vec*
  - a [vec3](#affineplanevec3), the new translation vector

**Returns:**
- a [helm3](#affineplanehelm3)

Source: [setTranslation.js](https://github.com/axelpale/affineplane/blob/main/lib/helm3/setTranslation.js)

<a name="affineplanehelm3singular"></a>
## [affineplane](#affineplane).[helm3](#affineplanehelm3).[SINGULAR](#affineplanehelm3singular)

Singular transform, resembles multiplication by 0.
Note that singular transformations are note valid affine transformations
because singularity cannot be inverted.
For example with numbers, you can multiply 2 by 0 to produce 0 but
you cannot multiply 0 to produce the original 2.

Aliases: [affineplane.helm3.ZERO](#affineplanehelm3zero)

Source: [helm3/index.js](https://github.com/axelpale/affineplane/blob/main/lib/helm3/index.js)

<a name="affineplanehelm3toarray"></a>
## [affineplane](#affineplane).[helm3](#affineplanehelm3).[toArray](#affineplanehelm3toarray)(tr)

Serializes the transformation into an array representation.
Compatible with [affineplane.helm3.fromArray](#affineplanehelm3fromarray).

**Parameters:**
- *tr*
  - a [helm3](#affineplanehelm3)

**Returns:**
- an array `[a, b, x, y, z]`

Source: [toArray.js](https://github.com/axelpale/affineplane/blob/main/lib/helm3/toArray.js)

<a name="affineplanehelm3tomatrix"></a>
## [affineplane](#affineplane).[helm3](#affineplanehelm3).[toMatrix](#affineplanehelm3tomatrix)(tr)

Get the transformation as a 4x4 homogeneous 3D transformation matrix,
using indexing similar to MDN matrix3d article.

**Parameters:**
- *tr*
  - a [helm3](#affineplanehelm3)

**Returns:**
- an object with properties:
  - `{ a1, a2, a3, a4, b1, b2, b3, b4, c1, c2, c3, c4 d1, d2, d3, d4 }`

Elements are constructed like this:
```
┌                      ┐   ┌             ┐
│ tr.a -tr.b  0   tr.x │   │ a1 a2 a3 a4 │
│ tr.b  tr.a  0   tr.y │ = │ b1 b2 b3 b4 │
│ 0     0     1   tr.z │   │ c1 c2 c3 c4 │
│ 0     0     0   1    │   │ d1 d2 d3 d4 │
└                      ┘   └             ┘
```

Source: [toMatrix.js](https://github.com/axelpale/affineplane/blob/main/lib/helm3/toMatrix.js)

<a name="affineplanehelm3transitfrom"></a>
## [affineplane](#affineplane).[helm3](#affineplanehelm3).[transitFrom](#affineplanehelm3transitfrom)(tr, source)

Transit a [helm3](#affineplanehelm3) from the source plane
to the reference plane.

**Parameters:**
- *tr*
  - a [helm3](#affineplanehelm3) transformation on the source plane.
- *source*
  - a [plane3](#affineplaneplane3), the source plane, represented on the reference plane.

**Returns:**
- a [helm3](#affineplanehelm3), represented on the reference plane.

Invariants:
- scale and rotation of the plane affects only the translating property of [helm3](#affineplanehelm3), so that the direction of translation is preserved.
- translation of the plane does not affect [helm3](#affineplanehelm3) at all.
- scaling and rotation properties of [helm3](#affineplanehelm3) are preserved as is.

Source: [transitFrom.js](https://github.com/axelpale/affineplane/blob/main/lib/helm3/transitFrom.js)

<a name="affineplanehelm3unit"></a>
## [affineplane](#affineplane).[helm3](#affineplanehelm3).[UNIT](#affineplanehelm3unit)

A unit transform. Scales by sqrt(2), rotates by 45deg,
and translates by vector (1,1,1)

Source: [helm3/index.js](https://github.com/axelpale/affineplane/blob/main/lib/helm3/index.js)

<a name="affineplanehelm3validate"></a>
## [affineplane](#affineplane).[helm3](#affineplanehelm3).[validate](#affineplanehelm3validate)(tr)

Check if object is a valid [helm3](#affineplanehelm3).

**Parameters:**
- *tr*
  - an object

**Returns:**
- a boolean, true if valid [helm3](#affineplanehelm3)

Source: [validate.js](https://github.com/axelpale/affineplane/blob/main/lib/helm3/validate.js)

<a name="affineplanehelm3x2"></a>
## [affineplane](#affineplane).[helm3](#affineplanehelm3).[X2](#affineplanehelm3x2)

Scaling to double size.

Source: [helm3/index.js](https://github.com/axelpale/affineplane/blob/main/lib/helm3/index.js)

<a name="affineplanehelm3zero"></a>
## [affineplane](#affineplane).[helm3](#affineplanehelm3).[ZERO](#affineplanehelm3zero)

Alias of [affineplane.helm3.SINGULAR](#affineplanehelm3singular)

Source: [helm3/index.js](https://github.com/axelpale/affineplane/blob/main/lib/helm3/index.js)

<a name="affineplaneline2"></a>
## [affineplane](#affineplane).[line2](#affineplaneline2)

Directed line object with origin point in space and a spanning vector.

A [line2](#affineplaneline2) is an object `{ origin: {x,y}, span: {x,y} }`

- [affineplane.line2.at](#affineplaneline2at)
- [affineplane.line2.create](#affineplaneline2create)
- [affineplane.line2.fromPoints](#affineplaneline2frompoints)
- [affineplane.line2.validate](#affineplaneline2validate)


Source: [line2/index.js](https://github.com/axelpale/affineplane/blob/main/lib/line2/index.js)

<a name="affineplaneline2at"></a>
## [affineplane](#affineplane).[line2](#affineplaneline2).[at](#affineplaneline2at)(line, c)

Get a point on the line at position c from the line origin.
For example c=2 gives a point at two spanning vectors away
from the origin.

**Parameters:**
- *line*
  - a [line2](#affineplaneline2)
- *c*
  - a number, one-dimensional coordinate along the line

**Returns:**
- a [point2](#affineplanepoint2)

Source: [at.js](https://github.com/axelpale/affineplane/blob/main/lib/line2/at.js)

<a name="affineplaneline2create"></a>
## [affineplane](#affineplane).[line2](#affineplaneline2).[create](#affineplaneline2create)(origin, span)

Create a line from an origin point and a spanning vector.

**Parameters:**
- *origin*
  - a [point2](#affineplanepoint2)
- *span*
  - a [vec2](#affineplanevec2), the line spanning vector. Defines the unit on the line.

**Returns:**
- a [line2](#affineplaneline2)

Source: [create.js](https://github.com/axelpale/affineplane/blob/main/lib/line2/create.js)

<a name="affineplaneline2frompoints"></a>
## [affineplane](#affineplane).[line2](#affineplaneline2).[fromPoints](#affineplaneline2frompoints)(p, q)

Create a line from two points
with a spanning vector from p to q.

**Parameters:**
- *p*
  - a [point2](#affineplanepoint2)
- *q*
  - a [point2](#affineplanepoint2)

**Returns:**
- a [line2](#affineplaneline2)

Source: [fromPoints.js](https://github.com/axelpale/affineplane/blob/main/lib/line2/fromPoints.js)

<a name="affineplaneline2validate"></a>
## [affineplane](#affineplane).[line2](#affineplaneline2).[validate](#affineplaneline2validate)(l)

Check if the object is a valid [line2](#affineplaneline2).
Valid [line2](#affineplaneline2) has origin and span properties
that are valid [point2](#affineplanepoint2) and [vec2](#affineplanevec2), respectively.

**Parameters:**
- *l*
  - an object

**Returns:**
- a boolean, true if valid [line2](#affineplaneline2)

Source: [validate.js](https://github.com/axelpale/affineplane/blob/main/lib/line2/validate.js)

<a name="affineplaneline3"></a>
## [affineplane](#affineplane).[line3](#affineplaneline3)

Directed line object in 3D,
Represented as an origin point and a spanning vector.

A [line2](#affineplaneline2) is an object `{ origin: {x,y,z}, span: {x,y,z} }`

- [affineplane.line3.at](#affineplaneline3at)
- [affineplane.line3.create](#affineplaneline3create)
- [affineplane.line3.fromPoints](#affineplaneline3frompoints)
- [affineplane.line3.validate](#affineplaneline3validate)


Source: [line3/index.js](https://github.com/axelpale/affineplane/blob/main/lib/line3/index.js)

<a name="affineplaneline3at"></a>
## [affineplane](#affineplane).[line3](#affineplaneline3).[at](#affineplaneline3at)(line, c)

Get a point on the line at position c from the line origin.
For example c=2 gives a point at two spanning vectors away
from the origin.

**Parameters:**
- *line*
  - a [line3](#affineplaneline3)
- *c*
  - a number

**Returns:**
- a [point3](#affineplanepoint3)

Source: [at.js](https://github.com/axelpale/affineplane/blob/main/lib/line3/at.js)

<a name="affineplaneline3create"></a>
## [affineplane](#affineplane).[line3](#affineplaneline3).[create](#affineplaneline3create)(origin, span)

Create a 3d line from an origin point and a spanning vector.

**Parameters:**
- *origin*
  - a [point3](#affineplanepoint3)
- *span*
  - a [vec3](#affineplanevec3), the line spanning vector. Defines the unit on the line.

**Returns:**
- a [line3](#affineplaneline3)

Source: [create.js](https://github.com/axelpale/affineplane/blob/main/lib/line3/create.js)

<a name="affineplaneline3frompoints"></a>
## [affineplane](#affineplane).[line3](#affineplaneline3).[fromPoints](#affineplaneline3frompoints)(p, q)

Create a line from two points
with a spanning vector from p to q.

**Parameters:**
- *p*
  - a [point3](#affineplanepoint3)
- *q*
  - a [point3](#affineplanepoint3)

**Returns:**
- a [line3](#affineplaneline3)

Source: [fromPoints.js](https://github.com/axelpale/affineplane/blob/main/lib/line3/fromPoints.js)

<a name="affineplaneline3validate"></a>
## [affineplane](#affineplane).[line3](#affineplaneline3).[validate](#affineplaneline3validate)(line)

Check if the object is a valid [line3](#affineplaneline3).
Valid [line3](#affineplaneline3) has origin and span properties
that are valid [point3](#affineplanepoint3) and [vec3](#affineplanevec3), respectively.

**Parameters:**
- *line*
  - an object

**Returns:**
- a boolean, true if valid [line2](#affineplaneline2)

Source: [validate.js](https://github.com/axelpale/affineplane/blob/main/lib/line3/validate.js)

<a name="affineplanepath2"></a>
## [affineplane](#affineplane).[path2](#affineplanepath2)

Two-dimensional path; Array of [point2](#affineplanepoint2); Open sequence of points;
Does not form a polygon but a sequence of line segments.
`[{ x, y }, { x, y }, ...]`

- [affineplane.path2.create](#affineplanepath2create)


Source: [path2/index.js](https://github.com/axelpale/affineplane/blob/main/lib/path2/index.js)

<a name="affineplanepath2create"></a>
## [affineplane](#affineplane).[path2](#affineplanepath2).[create](#affineplanepath2create)(points)

Create a path on plane. Deep-clones the points array.

**Parameters:**
- *points*
  - array of [point2](#affineplanepoint2)

**Returns:**
- a [path2](#affineplanepath2), array of points

Source: [create.js](https://github.com/axelpale/affineplane/blob/main/lib/path2/create.js)

<a name="affineplaneplane2"></a>
## [affineplane](#affineplane).[plane2](#affineplaneplane2)

A 2D euclidean plane.

A plane is a 2d helmert transform (helm2)
from the plane coordinates to a reference
coordinate system called the *reference plane*.
The transform defines the scale and angle of the plane
and its origin position on the reference.

The plane is represented with an object `{ a, b, x, y }`

For example `{ a: 1, b: 0, x: 0, y: 0 }` defines a plane
is an exact copy of its reference plane. For another example
`{ a: 1, b: 0, x: 20, y: 0 }` defines a plane which
is located +20 units along x-axis of the reference plane.

- [affineplane.plane2.between](#affineplaneplane2between)
- [affineplane.plane2.compose](#affineplaneplane2compose)
- [affineplane.plane2.copy](#affineplaneplane2copy)
- [affineplane.plane2.create](#affineplaneplane2create)
- [affineplane.plane2.difference](#affineplaneplane2difference)
- [affineplane.plane2.equal](#affineplaneplane2equal)
- [affineplane.plane2.fromFeatures](#affineplaneplane2fromfeatures)
- [affineplane.plane2.getScale](#affineplaneplane2getscale)
- [affineplane.plane2.IDENTITY](#affineplaneplane2identity)
- [affineplane.plane2.invert](#affineplaneplane2invert)
- [affineplane.plane2.projectTo](#affineplaneplane2projectto)
- [affineplane.plane2.rotateBy](#affineplaneplane2rotateby)
- [affineplane.plane2.rotateTo](#affineplaneplane2rotateto)
- [affineplane.plane2.rotateToOrtho](#affineplaneplane2rotatetoortho)
- [affineplane.plane2.scaleBy](#affineplaneplane2scaleby)
- [affineplane.plane2.scaleTo](#affineplaneplane2scaleto)
- [affineplane.plane2.transform](#affineplaneplane2transform)
- [affineplane.plane2.transitFrom](#affineplaneplane2transitfrom)
- [affineplane.plane2.transitTo](#affineplaneplane2transitto)
- [affineplane.plane2.translateBy](#affineplaneplane2translateby)
- [affineplane.plane2.translateTo](#affineplaneplane2translateto)
- [affineplane.plane2.validate](#affineplaneplane2validate)


Source: [plane2/index.js](https://github.com/axelpale/affineplane/blob/main/lib/plane2/index.js)

<a name="affineplaneplane2between"></a>
## [affineplane](#affineplane).[plane2](#affineplaneplane2).[between](#affineplaneplane2between)

Alias of [affineplane.plane2.difference](#affineplaneplane2difference)

Source: [difference.js](https://github.com/axelpale/affineplane/blob/main/lib/plane2/difference.js)

<a name="affineplaneplane2compose"></a>
## [affineplane](#affineplane).[plane2](#affineplaneplane2).[compose](#affineplaneplane2compose)(planea, planeb)

Combine two planes together.

**Parameters:**
- *planea*
  - a [plane2](#affineplaneplane2) on the reference plane
- *planeb*
  - a [plane2](#affineplaneplane2) on the planea

**Returns:**
- a [plane2](#affineplaneplane2) on the reference plane

Source: [compose.js](https://github.com/axelpale/affineplane/blob/main/lib/plane2/compose.js)

<a name="affineplaneplane2copy"></a>
## [affineplane](#affineplane).[plane2](#affineplaneplane2).[copy](#affineplaneplane2copy)(plane)

Clone the plane object.

**Parameters:**
- *plane*
  - a [plane2](#affineplaneplane2)

**Returns:**
- a [plane2](#affineplaneplane2)

Source: [copy.js](https://github.com/axelpale/affineplane/blob/main/lib/plane2/copy.js)

<a name="affineplaneplane2create"></a>
## [affineplane](#affineplane).[plane2](#affineplaneplane2).[create](#affineplaneplane2create)(origin, span)

Create a [plane2](#affineplaneplane2) from an origin point and a basis vector.

**Parameters:**
- *origin*
  - a [point2](#affineplanepoint2) on the reference plane.
- *span*
  - a [vec2](#affineplanevec2) on the reference plane. This vector is the basis vector for the x-axis of the plane. The basis vector for y can be found 90deg clockwise from x-axis.

**Returns:**
- a [plane2](#affineplaneplane2)

Source: [create.js](https://github.com/axelpale/affineplane/blob/main/lib/plane2/create.js)

<a name="affineplaneplane2difference"></a>
## [affineplane](#affineplane).[plane2](#affineplaneplane2).[difference](#affineplaneplane2difference)(source, target)

Represent a source plane on the target plane.
In other words, find a transition from a source plane A
to a target plane B from their transitions to
an intermediate root plane R.

The result is a combination of the inverse of the target plane
and the source plane.

**Parameters:**
- *source*
  - a [plane2](#affineplaneplane2), the source plane on the reference plane.
- *target*
  - a [plane2](#affineplaneplane2), the target plane on the reference plane.

**Returns:**
- a [plane2](#affineplaneplane2), the source plane on the target plane.

Aliases: [affineplane.plane2.between](#affineplaneplane2between)

Source: [difference.js](https://github.com/axelpale/affineplane/blob/main/lib/plane2/difference.js)

<a name="affineplaneplane2equal"></a>
## [affineplane](#affineplane).[plane2](#affineplaneplane2).[equal](#affineplaneplane2equal)(p1, p2)

**Parameters:**
- *p1*
  - a [plane2](#affineplaneplane2)
- *p2*
  - a [plane2](#affineplaneplane2)

**Returns:**
- a boolean

Source: [equal.js](https://github.com/axelpale/affineplane/blob/main/lib/plane2/equal.js)

<a name="affineplaneplane2fromfeatures"></a>
## [affineplane](#affineplane).[plane2](#affineplaneplane2).[fromFeatures](#affineplaneplane2fromfeatures)(feats)

Create a plane from human readable features.

**Parameters:**
- *feats*
  - an object with optional props:
    - *angle*
      - a number, angle in radians with respect to the reference plane.
    - *scale*
      - a number, scale multiplier with respect to the reference plane.
    - *origin*
      - a [point2](#affineplanepoint2), the plane origin point on the reference plane.

**Returns:**
- a [plane2](#affineplaneplane2)

Source: [fromFeatures.js](https://github.com/axelpale/affineplane/blob/main/lib/plane2/fromFeatures.js)

<a name="affineplaneplane2getscale"></a>
## [affineplane](#affineplane).[plane2](#affineplaneplane2).[getScale](#affineplaneplane2getscale)(plane)

The length of the vector.

**Parameters:**
- *plane*
  - a [plane2](#affineplaneplane2) on the reference plane

**Returns:**
- a number, the scale multiplier with respect to the reference plane.

Source: [getScale.js](https://github.com/axelpale/affineplane/blob/main/lib/plane2/getScale.js)

<a name="affineplaneplane2identity"></a>
## [affineplane](#affineplane).[plane2](#affineplaneplane2).[IDENTITY](#affineplaneplane2identity)

The identity plane is identical to its reference plane.

Source: [plane2/index.js](https://github.com/axelpale/affineplane/blob/main/lib/plane2/index.js)

<a name="affineplaneplane2invert"></a>
## [affineplane](#affineplane).[plane2](#affineplaneplane2).[invert](#affineplaneplane2invert)(plane)

A plane is a mapping from the plane's coordinates onto
the reference plane. The inversion of the plane switches
the roles so that the result is the reference plane,
represented in the coordinates of the given plane.

**Parameters:**
- *plane*
  - a [plane2](#affineplaneplane2), the plane to invert represented on the reference plane.

**Returns:**
- a [plane2](#affineplaneplane2), the reference plane represented on the given plane.

Source: [invert.js](https://github.com/axelpale/affineplane/blob/main/lib/plane2/invert.js)

<a name="affineplaneplane2projectto"></a>
## [affineplane](#affineplane).[plane2](#affineplaneplane2).[projectTo](#affineplaneplane2projectto)(plane, target, camera)

Project a 2D plane from reference to the target parallel 2D plane in 3D.
If camera is given, project perspectively, otherwise orthogonally.

**Parameters:**
- *plane*
  - a [plane2](#affineplaneplane2) in the reference space, z=0.
- *target*
  - a [plane3](#affineplaneplane3) in the reference space. The image plane to which to project.
- *camera*
  - optional [point3](#affineplanepoint3) in the reference space.

**Returns:**
- a [plane2](#affineplaneplane2) on the image plane.

Source: [projectTo.js](https://github.com/axelpale/affineplane/blob/main/lib/plane2/projectTo.js)

<a name="affineplaneplane2rotateby"></a>
## [affineplane](#affineplane).[plane2](#affineplaneplane2).[rotateBy](#affineplaneplane2rotateby)(plane, center, radians)

Rotate the given plane on the reference plane around
a center point.

**Parameters:**
- *plane*
  - a [plane2](#affineplaneplane2) on the reference plane. The plane to rotate.
- *center*
  - a [point2](#affineplanepoint2), a point on the reference plane.
- *radians*
  - a number, angle in radians, direction x->y.

**Returns:**
- a [plane2](#affineplaneplane2) on the reference plane after rotation.

Source: [rotateBy.js](https://github.com/axelpale/affineplane/blob/main/lib/plane2/rotateBy.js)

<a name="affineplaneplane2rotateto"></a>
## [affineplane](#affineplane).[plane2](#affineplaneplane2).[rotateTo](#affineplaneplane2rotateto)(plane, center, radians)

Rotate the plane around a point so that after the rotation,
the x-axis of the plane points to the given direction.
The center point stays fixed during the operation.

**Parameters:**
- *plane*
  - a [plane2](#affineplaneplane2), the plane to rotate. Represented on the reference plane.
- *center*
  - a [point2](#affineplanepoint2), the point around which to rotate. Represented on the reference plane.
- *radians*
  - a number, angle to rotate to. Relative to the reference plane x-axis.

**Returns:**
- a [plane2](#affineplaneplane2), the plane after rotation.

Source: [rotateTo.js](https://github.com/axelpale/affineplane/blob/main/lib/plane2/rotateTo.js)

<a name="affineplaneplane2rotatetoortho"></a>
## [affineplane](#affineplane).[plane2](#affineplaneplane2).[rotateToOrtho](#affineplaneplane2rotatetoortho)(plane, center)

Rotate plane to nearest orthogonal angle 0, 90, 180, and 270 deg
with respect to the reference plane.

**Parameters:**
- *plane*
  - a [plane2](#affineplaneplane2) to rotate.
- *center*
  - a [point2](#affineplanepoint2), a point on the reference plane. The rotation center.

**Returns:**
- a [plane2](#affineplaneplane2)

Note that if the plane is at the middle of two ortho angles,
namely at 45, 135, 225, or 315 deg, then
the nearest orthogonal angle is arbitrarily either the next
or previous orthogonal angle due to the small variations
caused by floating-point arithmetics.

Source: [rotateToOrtho.js](https://github.com/axelpale/affineplane/blob/main/lib/plane2/rotateToOrtho.js)

<a name="affineplaneplane2scaleby"></a>
## [affineplane](#affineplane).[plane2](#affineplaneplane2).[scaleBy](#affineplaneplane2scaleby)(plane, center, multiplier)

Create a plane that is scaled by the multiplier around
a center point. For example, if a plane with basis vectors
ex = (1,0), ey = (0,1) is scaled by 2, the basis vectors
of the new plane are ex_hat = (2,0), ey_hat = (0,2).

**Parameters:**
- *plane*
  - a [plane2](#affineplaneplane2) on the reference plane
- *center*
  - a [point2](#affineplanepoint2) on the reference plane
- *multiplier*
  - a number, the scaling factor

**Returns:**
- a [plane2](#affineplaneplane2), a scaled plane

Source: [scaleBy.js](https://github.com/axelpale/affineplane/blob/main/lib/plane2/scaleBy.js)

<a name="affineplaneplane2scaleto"></a>
## [affineplane](#affineplane).[plane2](#affineplaneplane2).[scaleTo](#affineplaneplane2scaleto)(plane, center, scale)

Create a plane that has the given scale.
This is achieved by scaling the plane around
a center point so that afterwards the plane scale
becomes the desired scale.

**Parameters:**
- *plane*
  - a [plane2](#affineplaneplane2) on the reference plane
- *center*
  - a [point2](#affineplanepoint2) on the reference plane
- *scale*
  - a number, the desired scale

**Returns:**
- a [plane2](#affineplaneplane2), a scaled plane

Source: [scaleTo.js](https://github.com/axelpale/affineplane/blob/main/lib/plane2/scaleTo.js)

<a name="affineplaneplane2transform"></a>
## [affineplane](#affineplane).[plane2](#affineplaneplane2).[transform](#affineplaneplane2transform)(plane, tr)

Transform the plane with a helmert transformation.
Basically, the plane is a transformation from its internal
coordinate system to the reference coordinate system.
The returned plane is the result when the plane matrix
is multiplied from left by the given transform matrix.
For multiplication from right, see [affineplane.plane2.compose](#affineplaneplane2compose).

**Parameters:**
- *plane*
  - a [plane2](#affineplaneplane2) on the reference plane
- *tr*
  - a [helm2](#affineplanehelm2) on the reference plane

**Returns:**
- a [plane2](#affineplaneplane2) on the reference plane

Source: [transform.js](https://github.com/axelpale/affineplane/blob/main/lib/plane2/transform.js)

<a name="affineplaneplane2transitfrom"></a>
## [affineplane](#affineplane).[plane2](#affineplaneplane2).[transitFrom](#affineplaneplane2transitfrom)(plane, source)

Transit a [plane2](#affineplaneplane2) from the source plane
to the reference plane. In other words,
represent the plane in the coordinate system
of the reference plane instead of the source plane.

**Parameters:**
- *plane*
  - a [plane2](#affineplaneplane2) on the source plane.
- *source*
  - a [plane2](#affineplaneplane2), the source plane, represented on the reference plane.

**Returns:**
- a [plane2](#affineplaneplane2), represented on the reference plane.

Source: [transitFrom.js](https://github.com/axelpale/affineplane/blob/main/lib/plane2/transitFrom.js)

<a name="affineplaneplane2transitto"></a>
## [affineplane](#affineplane).[plane2](#affineplaneplane2).[transitTo](#affineplaneplane2transitto)

Transit a [plane2](#affineplaneplane2) to a target plane.
In other words, represent the [plane2](#affineplaneplane2)
in the coordinate system of the target plane.

**Parameters:**
- *plane*
  - a [plane2](#affineplaneplane2) on the reference plane.
- *target*
  - a [plane2](#affineplaneplane2), the target plane, represented on the reference plane.

**Returns:**
- a [plane2](#affineplaneplane2), represented on the target plane.

Source: [transitTo.js](https://github.com/axelpale/affineplane/blob/main/lib/plane2/transitTo.js)

<a name="affineplaneplane2translateby"></a>
## [affineplane](#affineplane).[plane2](#affineplaneplane2).[translateBy](#affineplaneplane2translateby)(plane, vec)

Translate the plane by a vector.
Basically this moves the plane origin
on the reference plane.

**Parameters:**
- *plane*
  - a [plane2](#affineplaneplane2) on the reference plane.
- *vec*
  - a [vec2](#affineplanevec2), the translation vector. Represented on the reference plane.

**Returns:**
- a [plane2](#affineplaneplane2) on the reference plane.

Source: [translateBy.js](https://github.com/axelpale/affineplane/blob/main/lib/plane2/translateBy.js)

<a name="affineplaneplane2translateto"></a>
## [affineplane](#affineplane).[plane2](#affineplaneplane2).[translateTo](#affineplaneplane2translateto)(plane, p)

Move the plane origin to a new point.
This translates the plane to a new position.

**Parameters:**
- *plane*
  - a [plane2](#affineplaneplane2) on the reference plane
- *p*
  - a [point2](#affineplanepoint2) on the reference plane

**Returns:**
- a [plane2](#affineplaneplane2)

Source: [translateTo.js](https://github.com/axelpale/affineplane/blob/main/lib/plane2/translateTo.js)

<a name="affineplaneplane2validate"></a>
## [affineplane](#affineplane).[plane2](#affineplaneplane2).[validate](#affineplaneplane2validate)(plane)

Check if object is a valid [plane2](#affineplaneplane2).

**Parameters:**
- *plane*
  - an object

**Returns:**
- a boolean

Source: [validate.js](https://github.com/axelpale/affineplane/blob/main/lib/plane2/validate.js)

<a name="affineplaneplane3"></a>
## [affineplane](#affineplane).[plane3](#affineplaneplane3)

A [plane3](#affineplaneplane3) does not model any possible plane in 3D space, but is limited
to xy planes perpendicular to z-axis and with a known z position.
Additionally, like [plane2](#affineplaneplane2), [plane3](#affineplaneplane3) models uniform scale and angle
around z-axis.

In other words, a plane is a helmert transform (helm3)
from the plane coordinates to a reference
coordinate system. Unlike [helm3](#affineplanehelm3), the [plane3](#affineplaneplane3)
has position in the space.
Therefore it can be projected perspectively.

The plane is represented with an object `{ a, b, x, y, z }`

For example `{ a: 1, b: 0, x: 0, y: 0, z: 0 }` is an exact
copy of its reference plane. For another example
`{ a: 1, b: 0, x: 20, y: 0, z: 0 }` is +20 units along x-axis
relative to its reference plane.

- [affineplane.plane3.between](#affineplaneplane3between)
- [affineplane.plane3.compose](#affineplaneplane3compose)
- [affineplane.plane3.copy](#affineplaneplane3copy)
- [affineplane.plane3.create](#affineplaneplane3create)
- [affineplane.plane3.difference](#affineplaneplane3difference)
- [affineplane.plane3.equal](#affineplaneplane3equal)
- [affineplane.plane3.fromFeatures](#affineplaneplane3fromfeatures)
- [affineplane.plane3.getNormal](#affineplaneplane3getnormal)
- [affineplane.plane3.getScale](#affineplaneplane3getscale)
- [affineplane.plane3.IDENTITY](#affineplaneplane3identity)
- [affineplane.plane3.invert](#affineplaneplane3invert)
- [affineplane.plane3.rotateBy](#affineplaneplane3rotateby)
- [affineplane.plane3.rotateTo](#affineplaneplane3rotateto)
- [affineplane.plane3.rotateToOrtho](#affineplaneplane3rotatetoortho)
- [affineplane.plane3.scaleBy](#affineplaneplane3scaleby)
- [affineplane.plane3.scaleTo](#affineplaneplane3scaleto)
- [affineplane.plane3.transform](#affineplaneplane3transform)
- [affineplane.plane3.transitFrom](#affineplaneplane3transitfrom)
- [affineplane.plane3.transitTo](#affineplaneplane3transitto)
- [affineplane.plane3.translateBy](#affineplaneplane3translateby)
- [affineplane.plane3.translateTo](#affineplaneplane3translateto)
- [affineplane.plane3.validate](#affineplaneplane3validate)


Source: [plane3/index.js](https://github.com/axelpale/affineplane/blob/main/lib/plane3/index.js)

<a name="affineplaneplane3between"></a>
## [affineplane](#affineplane).[plane3](#affineplaneplane3).[between](#affineplaneplane3between)

Alias of [affineplane.plane3.difference](#affineplaneplane3difference)

Source: [difference.js](https://github.com/axelpale/affineplane/blob/main/lib/plane3/difference.js)

<a name="affineplaneplane3compose"></a>
## [affineplane](#affineplane).[plane3](#affineplaneplane3).[compose](#affineplaneplane3compose)(planea, planeb)

Combine two planes together.

**Parameters:**
- *planea*
  - a [plane3](#affineplaneplane3) on the reference plane. This plane maps from plane A to the reference plane.
- *planeb*
  - a [plane3](#affineplaneplane3) on the planea. This plane maps from plane B to plane A.

**Returns:**
- a [plane3](#affineplaneplane3) on the reference plane. This plane maps from plane B to the reference plane.

Source: [compose.js](https://github.com/axelpale/affineplane/blob/main/lib/plane3/compose.js)

<a name="affineplaneplane3copy"></a>
## [affineplane](#affineplane).[plane3](#affineplaneplane3).[copy](#affineplaneplane3copy)(plane)

Clone the plane object.

**Parameters:**
- *plane*
  - a [plane3](#affineplaneplane3)

**Returns:**
- a [plane3](#affineplaneplane3)

Source: [copy.js](https://github.com/axelpale/affineplane/blob/main/lib/plane3/copy.js)

<a name="affineplaneplane3create"></a>
## [affineplane](#affineplane).[plane3](#affineplaneplane3).[create](#affineplaneplane3create)(origin, span)

Create a plane from 3D origin point and 2D basis vector.

**Parameters:**
- *origin*
  - a [point3](#affineplanepoint3), the position of the plane origin in the reference space.
- *span*
  - a [vec2](#affineplanevec2), the basis vector for the x-axis. The basis for y-axis is always 90deg from x-axis, the direction determined by the right-hand rule where thumb is parallel with positive z-axis.

**Returns:**
- a [plane3](#affineplaneplane3)

Source: [create.js](https://github.com/axelpale/affineplane/blob/main/lib/plane3/create.js)

<a name="affineplaneplane3difference"></a>
## [affineplane](#affineplane).[plane3](#affineplaneplane3).[difference](#affineplaneplane3difference)(source, target)

Represent a source plane on the target plane.
In other words, find a transition from a source plane A
to a target plane B from their transitions to
an intermediate root plane R.

The result is a combination of the inverse of the target plane
and the source plane.

**Parameters:**
- *source*
  - a [plane3](#affineplaneplane3), the source plane on the reference plane.
- *target*
  - a [plane3](#affineplaneplane3), the target plane on the reference plane.

**Returns:**
- a [plane3](#affineplaneplane3), the source plane on the target plane.

Aliases: [affineplane.plane3.between](#affineplaneplane3between)

Source: [difference.js](https://github.com/axelpale/affineplane/blob/main/lib/plane3/difference.js)

<a name="affineplaneplane3equal"></a>
## [affineplane](#affineplane).[plane3](#affineplaneplane3).[equal](#affineplaneplane3equal)(p1, p2)

Test if two planes are equal.

**Parameters:**
- *p1*
  - a [plane3](#affineplaneplane3)
- *p2*
  - a [plane3](#affineplaneplane3)

**Returns:**
- a boolean

Source: [equal.js](https://github.com/axelpale/affineplane/blob/main/lib/plane3/equal.js)

<a name="affineplaneplane3fromfeatures"></a>
## [affineplane](#affineplane).[plane3](#affineplaneplane3).[fromFeatures](#affineplaneplane3fromfeatures)(feats)

Create a plane from human readable features.

**Parameters:**
- *feats*
  - an object with optional props
    - *angle*
      - a number, angle in radians with respect to the reference plane.
    - *scale*
      - a number, scale multiplier with respect to the reference plane.
    - *origin*
      - a [point3](#affineplanepoint3), the plane origin point in the reference space.

**Returns:**
- a [plane3](#affineplaneplane3)

Source: [fromFeatures.js](https://github.com/axelpale/affineplane/blob/main/lib/plane3/fromFeatures.js)

<a name="affineplaneplane3getnormal"></a>
## [affineplane](#affineplane).[plane3](#affineplaneplane3).[getNormal](#affineplaneplane3getnormal)(plane)

Get a unit vector perpendicular to the plane.

**Parameters:**
- *plane*
  - a [plane3](#affineplaneplane3) on the reference plane

**Returns:**
- a [vec3](#affineplanevec3), the plane normal vector.

Source: [getNormal.js](https://github.com/axelpale/affineplane/blob/main/lib/plane3/getNormal.js)

<a name="affineplaneplane3getscale"></a>
## [affineplane](#affineplane).[plane3](#affineplaneplane3).[getScale](#affineplaneplane3getscale)(plane)

The length of the basis vector, the scale multiplier.

**Parameters:**
- *plane*
  - a [plane3](#affineplaneplane3) on the reference plane

**Returns:**
- a number, the scale multiplier with respect to the reference plane.

Source: [getScale.js](https://github.com/axelpale/affineplane/blob/main/lib/plane3/getScale.js)

<a name="affineplaneplane3identity"></a>
## [affineplane](#affineplane).[plane3](#affineplaneplane3).[IDENTITY](#affineplaneplane3identity)

The identity plane is identical to its reference plane.

Source: [plane3/index.js](https://github.com/axelpale/affineplane/blob/main/lib/plane3/index.js)

<a name="affineplaneplane3invert"></a>
## [affineplane](#affineplane).[plane3](#affineplaneplane3).[invert](#affineplaneplane3invert)(plane)

**Parameters:**
- *plane*
  - a [plane3](#affineplaneplane3), represented on the reference plane.

**Returns:**
- a [plane3](#affineplaneplane3), the reference plane represented on the given plane.

Source: [invert.js](https://github.com/axelpale/affineplane/blob/main/lib/plane3/invert.js)

<a name="affineplaneplane3rotateby"></a>
## [affineplane](#affineplane).[plane3](#affineplaneplane3).[rotateBy](#affineplaneplane3rotateby)(plane, center, radians)

Rotate the given plane in the reference space around
a line parallel to z-axis and which goes through
the given center point. The plane z depth is preserved.

**Parameters:**
- *plane*
  - a [plane3](#affineplaneplane3) in the reference space. The plane to rotate.
- *center*
  - a [point3](#affineplanepoint3), a point in the reference space. Defines the line around which to rotate.
- *radians*
  - a number, angle in radians, direction x -> y.

**Returns:**
- a [plane3](#affineplaneplane3) on the reference plane after rotation.

Source: [rotateBy.js](https://github.com/axelpale/affineplane/blob/main/lib/plane3/rotateBy.js)

<a name="affineplaneplane3rotateto"></a>
## [affineplane](#affineplane).[plane3](#affineplaneplane3).[rotateTo](#affineplaneplane3rotateto)(plane, center, radians)

Rotate the plane around a line parallel to z-axis
and which goes though the given center point.
After the rotation, the x-axis of the plane
points to the given direction.
The point where the line intersects the plane
stays fixed during the operation.

**Parameters:**
- *plane*
  - a [plane3](#affineplaneplane3), the plane to rotate. Represented on the reference plane.
- *center*
  - a [point3](#affineplanepoint3), the point that defines the line around which to rotate. Represented on the reference plane.
- *radians*
  - a number, angle to rotate to. Relative to the reference plane x-axis.

**Returns:**
- a [plane3](#affineplaneplane3), the plane after rotation.

Source: [rotateTo.js](https://github.com/axelpale/affineplane/blob/main/lib/plane3/rotateTo.js)

<a name="affineplaneplane3rotatetoortho"></a>
## [affineplane](#affineplane).[plane3](#affineplaneplane3).[rotateToOrtho](#affineplaneplane3rotatetoortho)(plane, center)

Rotate plane to nearest orthogonal angle 0, 90, 180, and 270 deg
with respect to the reference plane. The rotation happens on xy-plane,
around the line parallel to z-axis and travelling through the given point.

**Parameters:**
- *plane*
  - a [plane3](#affineplaneplane3) to rotate.
- *center*
  - a [point3](#affineplanepoint3), a point in the reference space.
  - Determines the rotation center.

**Returns:**
- a [plane2](#affineplaneplane2)

Note that if the plane is at the middle of two ortho angles,
namely at 45, 135, 225, or 315 deg, then
the nearest orthogonal angle is arbitrarily either the next
or previous orthogonal angle due to the small variations
caused by floating-point arithmetics.

Source: [rotateToOrtho.js](https://github.com/axelpale/affineplane/blob/main/lib/plane3/rotateToOrtho.js)

<a name="affineplaneplane3scaleby"></a>
## [affineplane](#affineplane).[plane3](#affineplaneplane3).[scaleBy](#affineplaneplane3scaleby)(plane, center, multiplier)

Create a plane that is scaled by the multiplier around
a center point. For example, if a plane with basis vectors
ex = (1,0), ey = (0,1) is scaled by 2, the basis vectors
of the new plane are ex_hat = (2,0), ey_hat = (0,2).
The scaling is performed about a line parallel to z-axis
which goes through the given center point.
The scaling preserves the z depth of the plane.

**Parameters:**
- *plane*
  - a [plane3](#affineplaneplane3) on the reference plane
- *center*
  - a [point3](#affineplanepoint3) on the reference plane
- *multiplier*
  - a number, the scaling factor

**Returns:**
- a [plane3](#affineplaneplane3), a scaled plane

Source: [scaleBy.js](https://github.com/axelpale/affineplane/blob/main/lib/plane3/scaleBy.js)

<a name="affineplaneplane3scaleto"></a>
## [affineplane](#affineplane).[plane3](#affineplaneplane3).[scaleTo](#affineplaneplane3scaleto)(plane, center, scale)

Scale a plane to the given scale.
This is achieved by scaling the given plane around
a line which is parallel to z-axis and goes through
the given center point.

**Parameters:**
- *plane*
  - a [plane3](#affineplaneplane3) on the reference plane
- *center*
  - a [point3](#affineplanepoint3) on the reference plane
- *scale*
  - a number, the desired scale

**Returns:**
- a [plane3](#affineplaneplane3), a scaled plane

Source: [scaleTo.js](https://github.com/axelpale/affineplane/blob/main/lib/plane3/scaleTo.js)

<a name="affineplaneplane3transform"></a>
## [affineplane](#affineplane).[plane3](#affineplaneplane3).[transform](#affineplaneplane3transform)(plane, tr)

Transform the plane with a helmert transformation.
Basically, the plane is a transformation from its internal
coordinate system to the reference coordinate system.
The returned plane is the result when the plane matrix
is multiplied from left by the given transform matrix.
For multiplication from right, see [affineplane.plane3.compose](#affineplaneplane3compose).

**Parameters:**
- *plane*
  - a [plane3](#affineplaneplane3) in the reference space
- *tr*
  - a [helm2](#affineplanehelm2) or [helm3](#affineplanehelm3) in the reference space

**Returns:**
- a [plane3](#affineplaneplane3) in the reference space

Source: [transform.js](https://github.com/axelpale/affineplane/blob/main/lib/plane3/transform.js)

<a name="affineplaneplane3transitfrom"></a>
## [affineplane](#affineplane).[plane3](#affineplaneplane3).[transitFrom](#affineplaneplane3transitfrom)(plane, source)

Transit a [plane3](#affineplaneplane3) from the source plane
to the reference plane. In other words,
represent the same plane in the coordinate
system of the reference plane.

**Parameters:**
- *plane*
  - a [plane3](#affineplaneplane3), represented on the source plane.
- *source*
  - a [plane3](#affineplaneplane3), the source plane, represented on the reference plane.

**Returns:**
- a [plane3](#affineplaneplane3), represented on the reference plane.

Source: [transitFrom.js](https://github.com/axelpale/affineplane/blob/main/lib/plane3/transitFrom.js)

<a name="affineplaneplane3transitto"></a>
## [affineplane](#affineplane).[plane3](#affineplaneplane3).[transitTo](#affineplaneplane3transitto)(plane, target)

Transit a [plane3](#affineplaneplane3) to a target plane.
In other words, represent the [plane3](#affineplaneplane3)
in the coordinate system of the target plane.

**Parameters:**
- *plane*
  - a [plane3](#affineplaneplane3), represented on the reference plane.
- *target*
  - a [plane3](#affineplaneplane3), the target plane, represented on the reference plane.

**Returns:**
- a [plane3](#affineplaneplane3), represented on the target plane.

Source: [transitTo.js](https://github.com/axelpale/affineplane/blob/main/lib/plane3/transitTo.js)

<a name="affineplaneplane3translateby"></a>
## [affineplane](#affineplane).[plane3](#affineplaneplane3).[translateBy](#affineplaneplane3translateby)(plane, vec)

Translate the plane by a vector.
Basically this moves the plane origin
on the reference plane by the given vector.

**Parameters:**
- *plane*
  - a [plane3](#affineplaneplane3) in the reference space.
- *vec*
  - a [vec2](#affineplanevec2) or [vec3](#affineplanevec3) in the reference space.

**Returns:**
- a [plane3](#affineplaneplane3) in the reference space.

Source: [translateBy.js](https://github.com/axelpale/affineplane/blob/main/lib/plane3/translateBy.js)

<a name="affineplaneplane3translateto"></a>
## [affineplane](#affineplane).[plane3](#affineplaneplane3).[translateTo](#affineplaneplane3translateto)(plane, p)

Move the plane origin to a new point.
This translates the plane to a new position.

**Parameters:**
- *plane*
  - a [plane3](#affineplaneplane3)
- *p*
  - a [point2](#affineplanepoint2) or [point3](#affineplanepoint3), the new origin position.

**Returns:**
- a [plane3](#affineplaneplane3)

Source: [translateTo.js](https://github.com/axelpale/affineplane/blob/main/lib/plane3/translateTo.js)

<a name="affineplaneplane3validate"></a>
## [affineplane](#affineplane).[plane3](#affineplaneplane3).[validate](#affineplaneplane3validate)(plane)

Check if object is a valid [plane3](#affineplaneplane3).

**Parameters:**
- *plane*
  - an object

**Returns:**
- a boolean

Source: [validate.js](https://github.com/axelpale/affineplane/blob/main/lib/plane3/validate.js)

<a name="affineplanepoint2"></a>
## [affineplane](#affineplane).[point2](#affineplanepoint2)

A two-dimensional point. A point is a position in affine space.
Due to affinity, two points cannot be added together,
although the distance between and their mean can be computed.
An affine space does not have origin; `{ x:0, y:0 }` is not an origin.

![A point](docs/geometry_point.png)

- [affineplane.point2.average](#affineplanepoint2average)
- [affineplane.point2.copy](#affineplanepoint2copy)
- [affineplane.point2.create](#affineplanepoint2create)
- [affineplane.point2.delta](#affineplanepoint2delta)
- [affineplane.point2.diff](#affineplanepoint2diff)
- [affineplane.point2.difference](#affineplanepoint2difference)
- [affineplane.point2.distance](#affineplanepoint2distance)
- [affineplane.point2.equal](#affineplanepoint2equal)
- [affineplane.point2.equals](#affineplanepoint2equals)
- [affineplane.point2.fromArray](#affineplanepoint2fromarray)
- [affineplane.point2.mean](#affineplanepoint2mean)
- [affineplane.point2.move](#affineplanepoint2move)
- [affineplane.point2.offset](#affineplanepoint2offset)
- [affineplane.point2.polarOffset](#affineplanepoint2polaroffset)
- [affineplane.point2.projectTo](#affineplanepoint2projectto)
- [affineplane.point2.projectToLine](#affineplanepoint2projecttoline)
- [affineplane.point2.rotateBy](#affineplanepoint2rotateby)
- [affineplane.point2.toArray](#affineplanepoint2toarray)
- [affineplane.point2.transform](#affineplanepoint2transform)
- [affineplane.point2.transitFrom](#affineplanepoint2transitfrom)
- [affineplane.point2.transitTo](#affineplanepoint2transitto)
- [affineplane.point2.translate](#affineplanepoint2translate)
- [affineplane.point2.validate](#affineplanepoint2validate)


Source: [point2/index.js](https://github.com/axelpale/affineplane/blob/main/lib/point2/index.js)

<a name="affineplanepoint2average"></a>
## [affineplane](#affineplane).[point2](#affineplanepoint2).[average](#affineplanepoint2average)(ps)

Average of points.

**Parameters:**
- *ps*
  - array of [point2](#affineplanepoint2)

**Returns:**
- a [point2](#affineplanepoint2)

Aliases: [affineplane.point2.mean](#affineplanepoint2mean)

Source: [average.js](https://github.com/axelpale/affineplane/blob/main/lib/point2/average.js)

<a name="affineplanepoint2copy"></a>
## [affineplane](#affineplane).[point2](#affineplanepoint2).[copy](#affineplanepoint2copy)(p)

Copy point object.

**Parameters:**
- *p*
  - a [point2](#affineplanepoint2)

**Returns:**
- a [point2](#affineplanepoint2)

Source: [copy.js](https://github.com/axelpale/affineplane/blob/main/lib/point2/copy.js)

<a name="affineplanepoint2create"></a>
## [affineplane](#affineplane).[point2](#affineplanepoint2).[create](#affineplanepoint2create)(x, y)

Create a [point2](#affineplanepoint2) object: `{ x, y }`.

**Parameters:**
- *x*
  - a number. The x coordinate.
- *y*
  - a number. The y coordinate.

**Returns:**
- a [point2](#affineplanepoint2)

Source: [create.js](https://github.com/axelpale/affineplane/blob/main/lib/point2/create.js)

<a name="affineplanepoint2delta"></a>
## [affineplane](#affineplane).[point2](#affineplanepoint2).[delta](#affineplanepoint2delta)

Alias of [affineplane.point2.difference](#affineplanepoint2difference), [affineplane.point2.diff](#affineplanepoint2diff)

Source: [difference.js](https://github.com/axelpale/affineplane/blob/main/lib/point2/difference.js)

<a name="affineplanepoint2diff"></a>
## [affineplane](#affineplane).[point2](#affineplanepoint2).[diff](#affineplanepoint2diff)

Alias of [affineplane.point2.difference](#affineplanepoint2difference), [affineplane.point2.delta](#affineplanepoint2delta)

Source: [difference.js](https://github.com/axelpale/affineplane/blob/main/lib/point2/difference.js)

<a name="affineplanepoint2difference"></a>
## [affineplane](#affineplane).[point2](#affineplanepoint2).[difference](#affineplanepoint2difference)(p, q)

A vector from point p to point q.

**Parameters:**
- *p*
  - a [point2](#affineplanepoint2)
- *q*
  - a [point2](#affineplanepoint2)

**Returns:**
- a [vec2](#affineplanevec2)

Aliases: [affineplane.point2.diff](#affineplanepoint2diff), [affineplane.point2.delta](#affineplanepoint2delta)

Source: [difference.js](https://github.com/axelpale/affineplane/blob/main/lib/point2/difference.js)

<a name="affineplanepoint2distance"></a>
## [affineplane](#affineplane).[point2](#affineplanepoint2).[distance](#affineplanepoint2distance)(p, q)

Distance between two points.

**Parameters:**
- *p*
  - a [point2](#affineplanepoint2)
- *q*
  - a [point2](#affineplanepoint2)

**Returns:**
- a number, a distance from p to q (= distance from q to p)

Source: [distance.js](https://github.com/axelpale/affineplane/blob/main/lib/point2/distance.js)

<a name="affineplanepoint2equal"></a>
## [affineplane](#affineplane).[point2](#affineplanepoint2).[equal](#affineplanepoint2equal)(p, q)

Test if points p, q are equal.

**Parameters:**
- *p*
  - a [point2](#affineplanepoint2)
- *q*
  - a [point2](#affineplanepoint2)

**Returns:**
- a boolean

Aliases: [affineplane.point2.equals](#affineplanepoint2equals)

Source: [equal.js](https://github.com/axelpale/affineplane/blob/main/lib/point2/equal.js)

<a name="affineplanepoint2equals"></a>
## [affineplane](#affineplane).[point2](#affineplanepoint2).[equals](#affineplanepoint2equals)

Alias of [affineplane.point2.equal](#affineplanepoint2equal)

Source: [equal.js](https://github.com/axelpale/affineplane/blob/main/lib/point2/equal.js)

<a name="affineplanepoint2fromarray"></a>
## [affineplane](#affineplane).[point2](#affineplanepoint2).[fromArray](#affineplanepoint2fromarray)(arrp)

Create `{ x, y }` point from array [x, y].

**Parameters:**
- *arrp*
  - a two-element array

**Returns:**
- a [point2](#affineplanepoint2)

Source: [fromArray.js](https://github.com/axelpale/affineplane/blob/main/lib/point2/fromArray.js)

<a name="affineplanepoint2mean"></a>
## [affineplane](#affineplane).[point2](#affineplanepoint2).[mean](#affineplanepoint2mean)

Alias of [affineplane.point2.average](#affineplanepoint2average)

Source: [average.js](https://github.com/axelpale/affineplane/blob/main/lib/point2/average.js)

<a name="affineplanepoint2move"></a>
## [affineplane](#affineplane).[point2](#affineplanepoint2).[move](#affineplanepoint2move)

Alias of [affineplane.point2.translate](#affineplanepoint2translate)

Source: [translate.js](https://github.com/axelpale/affineplane/blob/main/lib/point2/translate.js)

<a name="affineplanepoint2offset"></a>
## [affineplane](#affineplane).[point2](#affineplanepoint2).[offset](#affineplanepoint2offset)(p, dx, dy)

Offset a point by scalars dx dy.

**Parameters:**
- *p*
  - a [point2](#affineplanepoint2)
- *dx*
  - a number, an offset along x-axis.
- *dy*
  - a number, an offset along y-axis.

**Returns:**
- a [point2](#affineplanepoint2), translated by the vector `{ x: dx, y: dy }`

Source: [offset.js](https://github.com/axelpale/affineplane/blob/main/lib/point2/offset.js)

<a name="affineplanepoint2polaroffset"></a>
## [affineplane](#affineplane).[point2](#affineplanepoint2).[polarOffset](#affineplanepoint2polaroffset)(p, distance, angle)

Create a point away from p at the given distance and angle.

**Parameters:**
- *p*
  - a [point2](#affineplanepoint2)
- *distance*
  - a number, the distance from p.
- *angle*
  - a number, the angle in radians

**Returns:**
- a [point2](#affineplanepoint2)

Source: [polarOffset.js](https://github.com/axelpale/affineplane/blob/main/lib/point2/polarOffset.js)

<a name="affineplanepoint2projectto"></a>
## [affineplane](#affineplane).[point2](#affineplanepoint2).[projectTo](#affineplanepoint2projectto)(point, plane, camera)

Project a point onto another plane in 3d.
If camera is given, project perspectively.
Otherwise, project orthogonally.

**Parameters:**
- *point*
  - a [point2](#affineplanepoint2) in the reference space, assume z=0.
- *plane*
  - a [plane3](#affineplaneplane3) in the reference space.
- *camera*
  - optional [point3](#affineplanepoint3) in the reference space.

**Returns:**
- a [point2](#affineplanepoint2) on the target plane.

Source: [projectTo.js](https://github.com/axelpale/affineplane/blob/main/lib/point2/projectTo.js)

<a name="affineplanepoint2projecttoline"></a>
## [affineplane](#affineplane).[point2](#affineplanepoint2).[projectToLine](#affineplanepoint2projecttoline)(p, line)

Project a point orthogonally onto a line.

**Parameters:**
- *p*
  - a [point2](#affineplanepoint2)
- *line*
  - a [line2](#affineplaneline2)

**Returns:**
- a [point2](#affineplanepoint2)

Source: [projectToLine.js](https://github.com/axelpale/affineplane/blob/main/lib/point2/projectToLine.js)

<a name="affineplanepoint2rotateby"></a>
## [affineplane](#affineplane).[point2](#affineplanepoint2).[rotateBy](#affineplanepoint2rotateby)(p, origin, radians)

Rotate point about the given center.

**Parameters:**
- *p*
  - a [point2](#affineplanepoint2)
- *origin*
  - a [point2](#affineplanepoint2), the point around to rotate
- *radians*
  - a number, angle in radians

**Returns:**
- a [point2](#affineplanepoint2)

Source: [rotateBy.js](https://github.com/axelpale/affineplane/blob/main/lib/point2/rotateBy.js)

<a name="affineplanepoint2toarray"></a>
## [affineplane](#affineplane).[point2](#affineplanepoint2).[toArray](#affineplanepoint2toarray)(p)

Get the [point2](#affineplanepoint2) object as an array.

**Parameters:**
- *p*
  - a [point2](#affineplanepoint2)

**Returns:**
- an array `[x, y]`

Source: [toArray.js](https://github.com/axelpale/affineplane/blob/main/lib/point2/toArray.js)

<a name="affineplanepoint2transform"></a>
## [affineplane](#affineplane).[point2](#affineplanepoint2).[transform](#affineplanepoint2transform)(p, tr)

Transform a point.

**Parameters:**
- *p*
  - a [point2](#affineplanepoint2)
- *tr*
  - a [helm2](#affineplanehelm2), a transform

**Returns:**
- a [point2](#affineplanepoint2), the transformed point

Source: [transform.js](https://github.com/axelpale/affineplane/blob/main/lib/point2/transform.js)

<a name="affineplanepoint2transitfrom"></a>
## [affineplane](#affineplane).[point2](#affineplanepoint2).[transitFrom](#affineplanepoint2transitfrom)(point, plane)

Transit a [point2](#affineplanepoint2) from the source plane
to the reference plane.

**Parameters:**
- *point*
  - a [point2](#affineplanepoint2) on the source plane.
- *source*
  - a [plane2](#affineplaneplane2), the source plane, represented on the reference plane.

**Returns:**
- a [point2](#affineplanepoint2), represented on the reference plane.

Source: [transitFrom.js](https://github.com/axelpale/affineplane/blob/main/lib/point2/transitFrom.js)

<a name="affineplanepoint2transitto"></a>
## [affineplane](#affineplane).[point2](#affineplanepoint2).[transitTo](#affineplanepoint2transitto)(point, target)

Transit a [point2](#affineplanepoint2) to a target plane.
In other words, represent the [point2](#affineplanepoint2)
in the coordinate system of the plane.

**Parameters:**
- *point*
  - a [point2](#affineplanepoint2) on the reference plane.
- *target*
  - a [plane2](#affineplaneplane2), the target plane, represented on the reference plane.

**Returns:**
- a [point2](#affineplanepoint2), represented on the target plane.

Source: [transitTo.js](https://github.com/axelpale/affineplane/blob/main/lib/point2/transitTo.js)

<a name="affineplanepoint2translate"></a>
## [affineplane](#affineplane).[point2](#affineplanepoint2).[translate](#affineplanepoint2translate)(p, vec)

Translate the point by the given vector.

**Parameters:**
- *p*
  - a [point2](#affineplanepoint2)
- *vec*
  - a [vec2](#affineplanevec2)

**Returns:**
- a [point2](#affineplanepoint2)

Aliases: [affineplane.point2.move](#affineplanepoint2move)

Source: [translate.js](https://github.com/axelpale/affineplane/blob/main/lib/point2/translate.js)

<a name="affineplanepoint2validate"></a>
## [affineplane](#affineplane).[point2](#affineplanepoint2).[validate](#affineplanepoint2validate)(p)

Check if the object is a valid [point2](#affineplanepoint2).
Valid [point2](#affineplanepoint2) has x and y properties that are valid numbers.

**Parameters:**
- *p*
  - an object

**Returns:**
- a boolean, true if valid [point2](#affineplanepoint2)

Source: [validate.js](https://github.com/axelpale/affineplane/blob/main/lib/point2/validate.js)

<a name="affineplanepoint3"></a>
## [affineplane](#affineplane).[point3](#affineplanepoint3)

Three-dimensional point { x, y, z }.

- [affineplane.point3.almostEqual](#affineplanepoint3almostequal)
- [affineplane.point3.average](#affineplanepoint3average)
- [affineplane.point3.copy](#affineplanepoint3copy)
- [affineplane.point3.create](#affineplanepoint3create)
- [affineplane.point3.delta](#affineplanepoint3delta)
- [affineplane.point3.diff](#affineplanepoint3diff)
- [affineplane.point3.difference](#affineplanepoint3difference)
- [affineplane.point3.distance](#affineplanepoint3distance)
- [affineplane.point3.equal](#affineplanepoint3equal)
- [affineplane.point3.equals](#affineplanepoint3equals)
- [affineplane.point3.fromArray](#affineplanepoint3fromarray)
- [affineplane.point3.mean](#affineplanepoint3mean)
- [affineplane.point3.offset](#affineplanepoint3offset)
- [affineplane.point3.polarOffset](#affineplanepoint3polaroffset)
- [affineplane.point3.projectTo](#affineplanepoint3projectto)
- [affineplane.point3.rotateBy](#affineplanepoint3rotateby)
- [affineplane.point3.toArray](#affineplanepoint3toarray)
- [affineplane.point3.transitFrom](#affineplanepoint3transitfrom)
- [affineplane.point3.transitTo](#affineplanepoint3transitto)
- [affineplane.point3.translate](#affineplanepoint3translate)
- [affineplane.point3.validate](#affineplanepoint3validate)


Source: [point3/index.js](https://github.com/axelpale/affineplane/blob/main/lib/point3/index.js)

<a name="affineplanepoint3almostequal"></a>
## [affineplane](#affineplane).[point3](#affineplanepoint3).[almostEqual](#affineplanepoint3almostequal)(p, q, [epsilon])

Test if points are almost equal by the margin of epsilon.

**Parameters:**
- *p*
  - a [point3](#affineplanepoint3)
- *q*
  - a [point3](#affineplanepoint3)
- *epsilon*
  - optional number, default to [affineplane.epsilon](#affineplaneepsilon). Set to 0 for strict comparison.

**Returns:**
- a boolean

Source: [almostEqual.js](https://github.com/axelpale/affineplane/blob/main/lib/point3/almostEqual.js)

<a name="affineplanepoint3average"></a>
## [affineplane](#affineplane).[point3](#affineplanepoint3).[average](#affineplanepoint3average)(ps)

Average of points.

**Parameters:**
- *ps*
  - array of [point3](#affineplanepoint3)

**Returns:**
- a [point3](#affineplanepoint3)

Aliases: [affineplane.point3.mean](#affineplanepoint3mean)

Source: [average.js](https://github.com/axelpale/affineplane/blob/main/lib/point3/average.js)

<a name="affineplanepoint3copy"></a>
## [affineplane](#affineplane).[point3](#affineplanepoint3).[copy](#affineplanepoint3copy)(p)

Clone [point3](#affineplanepoint3) to a new object.

**Returns:**
- a [point3](#affineplanepoint3)

Source: [copy.js](https://github.com/axelpale/affineplane/blob/main/lib/point3/copy.js)

<a name="affineplanepoint3create"></a>
## [affineplane](#affineplane).[point3](#affineplanepoint3).[create](#affineplanepoint3create)(x, y, z)

Create a three-dimensional point `{x, y, z}`.

**Returns:**
- a [point3](#affineplanepoint3)

Source: [create.js](https://github.com/axelpale/affineplane/blob/main/lib/point3/create.js)

<a name="affineplanepoint3delta"></a>
## [affineplane](#affineplane).[point3](#affineplanepoint3).[delta](#affineplanepoint3delta)

Alias of [affineplane.point3.difference](#affineplanepoint3difference), [affineplane.point3.diff](#affineplanepoint3diff)

Source: [difference.js](https://github.com/axelpale/affineplane/blob/main/lib/point3/difference.js)

<a name="affineplanepoint3diff"></a>
## [affineplane](#affineplane).[point3](#affineplanepoint3).[diff](#affineplanepoint3diff)

Alias of [affineplane.point3.difference](#affineplanepoint3difference), [affineplane.point3.delta](#affineplanepoint3delta)

Source: [difference.js](https://github.com/axelpale/affineplane/blob/main/lib/point3/difference.js)

<a name="affineplanepoint3difference"></a>
## [affineplane](#affineplane).[point3](#affineplanepoint3).[difference](#affineplanepoint3difference)(p, q)

A vector from point p to point q.

**Parameters:**
- *p*
  - a [point3](#affineplanepoint3)
- *q*
  - a [point3](#affineplanepoint3)

**Returns:**
- a [vec3](#affineplanevec3)

Aliases: [affineplane.point3.diff](#affineplanepoint3diff), [affineplane.point3.delta](#affineplanepoint3delta)

Source: [difference.js](https://github.com/axelpale/affineplane/blob/main/lib/point3/difference.js)

<a name="affineplanepoint3distance"></a>
## [affineplane](#affineplane).[point3](#affineplanepoint3).[distance](#affineplanepoint3distance)(p, q)

Euclidean distance between two points.

**Parameters:**
- *p*
  - a [point3](#affineplanepoint3)
- *q*
  - a [point3](#affineplanepoint3)

**Returns:**
- a number, a distance from p to q (= distance from q to p)

Source: [distance.js](https://github.com/axelpale/affineplane/blob/main/lib/point3/distance.js)

<a name="affineplanepoint3equal"></a>
## [affineplane](#affineplane).[point3](#affineplanepoint3).[equal](#affineplanepoint3equal)(p, q)

Test if points p, q are equal in value.

**Parameters:**
- *p*
  - a [point3](#affineplanepoint3)
- *q*
  - a [point3](#affineplanepoint3)

**Returns:**
- a boolean, true if equal

Aliases: [affineplane.point3.equals](#affineplanepoint3equals)

Source: [equal.js](https://github.com/axelpale/affineplane/blob/main/lib/point3/equal.js)

<a name="affineplanepoint3equals"></a>
## [affineplane](#affineplane).[point3](#affineplanepoint3).[equals](#affineplanepoint3equals)

Alias of [affineplane.point3.equal](#affineplanepoint3equal)

Source: [equal.js](https://github.com/axelpale/affineplane/blob/main/lib/point3/equal.js)

<a name="affineplanepoint3fromarray"></a>
## [affineplane](#affineplane).[point3](#affineplanepoint3).[fromArray](#affineplanepoint3fromarray)(arrp)

Create a [point3](#affineplanepoint3) from array `[x, y, z]`.

**Parameters:**
- *arrp*
  - a three-element array

**Returns:**
- a [point3](#affineplanepoint3)

Source: [fromArray.js](https://github.com/axelpale/affineplane/blob/main/lib/point3/fromArray.js)

<a name="affineplanepoint3mean"></a>
## [affineplane](#affineplane).[point3](#affineplanepoint3).[mean](#affineplanepoint3mean)

Alias of [affineplane.point3.average](#affineplanepoint3average)

Source: [average.js](https://github.com/axelpale/affineplane/blob/main/lib/point3/average.js)

<a name="affineplanepoint3offset"></a>
## [affineplane](#affineplane).[point3](#affineplanepoint3).[offset](#affineplanepoint3offset)(p, dx, dy, dz)

Offset a point by scalars dx, dy, dz.

**Parameters:**
- *p*
  - a [point2](#affineplanepoint2)
- *dx*
  - a number, the offset along x-axis
- *dy*
  - a number, the offset along y-axis
- *dz*
  - a number, the offset along z-axis

**Returns:**
- a [point3](#affineplanepoint3), translated by the vector `{ x: dx, y: dy, z: dz }`

Source: [offset.js](https://github.com/axelpale/affineplane/blob/main/lib/point3/offset.js)

<a name="affineplanepoint3polaroffset"></a>
## [affineplane](#affineplane).[point3](#affineplanepoint3).[polarOffset](#affineplanepoint3polaroffset)(p, distance, roll, pitch)

Create a point near p at the given distance, roll angle,
and pitch angle.

**Parameters:**
- *p*
  - a [point3](#affineplanepoint3)
- *distance*
  - a number, the distance from p.
- *roll*
  - a number, the roll angle in radians. Clockwise rotation, the right-hand rule for z-axis.
- *pitch*
  - optional number, default 0. The pitch angle in radians. The right-hand rule for x-axis.

**Returns:**
- a [point3](#affineplanepoint3)

Source: [polarOffset.js](https://github.com/axelpale/affineplane/blob/main/lib/point3/polarOffset.js)

<a name="affineplanepoint3projectto"></a>
## [affineplane](#affineplane).[point3](#affineplanepoint3).[projectTo](#affineplanepoint3projectto)(point, plane, camera)

Project a 3D point onto a plane in 3D space.

**Parameters:**
- *point*
  - a [point3](#affineplanepoint3) in the reference space.
- *plane*
  - a [plane3](#affineplaneplane3) in the reference space. The target plane.
- *camera*
  - optional [point3](#affineplanepoint3) in the reference space. The camera position.

**Returns:**
- a [point2](#affineplanepoint2) on the target plane.

Source: [projectTo.js](https://github.com/axelpale/affineplane/blob/main/lib/point3/projectTo.js)

<a name="affineplanepoint3rotateby"></a>
## [affineplane](#affineplane).[point3](#affineplanepoint3).[rotateBy](#affineplanepoint3rotateby)(p, origin, roll, pitch)

Rotate point around the given center point.
Roll is applied before pitch.

**Parameters:**
- *p*
  - a [point3](#affineplanepoint3)
- *origin*
  - a [point3](#affineplanepoint3), the point around to rotate
- *roll*
  - a number, roll angle in radians. Right-hand rotation around z-axis.
- *pitch*
  - optional number, pitch angle in radians. Default 0. Right-hand rotation around x-axis.

**Returns:**
- a [point3](#affineplanepoint3)

Source: [rotateBy.js](https://github.com/axelpale/affineplane/blob/main/lib/point3/rotateBy.js)

<a name="affineplanepoint3toarray"></a>
## [affineplane](#affineplane).[point3](#affineplanepoint3).[toArray](#affineplanepoint3toarray)(p)

Get the [point3](#affineplanepoint3) object as an array.
Compatible with [affineplane.point3.fromArray](#affineplanepoint3fromarray).

**Parameters:**
- *p*
  - a [point3](#affineplanepoint3)

**Returns:**
- an array `[x, y, z]`

Source: [toArray.js](https://github.com/axelpale/affineplane/blob/main/lib/point3/toArray.js)

<a name="affineplanepoint3transitfrom"></a>
## [affineplane](#affineplane).[point3](#affineplanepoint3).[transitFrom](#affineplanepoint3transitfrom)(point, plane)

Represent the point on the reference plane
without losing information.

**Parameters:**
- *point*
  - a [point3](#affineplanepoint3) on the source plane.
- *plane*
  - a [plane3](#affineplaneplane3) on the reference plane. The source plane.

**Returns:**
- a [point3](#affineplanepoint3), represented on the reference plane.

Source: [transitFrom.js](https://github.com/axelpale/affineplane/blob/main/lib/point3/transitFrom.js)

<a name="affineplanepoint3transitto"></a>
## [affineplane](#affineplane).[point3](#affineplanepoint3).[transitTo](#affineplanepoint3transitto)(point, plane)

Represent the point on the target plane
without losing information.

**Parameters:**
- *point*
  - a [point3](#affineplanepoint3) on the reference plane.
- *plane*
  - a [plane3](#affineplaneplane3) on the reference plane. The target plane.

**Returns:**
- a [point3](#affineplanepoint3), represented on the target plane.

Source: [transitTo.js](https://github.com/axelpale/affineplane/blob/main/lib/point3/transitTo.js)

<a name="affineplanepoint3translate"></a>
## [affineplane](#affineplane).[point3](#affineplanepoint3).[translate](#affineplanepoint3translate)(p, vec)

Translate the point by the given vector.

**Parameters:**
- *p*
  - a [point3](#affineplanepoint3)
- *vec*
  - a [vec3](#affineplanevec3) or [vec2](#affineplanevec2)

**Returns:**
- a [point3](#affineplanepoint3)

Source: [translate.js](https://github.com/axelpale/affineplane/blob/main/lib/point3/translate.js)

<a name="affineplanepoint3validate"></a>
## [affineplane](#affineplane).[point3](#affineplanepoint3).[validate](#affineplanepoint3validate)(p)

Check if the object is a valid [point3](#affineplanepoint3).
Valid [point3](#affineplanepoint3) has props x, y and z that are valid numbers.

**Parameters:**
- *p*
  - an object

**Returns:**
- a boolean, true if valid

Source: [validate.js](https://github.com/axelpale/affineplane/blob/main/lib/point3/validate.js)

<a name="affineplanepoly2"></a>
## [affineplane](#affineplane).[poly2](#affineplanepoly2)

A two-dimensional polygon; Array of [point2](#affineplanepoint2);
A closed sequence of points `[{ x, y }, { x, y }, ...]`.

- [affineplane.poly2.create](#affineplanepoly2create)


Source: [poly2/index.js](https://github.com/axelpale/affineplane/blob/main/lib/poly2/index.js)

<a name="affineplanepoly2create"></a>
## [affineplane](#affineplane).[poly2](#affineplanepoly2).[create](#affineplanepoly2create)(points)

Create a polygon on plane. Deep-clones the points array.

**Parameters:**
- *points*
  - array of [point2](#affineplanepoint2)

**Returns:**
- a [poly2](#affineplanepoly2), array of points

Source: [create.js](https://github.com/axelpale/affineplane/blob/main/lib/poly2/create.js)

<a name="affineplanesize2"></a>
## [affineplane](#affineplane).[size2](#affineplanesize2)

Two-dimensional rectangular size, consisting of width and height.

Represented with an object `{ w, h }`.

- [affineplane.size2.area](#affineplanesize2area)
- [affineplane.size2.atNorm](#affineplanesize2atnorm)
- [affineplane.size2.create](#affineplanesize2create)
- [affineplane.size2.scaleBy](#affineplanesize2scaleby)
- [affineplane.size2.transitFrom](#affineplanesize2transitfrom)
- [affineplane.size2.transitTo](#affineplanesize2transitto)


Source: [size2/index.js](https://github.com/axelpale/affineplane/blob/main/lib/size2/index.js)

<a name="affineplanesize2area"></a>
## [affineplane](#affineplane).[size2](#affineplanesize2).[area](#affineplanesize2area)(sz)

Area. If your w and h are in px, this gives you
the total number of pixels.

**Parameters:**
- *sz*
  - a [size2](#affineplanesize2)

**Returns:**
- a number

Source: [area.js](https://github.com/axelpale/affineplane/blob/main/lib/size2/area.js)

<a name="affineplanesize2atnorm"></a>
## [affineplane](#affineplane).[size2](#affineplanesize2).[atNorm](#affineplanesize2atnorm)(sz, nw, nh)

Find a point on the area.

**Parameters:**
- *sz*
  - a [size2](#affineplanesize2)
- *nw*
  - a normalized width in 0..1
- *nh*
  - a normalized height

**Returns:**
- a [point2](#affineplanepoint2)

Source: [atNorm.js](https://github.com/axelpale/affineplane/blob/main/lib/size2/atNorm.js)

<a name="affineplanesize2create"></a>
## [affineplane](#affineplane).[size2](#affineplanesize2).[create](#affineplanesize2create)(width, height)

Create a [size2](#affineplanesize2) object.

**Parameters:**
- *width*
  - a number
- *height*
  - a number

**Returns:**
- a [size2](#affineplanesize2)

Source: [create.js](https://github.com/axelpale/affineplane/blob/main/lib/size2/create.js)

<a name="affineplanesize2scaleby"></a>
## [affineplane](#affineplane).[size2](#affineplanesize2).[scaleBy](#affineplanesize2scaleby)(sz, multiplier)

Ratio-preserving scale. Multiplies all dimensions uniformly.

**Parameters:**
- *sz*
  - a [size2](#affineplanesize2)
- *multiplier*
  - a number

**Returns:**
- a [size2](#affineplanesize2)

Source: [scaleBy.js](https://github.com/axelpale/affineplane/blob/main/lib/size2/scaleBy.js)

<a name="affineplanesize2transitfrom"></a>
## [affineplane](#affineplane).[size2](#affineplanesize2).[transitFrom](#affineplanesize2transitfrom)(size, source)

Transit a size from the source plane
to the reference plane.

**Parameters:**
- *size*
  - a [size2](#affineplanesize2) on the source plane.
- *source*
  - a [plane2](#affineplaneplane2), the source plane, represented on the reference plane.

**Returns:**
- a [size2](#affineplanesize2), represented on the reference plane.

Source: [transitFrom.js](https://github.com/axelpale/affineplane/blob/main/lib/size2/transitFrom.js)

<a name="affineplanesize2transitto"></a>
## [affineplane](#affineplane).[size2](#affineplanesize2).[transitTo](#affineplanesize2transitto)(size, target)

Transit a [size2](#affineplanesize2) to a target plane.
In other words, represent the size
in the coordinate system of the target plane.

**Parameters:**
- *size*
  - a [size2](#affineplanesize2) on the reference plane.
- *target*
  - a [plane2](#affineplaneplane2), the target plane, represented on the reference plane.

**Returns:**
- a [size2](#affineplanesize2) on the target plane.

Source: [transitTo.js](https://github.com/axelpale/affineplane/blob/main/lib/size2/transitTo.js)

<a name="affineplanevec2"></a>
## [affineplane](#affineplane).[vec2](#affineplanevec2)

Vector is a two dimensional dynamic movent between points.

![A vector](docs/geometry_vector.png)

Aliases: [affineplane.vector2](#affineplanevector2)

- [affineplane.vec2.add](#affineplanevec2add)
- [affineplane.vec2.almostEqual](#affineplanevec2almostequal)
- [affineplane.vec2.average](#affineplanevec2average)
- [affineplane.vec2.copy](#affineplanevec2copy)
- [affineplane.vec2.create](#affineplanevec2create)
- [affineplane.vec2.cross](#affineplanevec2cross)
- [affineplane.vec2.difference](#affineplanevec2difference)
- [affineplane.vec2.divide](#affineplanevec2divide)
- [affineplane.vec2.dot](#affineplanevec2dot)
- [affineplane.vec2.equal](#affineplanevec2equal)
- [affineplane.vec2.fromArray](#affineplanevec2fromarray)
- [affineplane.vec2.fromPolar](#affineplanevec2frompolar)
- [affineplane.vec2.invert](#affineplanevec2invert)
- [affineplane.vec2.magnitude](#affineplanevec2magnitude)
- [affineplane.vec2.max](#affineplanevec2max)
- [affineplane.vec2.mean](#affineplanevec2mean)
- [affineplane.vec2.min](#affineplanevec2min)
- [affineplane.vec2.negate](#affineplanevec2negate)
- [affineplane.vec2.norm](#affineplanevec2norm)
- [affineplane.vec2.normalize](#affineplanevec2normalize)
- [affineplane.vec2.projectTo](#affineplanevec2projectto)
- [affineplane.vec2.rotateBy](#affineplanevec2rotateby)
- [affineplane.vec2.rotateTo](#affineplanevec2rotateto)
- [affineplane.vec2.scaleBy](#affineplanevec2scaleby)
- [affineplane.vec2.scaleTo](#affineplanevec2scaleto)
- [affineplane.vec2.sum](#affineplanevec2sum)
- [affineplane.vec2.toArray](#affineplanevec2toarray)
- [affineplane.vec2.toPolar](#affineplanevec2topolar)
- [affineplane.vec2.transitFrom](#affineplanevec2transitfrom)
- [affineplane.vec2.transitTo](#affineplanevec2transitto)
- [affineplane.vec2.unit](#affineplanevec2unit)
- [affineplane.vec2.validate](#affineplanevec2validate)


Source: [vec2/index.js](https://github.com/axelpale/affineplane/blob/main/lib/vec2/index.js)

<a name="affineplanevec2add"></a>
## [affineplane](#affineplane).[vec2](#affineplanevec2).[add](#affineplanevec2add)(v, w)

Add two vectors. See vector.sum to add many vectors.

**Parameters:**
- *v*
  - a [vec2](#affineplanevec2)
- *w*
  - a [vec2](#affineplanevec2)

**Returns:**
- a [vec2](#affineplanevec2)

Source: [add.js](https://github.com/axelpale/affineplane/blob/main/lib/vec2/add.js)

<a name="affineplanevec2almostequal"></a>
## [affineplane](#affineplane).[vec2](#affineplanevec2).[almostEqual](#affineplanevec2almostequal)(v, w, [epsilon])

Test if two vectors v and w are almost equal by the margin of epsilon.

**Parameters:**
- *v*
  - a [vec2](#affineplanevec2)
- *w*
  - a [vec2](#affineplanevec2)
- *epsilon*
  - optional number, default to [affineplane.epsilon](#affineplaneepsilon). Set to 0 for strict comparison.

**Returns:**
- a boolean

Source: [almostEqual.js](https://github.com/axelpale/affineplane/blob/main/lib/vec2/almostEqual.js)

<a name="affineplanevec2average"></a>
## [affineplane](#affineplane).[vec2](#affineplanevec2).[average](#affineplanevec2average)(vs)

Arithmetic mean of an array of vectors.

**Parameters:**
- *vs*
  - an array of [vec2](#affineplanevec2)

**Returns:**
- a [vec2](#affineplanevec2)

Aliases: [affineplane.vec2.mean](#affineplanevec2mean)

Source: [average.js](https://github.com/axelpale/affineplane/blob/main/lib/vec2/average.js)

<a name="affineplanevec2copy"></a>
## [affineplane](#affineplane).[vec2](#affineplanevec2).[copy](#affineplanevec2copy)(v)

Copy vector object.

**Parameters:**
- *v*
  - a [vec2](#affineplanevec2)

**Returns:**
- a [vec2](#affineplanevec2)

Source: [copy.js](https://github.com/axelpale/affineplane/blob/main/lib/vec2/copy.js)

<a name="affineplanevec2create"></a>
## [affineplane](#affineplane).[vec2](#affineplanevec2).[create](#affineplanevec2create)(x, y)

Create a vector object `{ x, y }`.

**Parameters:**
- *x*
  - a number. The translation along x-axis
- *y*
  - a number. The translation along y-axis

**Returns:**
- a [vec2](#affineplanevec2)

Source: [create.js](https://github.com/axelpale/affineplane/blob/main/lib/vec2/create.js)

<a name="affineplanevec2cross"></a>
## [affineplane](#affineplane).[vec2](#affineplanevec2).[cross](#affineplanevec2cross)(v, w)

The magnitude of cross product of two 2D vectors. While in 3D,
the cross product returns a perpendicular vector, in 2D we must
settle for a scalar result, the length of that 3D vector.

**Parameters:**
- *v*
  - a [vec2](#affineplanevec2)
- *w*
  - a [vec2](#affineplanevec2)

**Returns:**
- a number

Source: [cross.js](https://github.com/axelpale/affineplane/blob/main/lib/vec2/cross.js)

<a name="affineplanevec2difference"></a>
## [affineplane](#affineplane).[vec2](#affineplanevec2).[difference](#affineplanevec2difference)(v, w)

A vector between v and w, in other words, v - w.

**Parameters:**
- *v*
  - a [vec2](#affineplanevec2)
- *w*
  - a [vec2](#affineplanevec2)

**Returns:**
- a [vec2](#affineplanevec2)

Source: [difference.js](https://github.com/axelpale/affineplane/blob/main/lib/vec2/difference.js)

<a name="affineplanevec2divide"></a>
## [affineplane](#affineplane).[vec2](#affineplanevec2).[divide](#affineplanevec2divide)(vec, divisor)

The division of a vector.
Equivalent to multiplying the vector by the inverse of the divisor.
The direction of the vector does not change.

**Parameters:**
- *vec*
  - a [vec2](#affineplanevec2)
- *divisor*
  - a number

**Returns:**
- a [vec2](#affineplanevec2)

Throws:
- if zero divisor

Source: [divide.js](https://github.com/axelpale/affineplane/blob/main/lib/vec2/divide.js)

<a name="affineplanevec2dot"></a>
## [affineplane](#affineplane).[vec2](#affineplanevec2).[dot](#affineplanevec2dot)(v, w)

The dot product of two vectors,
also called the scalar product.

**Parameters:**
- *v*
  - a [vec2](#affineplanevec2)
- *w*
  - a [vec2](#affineplanevec2)

**Returns:**
- a number

Source: [dot.js](https://github.com/axelpale/affineplane/blob/main/lib/vec2/dot.js)

<a name="affineplanevec2equal"></a>
## [affineplane](#affineplane).[vec2](#affineplanevec2).[equal](#affineplanevec2equal)(v, w)

Test if vectors v,w are equal

**Parameters:**
- *v*
  - a [vec2](#affineplanevec2)
- *w*
  - a [vec2](#affineplanevec2)

**Returns:**
- a boolean

Source: [equal.js](https://github.com/axelpale/affineplane/blob/main/lib/vec2/equal.js)

<a name="affineplanevec2fromarray"></a>
## [affineplane](#affineplane).[vec2](#affineplanevec2).[fromArray](#affineplanevec2fromarray)(arrp)

Create `{ x, y }` vector from array `[x, y]`.

**Parameters:**
- *arrp*
  - an array

**Returns:**
- a [vec2](#affineplanevec2)

Source: [fromArray.js](https://github.com/axelpale/affineplane/blob/main/lib/vec2/fromArray.js)

<a name="affineplanevec2frompolar"></a>
## [affineplane](#affineplane).[vec2](#affineplanevec2).[fromPolar](#affineplanevec2frompolar)(magnitude, direction)

Create a vector from polar coordinates.

**Parameters:**
- *magnitude*
  - a number, length of the vector
- *direction*
  - a number, angle in radians

**Returns:**
- a [vec2](#affineplanevec2)

Source: [fromPolar.js](https://github.com/axelpale/affineplane/blob/main/lib/vec2/fromPolar.js)

<a name="affineplanevec2invert"></a>
## [affineplane](#affineplane).[vec2](#affineplanevec2).[invert](#affineplanevec2invert)(v)

Negate the vector. For example `inverse({ x: 1, y: -1 })` returns
`{ x: -1, y: 1 }`.

**Parameters:**
- *v*
  - a [vec2](#affineplanevec2)

**Returns:**
- a [vec2](#affineplanevec2)

Aliases: [affineplane.vec2.negate](#affineplanevec2negate)

Source: [inverse.js](https://github.com/axelpale/affineplane/blob/main/lib/vec2/inverse.js)

<a name="affineplanevec2magnitude"></a>
## [affineplane](#affineplane).[vec2](#affineplanevec2).[magnitude](#affineplanevec2magnitude)(v)

The length of the vector.

**Parameters:**
- *v*
  - a [vec2](#affineplanevec2)

**Returns:**
- a number

Aliases: [affineplane.vec2.norm](#affineplanevec2norm)

Source: [magnitude.js](https://github.com/axelpale/affineplane/blob/main/lib/vec2/magnitude.js)

<a name="affineplanevec2max"></a>
## [affineplane](#affineplane).[vec2](#affineplanevec2).[max](#affineplanevec2max)(v, w)

Element-wise maximum of two vectors.

**Parameters:**
- *v*
  - a [vec2](#affineplanevec2)
- *w*
  - a [vec2](#affineplanevec2)

**Returns:**
- a [vec2](#affineplanevec2)

Source: [max.js](https://github.com/axelpale/affineplane/blob/main/lib/vec2/max.js)

<a name="affineplanevec2mean"></a>
## [affineplane](#affineplane).[vec2](#affineplanevec2).[mean](#affineplanevec2mean)(vs)

Alias of [affineplane.vec2.average](#affineplanevec2average)

Source: [average.js](https://github.com/axelpale/affineplane/blob/main/lib/vec2/average.js)

<a name="affineplanevec2min"></a>
## [affineplane](#affineplane).[vec2](#affineplanevec2).[min](#affineplanevec2min)(v, w)

Element-wise minimum of two vectors

**Parameters:**
- *v*
  - a [vec2](#affineplanevec2)
- *w*
  - a [vec2](#affineplanevec2)

**Returns:**
- a [vec2](#affineplanevec2)

Source: [min.js](https://github.com/axelpale/affineplane/blob/main/lib/vec2/min.js)

<a name="affineplanevec2negate"></a>
## [affineplane](#affineplane).[vec2](#affineplanevec2).[negate](#affineplanevec2negate)

Alias of [affineplane.vec2.invert](#affineplanevec2invert)

Source: [inverse.js](https://github.com/axelpale/affineplane/blob/main/lib/vec2/inverse.js)

<a name="affineplanevec2norm"></a>
## [affineplane](#affineplane).[vec2](#affineplanevec2).[norm](#affineplanevec2norm)

Alias of [affineplane.vec2.magnitude](#affineplanevec2magnitude)

Source: [magnitude.js](https://github.com/axelpale/affineplane/blob/main/lib/vec2/magnitude.js)

<a name="affineplanevec2normalize"></a>
## [affineplane](#affineplane).[vec2](#affineplanevec2).[normalize](#affineplanevec2normalize)

Alias of [affineplane.vec2.unit](#affineplanevec2unit)

Source: [unit.js](https://github.com/axelpale/affineplane/blob/main/lib/vec2/unit.js)

<a name="affineplanevec2projectto"></a>
## [affineplane](#affineplane).[vec2](#affineplanevec2).[projectTo](#affineplanevec2projectto)(v, plane, camera)

Project a vector onto another plane.
If camera is given, project perspectively.
Otherwise, project orthogonally.

**Parameters:**
- *v*
  - a [vec2](#affineplanevec2) in the reference space, z=0.
- *plane*
  - a [plane3](#affineplaneplane3) in the reference space. The projection plane.
- *camera*
  - optional [point3](#affineplanepoint3) in the reference space.

**Returns:**
- a [vec2](#affineplanevec2) on the projection plane.

Source: [projectTo.js](https://github.com/axelpale/affineplane/blob/main/lib/vec2/projectTo.js)

<a name="affineplanevec2rotateby"></a>
## [affineplane](#affineplane).[vec2](#affineplanevec2).[rotateBy](#affineplanevec2rotateby)(v, radians)

Rotate vector by the given angle.

**Parameters:**
- *v*
  - a [vec2](#affineplanevec2)
- *radians*
  - a number, from positive x-axis towards positive y-axis

**Returns:**
- a [vec2](#affineplanevec2)

Source: [rotateBy.js](https://github.com/axelpale/affineplane/blob/main/lib/vec2/rotateBy.js)

<a name="affineplanevec2rotateto"></a>
## [affineplane](#affineplane).[vec2](#affineplanevec2).[rotateTo](#affineplanevec2rotateto)(v, radians)

Rotate vector so that it points to the given angle.

**Parameters:**
- *v*
  - a [vec2](#affineplanevec2)
- *radians*
  - a number from positive x-axis towards positive y-axis

**Returns:**
- a [vec2](#affineplanevec2)

Source: [rotateTo.js](https://github.com/axelpale/affineplane/blob/main/lib/vec2/rotateTo.js)

<a name="affineplanevec2scaleby"></a>
## [affineplane](#affineplane).[vec2](#affineplanevec2).[scaleBy](#affineplanevec2scaleby)(vec, multiplier)

The scalar multiplication of a vector.
Scale the vector by a multiplier.
The direction of the vector does not change.

**Parameters:**
- *vec*
  - a [vec2](#affineplanevec2)
- *multiplier*
  - a number

**Returns:**
- a [vec2](#affineplanevec2)

Source: [scaleBy.js](https://github.com/axelpale/affineplane/blob/main/lib/vec2/scaleBy.js)

<a name="affineplanevec2scaleto"></a>
## [affineplane](#affineplane).[vec2](#affineplanevec2).[scaleTo](#affineplanevec2scaleto)(vec, magnitude)

Scale the vector to a certain length.
The direction of the vector does not change.
As an exception, zero vector length remains zero.

**Parameters:**
- *vec*
  - a [vec2](#affineplanevec2), non-zero vector.
- *magnitude*
  - a number, the target vector length.

**Returns:**
- a [vec2](#affineplanevec2)

Source: [scaleTo.js](https://github.com/axelpale/affineplane/blob/main/lib/vec2/scaleTo.js)

<a name="affineplanevec2sum"></a>
## [affineplane](#affineplane).[vec2](#affineplanevec2).[sum](#affineplanevec2sum)(vs)

Add an array of vectors together.
See [affineplane.vec2.add](#affineplanevec2add) to add two vectors together.

**Parameters:**
- *vs*
  - an array of [vec2](#affineplanevec2). The array can be empty.

**Returns:**
- a [vec2](#affineplanevec2)

Source: [sum.js](https://github.com/axelpale/affineplane/blob/main/lib/vec2/sum.js)

<a name="affineplanevec2toarray"></a>
## [affineplane](#affineplane).[vec2](#affineplanevec2).[toArray](#affineplanevec2toarray)(v)

Get the vector object as an array.

**Parameters:**
- *v*
  - a [vec2](#affineplanevec2)

**Returns:**
- an array `[x, y]`

Source: [toArray.js](https://github.com/axelpale/affineplane/blob/main/lib/vec2/toArray.js)

<a name="affineplanevec2topolar"></a>
## [affineplane](#affineplane).[vec2](#affineplanevec2).[toPolar](#affineplanevec2topolar)(v)

Get polar coordinates of a vector.

**Parameters:**
- *v*
  - a [vec2](#affineplanevec2)

**Returns:**
- object, polar coordinates `{ magnitude, direction }` where the direction is an angle in radians.

Source: [toPolar.js](https://github.com/axelpale/affineplane/blob/main/lib/vec2/toPolar.js)

<a name="affineplanevec2transitfrom"></a>
## [affineplane](#affineplane).[vec2](#affineplanevec2).[transitFrom](#affineplanevec2transitfrom)(vec, plane)

Transit a [vec2](#affineplanevec2) from the source plane
to the reference plane.
Translation of the plane does not affect the vector
only scaling and rotation do.

**Parameters:**
- *vec*
  - a [vec2](#affineplanevec2) on the source plane.
- *plane*
  - a [plane2](#affineplaneplane2), the source plane, represented on the reference plane.

**Returns:**
- a [vec2](#affineplanevec2), represented on the target plane.

Source: [transitFrom.js](https://github.com/axelpale/affineplane/blob/main/lib/vec2/transitFrom.js)

<a name="affineplanevec2transitto"></a>
## [affineplane](#affineplane).[vec2](#affineplanevec2).[transitTo](#affineplanevec2transitto)(vec, plane)

Transit a [vec2](#affineplanevec2) to a target plane.
In other words, represent the [vec2](#affineplanevec2)
in the coordinate system of the plane.
Translation of the plane does not affect the vector.

**Parameters:**
- *vec*
  - a [vec2](#affineplanevec2) on the reference plane.
- *plane*
  - a [plane2](#affineplaneplane2), the target plane, represented on the reference plane.

**Returns:**
- a [vec2](#affineplanevec2), represented on the target plane.

Source: [transitTo.js](https://github.com/axelpale/affineplane/blob/main/lib/vec2/transitTo.js)

<a name="affineplanevec2unit"></a>
## [affineplane](#affineplane).[vec2](#affineplanevec2).[unit](#affineplanevec2unit)(v)

Get unit vector parallel to the given vector.
The magnitude of unit vector is equal to one.
If zero vector is given, assume direction towards positive x.

**Parameters:**
- *v*
  - a [vec2](#affineplanevec2)

**Returns:**
- a [vec2](#affineplanevec2), magnitude of one.

Aliases: [affineplane.vec2.normalize](#affineplanevec2normalize)

Source: [unit.js](https://github.com/axelpale/affineplane/blob/main/lib/vec2/unit.js)

<a name="affineplanevec2validate"></a>
## [affineplane](#affineplane).[vec2](#affineplanevec2).[validate](#affineplanevec2validate)(v)

Check if object is a valid [vec2](#affineplanevec2).

**Parameters:**
- *v*
  - an object

**Returns:**
- a boolean

Source: [validate.js](https://github.com/axelpale/affineplane/blob/main/lib/vec2/validate.js)

<a name="affineplanevec3"></a>
## [affineplane](#affineplane).[vec3](#affineplanevec3)

Three-dimensional vector.

Aliases: [affineplane.vector3](#affineplanevector3)

- [affineplane.vec3.add](#affineplanevec3add)
- [affineplane.vec3.almostEqual](#affineplanevec3almostequal)
- [affineplane.vec3.average](#affineplanevec3average)
- [affineplane.vec3.copy](#affineplanevec3copy)
- [affineplane.vec3.create](#affineplanevec3create)
- [affineplane.vec3.cross](#affineplanevec3cross)
- [affineplane.vec3.diff](#affineplanevec3diff)
- [affineplane.vec3.difference](#affineplanevec3difference)
- [affineplane.vec3.divide](#affineplanevec3divide)
- [affineplane.vec3.dot](#affineplanevec3dot)
- [affineplane.vec3.equal](#affineplanevec3equal)
- [affineplane.vec3.fromArray](#affineplanevec3fromarray)
- [affineplane.vec3.fromPolar](#affineplanevec3frompolar)
- [affineplane.vec3.fromSpherical](#affineplanevec3fromspherical)
- [affineplane.vec3.invert](#affineplanevec3invert)
- [affineplane.vec3.magnitude](#affineplanevec3magnitude)
- [affineplane.vec3.negate](#affineplanevec3negate)
- [affineplane.vec3.normalize](#affineplanevec3normalize)
- [affineplane.vec3.projectTo](#affineplanevec3projectto)
- [affineplane.vec3.rotateBy](#affineplanevec3rotateby)
- [affineplane.vec3.rotateBy](#affineplanevec3rotateby)
- [affineplane.vec3.scaleBy](#affineplanevec3scaleby)
- [affineplane.vec3.scaleTo](#affineplanevec3scaleto)
- [affineplane.vec3.subtract](#affineplanevec3subtract)
- [affineplane.vec3.sum](#affineplanevec3sum)
- [affineplane.vec3.toArray](#affineplanevec3toarray)
- [affineplane.vec3.toPolar](#affineplanevec3topolar)
- [affineplane.vec3.toSpherical](#affineplanevec3tospherical)
- [affineplane.vec3.transitFrom](#affineplanevec3transitfrom)
- [affineplane.vec3.transitTo](#affineplanevec3transitto)
- [affineplane.vec3.unit](#affineplanevec3unit)
- [affineplane.vec3.validate](#affineplanevec3validate)


Source: [vec3/index.js](https://github.com/axelpale/affineplane/blob/main/lib/vec3/index.js)

<a name="affineplanevec3add"></a>
## [affineplane](#affineplane).[vec3](#affineplanevec3).[add](#affineplanevec3add)(v, w)

**Parameters:**
- *v*
  - a [vec3](#affineplanevec3)
- *w*
  - a [vec3](#affineplanevec3)

**Returns:**
- a [vec3](#affineplanevec3)

Source: [add.js](https://github.com/axelpale/affineplane/blob/main/lib/vec3/add.js)

<a name="affineplanevec3almostequal"></a>
## [affineplane](#affineplane).[vec3](#affineplanevec3).[almostEqual](#affineplanevec3almostequal)(v, w, [epsilon])

Test if vectors are almost equal by the margin of epsilon.

**Parameters:**
- *v*
  - a [vec3](#affineplanevec3)
- *w*
  - a [vec3](#affineplanevec3)
- *epsilon*
  - Optional number, default to [affineplane.epsilon](#affineplaneepsilon).
  - Set to 0 for strict comparison.

**Returns:**
- a boolean

Source: [almostEqual.js](https://github.com/axelpale/affineplane/blob/main/lib/vec3/almostEqual.js)

<a name="affineplanevec3average"></a>
## [affineplane](#affineplane).[vec3](#affineplanevec3).[average](#affineplanevec3average)(vs)

Arithmetic mean of an array of vectors.

**Parameters:**
- *vs*
  - array of [vec3](#affineplanevec3)

**Returns:**
- a [vec3](#affineplanevec3)

Source: [average.js](https://github.com/axelpale/affineplane/blob/main/lib/vec3/average.js)

<a name="affineplanevec3copy"></a>
## [affineplane](#affineplane).[vec3](#affineplanevec3).[copy](#affineplanevec3copy)(v)

Clone the vector object.

**Parameters:**
- *v*
  - a [vec3](#affineplanevec3)

**Returns:**
- a [vec3](#affineplanevec3)

Source: [copy.js](https://github.com/axelpale/affineplane/blob/main/lib/vec3/copy.js)

<a name="affineplanevec3create"></a>
## [affineplane](#affineplane).[vec3](#affineplanevec3).[create](#affineplanevec3create)(x, y, z)

**Parameters:**
- *x*
  - a number
- *y*
  - a number
- *z*
  - a number

**Returns:**
- a [vec3](#affineplanevec3)

Source: [create.js](https://github.com/axelpale/affineplane/blob/main/lib/vec3/create.js)

<a name="affineplanevec3cross"></a>
## [affineplane](#affineplane).[vec3](#affineplanevec3).[cross](#affineplanevec3cross)(v, w)

The cross product of two 3D vectors. Returns a vector perpendicular
to the given vectors. In other words, the result will be normal
to the plane span by the given vectors.

**Parameters:**
- *v*
  - a [vec3](#affineplanevec3)
- *w*
  - a [vec3](#affineplanevec3)

**Returns:**
- a [vec3](#affineplanevec3)

Source: [cross.js](https://github.com/axelpale/affineplane/blob/main/lib/vec3/cross.js)

<a name="affineplanevec3diff"></a>
## [affineplane](#affineplane).[vec3](#affineplanevec3).[diff](#affineplanevec3diff)(v, w)

Alias of [affineplane.vec3.difference](#affineplanevec3difference), [affineplane.vec3.subtract](#affineplanevec3subtract)

Source: [difference.js](https://github.com/axelpale/affineplane/blob/main/lib/vec3/difference.js)

<a name="affineplanevec3difference"></a>
## [affineplane](#affineplane).[vec3](#affineplanevec3).[difference](#affineplanevec3difference)(v, w)

Get the vector v - w. In other words, if we place v, w
to begin from the same point then the result is a vector
from the end of w to the end of v.

**Parameters:**
- *v*
  - a [vec3](#affineplanevec3)
- *w*
  - a [vec3](#affineplanevec3)

**Returns:**
- a [vec3](#affineplanevec3)

Aliases: [affineplane.vec3.diff](#affineplanevec3diff), [affineplane.vec3.subtract](#affineplanevec3subtract)

Source: [difference.js](https://github.com/axelpale/affineplane/blob/main/lib/vec3/difference.js)

<a name="affineplanevec3divide"></a>
## [affineplane](#affineplane).[vec3](#affineplanevec3).[divide](#affineplanevec3divide)(vec, divisor)

The division of a vector.
Equivalent to multiplying the vector by the inverse of the divisor.
The direction of the vector does not change.

**Parameters:**
- *vec*
  - a [vec3](#affineplanevec3)
- *divisor*
  - a number. If zero, will result a vector having infinite length.

**Returns:**
- a [vec3](#affineplanevec3)

Source: [divide.js](https://github.com/axelpale/affineplane/blob/main/lib/vec3/divide.js)

<a name="affineplanevec3dot"></a>
## [affineplane](#affineplane).[vec3](#affineplanevec3).[dot](#affineplanevec3dot)(v, w)

Dot product of two vectors,
also called the scalar product.

**Parameters:**
- *v*
  - a [vec3](#affineplanevec3)
- *w*
  - a [vec3](#affineplanevec3)

**Returns:**
- a number

Source: [dot.js](https://github.com/axelpale/affineplane/blob/main/lib/vec3/dot.js)

<a name="affineplanevec3equal"></a>
## [affineplane](#affineplane).[vec3](#affineplanevec3).[equal](#affineplanevec3equal)(v, w)

Test if vectors v, w are equal in value.

**Parameters:**
- *v*
  - a [vec3](#affineplanevec3)
- *w*
  - a [vec3](#affineplanevec3)

**Returns:**
- a boolean, true if equal

Source: [equal.js](https://github.com/axelpale/affineplane/blob/main/lib/vec3/equal.js)

<a name="affineplanevec3fromarray"></a>
## [affineplane](#affineplane).[vec3](#affineplanevec3).[fromArray](#affineplanevec3fromarray)(arrv)

Create a [vec3](#affineplanevec3) from an array `[x, y, z]`.

**Parameters:**
- *arrv*
  - an array

**Returns:**
- a [vec3](#affineplanevec3)

Throws
- if arrv has less than three elements.

Source: [fromArray.js](https://github.com/axelpale/affineplane/blob/main/lib/vec3/fromArray.js)

<a name="affineplanevec3frompolar"></a>
## [affineplane](#affineplane).[vec3](#affineplanevec3).[fromPolar](#affineplanevec3frompolar)(magnitude, direction, depth)

Create a vector from cylindrical polar coordinates.
See also [affineplane.vec3.toPolar](#affineplanevec3topolar).

**Parameters:**
- *magnitude*
  - a number, the radial distance from z-axis.
- *direction*
  - a number, the azimuth angle in radians.
- *depth*
  - optional number, default 0. The z coordinate.

**Returns:**
- a [vec3](#affineplanevec3)

Source: [fromPolar.js](https://github.com/axelpale/affineplane/blob/main/lib/vec3/fromPolar.js)

<a name="affineplanevec3fromspherical"></a>
## [affineplane](#affineplane).[vec3](#affineplanevec3).[fromSpherical](#affineplanevec3fromspherical)(magnitude, roll, pitch)

Create a vector from spherical polar coordinates.
See also [affineplane.vec3.toSpherical](#affineplanevec3tospherical).

**Parameters:**
- *magnitude*
  - a number, the length of the vector.
- *roll*
  - a number, the roll angle in radians.
- *pitch*
  - optional number, default 0. The pitch angle in radians.

**Returns:**
- a [vec3](#affineplanevec3)

Source: [fromSpherical.js](https://github.com/axelpale/affineplane/blob/main/lib/vec3/fromSpherical.js)

<a name="affineplanevec3invert"></a>
## [affineplane](#affineplane).[vec3](#affineplanevec3).[invert](#affineplanevec3invert)(v)

Get the vector -v.

**Parameters:**
- *v*
  - a [vec3](#affineplanevec3)

**Returns:**
- a [vec3](#affineplanevec3)

Aliases: [affineplane.vec3.negate](#affineplanevec3negate)

Source: [invert.js](https://github.com/axelpale/affineplane/blob/main/lib/vec3/invert.js)

<a name="affineplanevec3magnitude"></a>
## [affineplane](#affineplane).[vec3](#affineplanevec3).[magnitude](#affineplanevec3magnitude)(v)

The euclidean length of the vector.

**Parameters:**
- *v*
  - a [vec3](#affineplanevec3)

**Returns:**
- a number

Source: [magnitude.js](https://github.com/axelpale/affineplane/blob/main/lib/vec3/magnitude.js)

<a name="affineplanevec3negate"></a>
## [affineplane](#affineplane).[vec3](#affineplanevec3).[negate](#affineplanevec3negate)

Alias of [affineplane.vec3.invert](#affineplanevec3invert)

Source: [invert.js](https://github.com/axelpale/affineplane/blob/main/lib/vec3/invert.js)

<a name="affineplanevec3normalize"></a>
## [affineplane](#affineplane).[vec3](#affineplanevec3).[normalize](#affineplanevec3normalize)

Alias of [affineplane.vec3.unit](#affineplanevec3unit)

Source: [unit.js](https://github.com/axelpale/affineplane/blob/main/lib/vec3/unit.js)

<a name="affineplanevec3projectto"></a>
## [affineplane](#affineplane).[vec3](#affineplanevec3).[projectTo](#affineplanevec3projectto)(vec, plane)

Project a 3D vector onto a 2D plane orthogonally.
We cannot project 3D vectors perspectively because
they have no fixed position and the perspective position
depends on the position. See [affineplane.line2](#affineplaneline2).projectTo
for perspective projection of a vector with fixed position.

**Parameters:**
- *vec*
  - a [vec3](#affineplanevec3) in the reference space.
- *plane*
  - a [plane3](#affineplaneplane3) in the reference space. The image plane.

**Returns:**
- a [vec2](#affineplanevec2) on the image plane.

Source: [projectTo.js](https://github.com/axelpale/affineplane/blob/main/lib/vec3/projectTo.js)

<a name="affineplanevec3rotateby"></a>
## [affineplane](#affineplane).[vec3](#affineplanevec3).[rotateBy](#affineplanevec3rotateby)(v, roll[, pitch])

Rotate vector by the given radian angles.
Roll is applied before pitch.

**Parameters:**
- *v*
  - a [vec3](#affineplanevec3)
- *roll*
  - a number, roll angle in radians. Right-hand rotation around z-axis.
- *pitch*
  - optional number, pitch angle in radians. Default 0. Right-hand rotation around x-axis.

**Returns:**
- a [vec3](#affineplanevec3)

Source: [rotateBy.js](https://github.com/axelpale/affineplane/blob/main/lib/vec3/rotateBy.js)

<a name="affineplanevec3rotateby"></a>
## [affineplane](#affineplane).[vec3](#affineplanevec3).[rotateBy](#affineplanevec3rotateby)(v, roll[, pitch])

Rotate vector so that it points to the given radian angles.
The vector magnitude is preserved.
Roll is applied before pitch.

**Parameters:**
- *v*
  - a [vec3](#affineplanevec3)
- *roll*
  - a number, roll angle in radians. Right-hand rotation around z-axis.
- *pitch*
  - optional number, pitch angle in radians. Default 0. Right-hand rotation around x-axis.

**Returns:**
- a [vec3](#affineplanevec3)

Source: [rotateTo.js](https://github.com/axelpale/affineplane/blob/main/lib/vec3/rotateTo.js)

<a name="affineplanevec3scaleby"></a>
## [affineplane](#affineplane).[vec3](#affineplanevec3).[scaleBy](#affineplanevec3scaleby)(vec, multiplier)

The scalar multiplication of a vector.
Scale the vector by a multiplier.
The direction of the vector does not change.

**Parameters:**
- *vec*
  - a [vec3](#affineplanevec3)
- *multiplier*
  - a number

**Returns:**
- a [vec3](#affineplanevec3)

Source: [scaleBy.js](https://github.com/axelpale/affineplane/blob/main/lib/vec3/scaleBy.js)

<a name="affineplanevec3scaleto"></a>
## [affineplane](#affineplane).[vec3](#affineplanevec3).[scaleTo](#affineplanevec3scaleto)(vec, magnitude)

Scale the vector to a certain length.
The direction of the vector does not change.
As an exception, zero vector length remains zero.

**Parameters:**
- *vec*
  - a [vec3](#affineplanevec3), non-zero vector.
- *magnitude*
  - a number, the target vector length

**Returns:**
- a [vec3](#affineplanevec3)

Source: [scaleTo.js](https://github.com/axelpale/affineplane/blob/main/lib/vec3/scaleTo.js)

<a name="affineplanevec3subtract"></a>
## [affineplane](#affineplane).[vec3](#affineplanevec3).[subtract](#affineplanevec3subtract)

Alias of [affineplane.vec3.difference](#affineplanevec3difference), [affineplane.vec3.diff](#affineplanevec3diff)

Source: [difference.js](https://github.com/axelpale/affineplane/blob/main/lib/vec3/difference.js)

<a name="affineplanevec3sum"></a>
## [affineplane](#affineplane).[vec3](#affineplanevec3).[sum](#affineplanevec3sum)(vs)

Add an array of vectors together.
See [affineplane.vec3.add](#affineplanevec3add) to add two vectors together.

**Parameters:**
- *vs*
  - an array of [vec3](#affineplanevec3). The array can be empty.

**Returns:**
- a [vec3](#affineplanevec3). If the array is empty, returns the zero vector.

Source: [sum.js](https://github.com/axelpale/affineplane/blob/main/lib/vec3/sum.js)

<a name="affineplanevec3toarray"></a>
## [affineplane](#affineplane).[vec3](#affineplanevec3).[toArray](#affineplanevec3toarray)(v)

Convert vector to array with elements `[x, y, z]`.

**Parameters:**
- *v*
  - a [vec3](#affineplanevec3)

**Returns:**
- an array

Source: [toArray.js](https://github.com/axelpale/affineplane/blob/main/lib/vec3/toArray.js)

<a name="affineplanevec3topolar"></a>
## [affineplane](#affineplane).[vec3](#affineplanevec3).[toPolar](#affineplanevec3topolar)(v)

Get cylindrical polar coordinates of a vector.

**Parameters:**
- *v*
  - a [vec3](#affineplanevec3)

**Returns:**
- object with properties
  - *magnitude*
    - a number, the radial distance, the distance from z-axis.
  - *direction*
    - a number, the azimuth angle in radians.
  - *depth*
    - a number, the z coordinate, the axial position.

Source: [toPolar.js](https://github.com/axelpale/affineplane/blob/main/lib/vec3/toPolar.js)

<a name="affineplanevec3tospherical"></a>
## [affineplane](#affineplane).[vec3](#affineplanevec3).[toSpherical](#affineplanevec3tospherical)(v)

Get spherical polar coordinates for a vector.
See also [affineplane.vec3.fromSpherical](#affineplanevec3fromspherical).

**Parameters:**
- *v*
  - a [vec3](#affineplanevec3)

**Returns:**
- object with properties:
  - *magnitude*
    - a number, the length of the vector.
  - *roll*
    - a number, the roll angle in radians.
  - *pitch*
    - a number, the pitch angle in radians.

Source: [toSpherical.js](https://github.com/axelpale/affineplane/blob/main/lib/vec3/toSpherical.js)

<a name="affineplanevec3transitfrom"></a>
## [affineplane](#affineplane).[vec3](#affineplanevec3).[transitFrom](#affineplanevec3transitfrom)(vec, plane)

Represent the vector on the reference plane
without losing information.
Note that plane translation does not affect vectors.

**Parameters:**
- *vec*
  - a [vec3](#affineplanevec3) on the source plane.
- *plane*
  - a [plane3](#affineplaneplane3) on the reference plane. The source plane.

**Returns:**
- a [vec3](#affineplanevec3), represented on the reference plane.

Source: [transitFrom.js](https://github.com/axelpale/affineplane/blob/main/lib/vec3/transitFrom.js)

<a name="affineplanevec3transitto"></a>
## [affineplane](#affineplane).[vec3](#affineplanevec3).[transitTo](#affineplanevec3transitto)(vec, plane)

Represent the vec on the target plane
without losing information.

**Parameters:**
- *vec*
  - a [vec3](#affineplanevec3) on the reference plane.
- *plane*
  - a [plane3](#affineplaneplane3) on the reference plane. The target plane.

**Returns:**
- a [vec3](#affineplanevec3), represented on the target plane.

Source: [transitTo.js](https://github.com/axelpale/affineplane/blob/main/lib/vec3/transitTo.js)

<a name="affineplanevec3unit"></a>
## [affineplane](#affineplane).[vec3](#affineplanevec3).[unit](#affineplanevec3unit)(v)

Get unit vector parallel to the given vector.
The magnitude of unit vector is equal to one.
If zero vector is given, assume direction towards positive x.

**Parameters:**
- *v*
  - a [vec3](#affineplanevec3)

**Returns:**
- a [vec3](#affineplanevec3), magnitude of one.

Aliases: [affineplane.vec3.normalize](#affineplanevec3normalize)

Source: [unit.js](https://github.com/axelpale/affineplane/blob/main/lib/vec3/unit.js)

<a name="affineplanevec3validate"></a>
## [affineplane](#affineplane).[vec3](#affineplanevec3).[validate](#affineplanevec3validate)(v)

Check if object is a valid [vec3](#affineplanevec3).

**Parameters:**
- *v*
  - an object

**Returns:**
- a boolean

Source: [validate.js](https://github.com/axelpale/affineplane/blob/main/lib/vec3/validate.js)

<a name="affineplanevector2"></a>
## [affineplane](#affineplane).[vector2](#affineplanevector2)

Alias of [affineplane.vec2](#affineplanevec2)

Source: [vec2/index.js](https://github.com/axelpale/affineplane/blob/main/lib/vec2/index.js)

<a name="affineplanevector3"></a>
## [affineplane](#affineplane).[vector3](#affineplanevector3)

Alias of [affineplane.vec3](#affineplanevec3)

Source: [vec3/index.js](https://github.com/axelpale/affineplane/blob/main/lib/vec3/index.js)

<a name="affineplaneversion"></a>
## [affineplane](#affineplane).[version](#affineplaneversion)

Package version string, for example `'1.2.3'`. Uses semantic versioning.

<p style="text-align: right">
<a href="#top">&uarr; Back To Top</a>
</p>


Source: [lib/index.js](https://github.com/axelpale/affineplane/blob/main/lib/index.js)
