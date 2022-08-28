# affineplane

[![NPM Version](https://img.shields.io/npm/v/tapspace.svg?colorB=7fcd0f)](https://www.npmjs.com/package/tapspace)
[![License](https://img.shields.io/npm/l/yamdog)](#license)
![Dependency status](https://img.shields.io/badge/dependencies-none-lightgrey)

A functional 2D plane geometry and dynamics library for spatial 2D and 3D applications. Designed especially for scaleable and rotatable [affine geometry](https://en.wikipedia.org/wiki/Affine_space) where parallel 2D planes float in 3D space and undergo [perspective projections](https://en.wikipedia.org/wiki/3D_projection) and [basis changes](https://en.wikipedia.org/wiki/Change_of_basis). Written in JavaScript (ECMAScript 6) with a functional, immutable, class-free style.

![affineplane social banner](docs/affineplane-social-banner.jpg)

## Install

With [npm](https://www.npmjs.com/package/affineplane) or [yarn](https://yarnpkg.com/en/package/affineplane):

    $ npm install affineplane
    $ yarn add affineplane

## Geometry

Shapes with position in space:

- [dir2](docs/API.md#affineplanedir2), direction on a plane, `number` in radians
- [dist2](docs/API.md#affineplanedist2), distance between two locations on a plane, `number`
- [line2](docs/API.md#affineplaneline2), a line in 2D, `{origin,span}`
- [line3](docs/API.md#affineplaneline3), a line in 3D, `{origin,span}`
- [plane2](docs/API.md#affineplaneplane2), a plane in 2D, `{a,b,x,y}`
- [plane3](docs/API.md#affineplaneplane3), a xy plane in 3D, `{a,b,x,y,z}`
- [point2](docs/API.md#affineplanepoint2), a location on a plane, `{x,y}`
- [point3](docs/API.md#affineplanepoint3), a location in a 3D space, `{x,y,z}`
- [size2](docs/API.md#affineplanesize2), a rectangle size on a plane, `{w,h}`

Movements of shapes:

- [helm2](docs/API.md#affineplanehelm2), a [helmert](https://en.wikipedia.org/wiki/Helmert_transformation) transformation in 2D, `{a,b,x,y}`
- [helm3](docs/API.md#affineplanehelm3), a [helmert](https://en.wikipedia.org/wiki/Helmert_transformation) in 2D with 3D translation, `{a,b,x,y,z}`
- [vec2](docs/API.md#affineplanevector2), a vector in 2D, `{x,y}`
- [vec3](docs/API.md#affineplanevector2), a vector in 3D, `{x,y,z}`

See [API docs](docs/API.md) for more.

## Using data structures and functions

Instead of classes, affineplane functions operate on plain objects. The available functions are pure, in a sense that they never modify the input, do not cause side effects, have no hidden state, and they always return new objects computed from the input. For example:

    const aff = require('affineplane')
    const point = aff.point2.create(2, 5)
    const po = aff.point2.offset(point, 3, 0)
    // po equals { x: 5, y: 5 }

The functions are grouped in *namespaces*, each focusing on a certain geometry. A common theme of the lib is to explicitly distinguish static shapes from their dynamic movements, like [point2](docs/API.md#affineplanepoint2) from [vec2](docs/API.md#affineplanevec2) because they behave differently. For example, while a point has a location in space, a vector does not. On the other hand, two vectors can be added together but the same cannot be done for two points. Thus it is best to keep the concepts separate. For details on the topic and its foundations, see [Difference between points and vectors](#difference-between-points-and-vectors).

## Transitions and change of basis

In affineplane, we distinguish geometry, say a point, from its representation, like `{x,y}`. While the representation depends on the frame of reference, like a plane origin, the geometry itself does not. To illustrate this, the image below shows how the same point has different coordinates depending on which plane to choose for the reference.

![Projection between planes for a point](docs/projection-between-planes-point-2d.png)

We cannot represent geometry without a frame of reference. However, we can _transit_ it from one reference basis to another. In the case of affineplane, the reference is a 2D plane. A point `{x,y}` is a point on the plane at coordinates (x,y). To transit the point to another plane, we can use [point2.transitTo](docs/API.md#affineplaneplane2transitto) function.

    // Create a point and a plane, both relative to a reference plane.
    const p = { x: 4, y: 2 }
    const plane = aff.plane2.fromFeatures({
      origin: { x: 1, y: 0 }
    })
    // Represent the point on the plane.
    const pp = aff.point2.transitTo(p, plane)
    // pp equals { x: 3, y: 2 }
    // Transit back to original reference plane
    const ppp = aff.point2.transitFrom(pp, plane)
    // ppp equals { x: 4, y: 2 }

In affineplane, we define a plane using Helmert transformation `{a,b,x,y}`. Such transformation can represent uniform scaling, rotation around z axis, and translation along x and y axis. The transformation here acts as the [passive transit](https://en.wikipedia.org/wiki/Active_and_passive_transformation) from the plane coordinates back to its reference plane coordinates. It does not change the geometry, only the frame of reference.

Effectively, the `x,y` part defines the position of the plane origin with respect to the reference origin. The `a,b` part defines the plane basis vectors, giving the scale and angle, in terms of the reference basis. See the illustration below for an example.

(image of a plane here)

The following snippet transits a vector from a source plane to the reference plane. The source has scale of 2, angle of +90 degrees, and 100 units of translation along x axis. Let us see how it affects the vector:

    const v = { x: 5, y: 2 }
    const plane = { a: 0, b: 2, x: 100, y: 0 }
    const vv = aff.vec2.transitFrom(v, plane)
    // vv equals { x: -4, y: 10 }

Due to the scale, one unit of length on the plane is two units on the reference plane. Therefore the coordinate numbers double. Due to the plane angle, the coordinate directions rotate. The plane translation did not affect the coordinates, however, because unlike points, vectors have only length and direction, thus nothing to translate. Also note that while the coordinates changed, the vector in question did not. It is still the same vector, only represented in different frame of reference. In the illustration below you can see that regardless of where you place the vector v, its components stay the same.

![Projection between planes for a vector](docs/projection-between-planes-vector-2d.png)

Transitions never lose information and therefore can be done in both directions. Next we discuss projections that do not have this property.

## Projections

A projection maps geometry from a source plane to an image plane. Unlike transitions, projections may lose information and therefore can be performed only in one direction. For example when you project a 3D point onto a 2D surface, information is lost and you cannot project the point back because you do not know the distance.

Affineplane provides orthogonal and perspective projections between parallel planes. Perspective projections require you to specify a camera location. Orthogonal projections do not require camera but can be thought as perspective projections with camera at infinity. The following snippet gives examples of both orthogonal and perspective projections.

    const p = { x: 4, y: 2, z: 4 }
    const image = { a: 1, b: 0, x: 0, y: 0, z: 2 }
    const portho = aff.point2.projectTo(p, image)
    // portho equals { x: 4, y: 2 }
    const camera = { x: 0, y: 0, z: 0 }
    const ppersp = aff.point2.projectTo(p, image, camera)
    // ppersp equals { x: 2, y: 1 }

In the snippet above, the image plane to project to is otherwise equivalent to the reference plane but two units off along z axis. The depth offset does not affect the result orthogonal projection which is the same point but missing the z dimension. With perspective projection and camera at z=0, however, the point moves towards the camera.

Note that in affineplane the camera always points towards positive z-axis and is orthogonal to the reference plane. In other words the positive z-axis points away from the viewer.

Vectors and other movements can only be projected orthogonally. This is because perspective projection would require them to have known positions relative to the camera.

## Difference between points and vectors

Affine planes have *no origin* by default. The point (0,0) on an affine plane is not an origin. This has interesting consequences that separates the often analogous concepts of the point and the vector.

Let A and B be points on an affine plane. As illustrated below, the result of their addition A + B is arbitrary and fully depends on the choice of the reference point, the origin. The situation might sound exotic but it is rather commonplace. For example, choose any two items nearby and try add their locations together. The result does not make sense, does it? Our physical world is essentially a space without a fixed origin.

![Different origins yield different vector sum](docs/origin-dependent-sum-2d.png)

In contrast, the *distance* between points A and B remains constant regardless the choice of origin. Also their difference A - B and mean C have this origin-invariant property. For the two items you chose, although you could not sum their locations, there still is a distance between the items and you can find a location at the middle.

On the other hand, *vectors* represent movement and displacement on the plane. It is easy to imagine adding two moves together to produce a larger move. Therefore, a vector can be added to another vector to produce a third vector – their sum. Also, a vector can be added to a point to produce another point. The same vector can be added to other points as well. Therefore it is apparent that vectors do not have specific location on the plane but instead represent dynamic movements of shapes and can be applied anywhere on the plane.

There is another way to understand why points on an affine plane behave in such a way. Think of a plane in 3D space so that the plane is lifted away from the space origin, as illustrated below. Now, the points A,B on the plane can be described as 3D vectors from the space origin O to the points, denoted as OA and OB. As you can see, addition of two such vectors OA + OB yields a point that does not stay on the plane and therefore cannot be represented on it.

![In 3D the vector sum does not stay on plane](docs/origin-dependent-sum-3d.jpg)

The difference of vectors OA and OB is a vector OA - OB = BA. The vector BA parallel to the plane and the length of BA equals the distance between the points. Also, you can imagine the mean point between A and B. Does it stay on the plane?

## Type safety

Affineplane is very loose on types and requires you to ensure you feed the functions what they minimally expect. This has a benefit: you can input objects that have extra properties; only the properties affineplane understands are used. For example `{ color: 'ff00ff', x: 2, y: 3 }` is a valid affineplane point2.

To check validity of an object, each geometry type has `validate` function. We could have included validity checking into each function but that would have caused excess of checking for this kind of low-level math functions. Instead, use `validate` when you need it.

We might have TypeScript bindings in the future.

## Contribute

Pull requests and [bug reports](https://github.com/axelpale/affineplane/issues) are highly appreciated. Please test your contribution with the following scripts:

Run test suite:

    $ npm run test

Run only linter:

    $ npm run lint

## License

[MIT](LICENSE)
