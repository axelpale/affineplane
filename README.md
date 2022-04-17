# affineplane

A functional 2D plane geometry and dynamics library for spatial 2D applications. Written in JavaScript (ECMAScript 6) with a functional, immutable, class-free style.

![affineplane social banner](docs/affineplane-social-banner.jpg)

## Install

With [npm](https://www.npmjs.com/package/affineplane) or [yarn](https://yarnpkg.com/en/package/affineplane):

    $ npm install affineplane
    $ yarn add affineplane

## Geometry

Shapes:

- [dist2](docs/API.md#affineplanedist2), distance between two points on a plane
- [point2](docs/API.md#affineplanepoint2), a location on aplane
- [point3](docs/API.md#affineplanepoint3), a location in a 3D space
- [size2](docs/API.md#affineplanesize2), a rectangle size on a plane

Movements:

- [linear2](docs/API.md#affineplanelinear2), a linear transformation on a plane
- [tran2](docs/API.md#affineplanetran2), an affine transformation on a plane
- [vector2](docs/API.md#affineplanevector2), a displacement on a plane
- [vector3](docs/API.md#affineplanevector2), a displacement in a 3D space

Projections:

- [proj2](docs/API.md#affineplaneproj2), projection between similar planes
- [proj3](docs/API.md#affineplaneproj3), perspective projection between parallel planes

See [API docs](docs/API.md) for more.

## Using data structures and functions

Instead of classes, affineplane provides functions that operate on plain objects. The available functions are pure, in a sense that they never modify the input, do not cause side effects, have no hidden state, and they always return new objects computed from the input.

The functions are grouped in namespaces, each focusing on a certain geometry. A common theme of the lib is to explicitly distinguish static positions from their dynamic movements. Otherwise, in our experience, it is all too easy to mix these concepts in the code.

## Points and vectors on the affine plane

Affine planes have no fixed origin. This has interesting consequences that separates the often analogous concepts of the point and the vector.

Let A and B be points on an affine plane. As illustrated below, the result of their addition A + B is arbitrary and fully depends on the choice of the reference point, *origin*. The situation might sound exotic but it is rather commonplace. For example, choose any two items nearby and try add the locations together. The result does not make sense, does it? Our physical world is essentially a space without a fixed origin.

![Different origins yield different vector sum](docs/origin-dependent-sum-2d.png)

In contrast, the *distance* between points A and B remains constant regardless the choice of origin. Also their difference A - B and mean C have this origin-invariant property. Although you probably could not add the locations of the two items, there still is a distance between them and you can find a location at the middle.

There is another way to understand why points on an affine plane behave such a way. Think of a plane in 3D space so that the plane is lifted away from the space origin, as illustrated below. Now, the points A,B on the plane can be described as 3D vectors from the space origin O to the points, denoted as OA and OB. As you can see, addition of two such vectors OA + OB yields a result that does not stay on the plane. Their difference OA - OB is a vector parallel to the plane and the distance between the points is the length of that vector. Does the mean of the two vectors stay on the plane?

(TODO 3d drawing here)

## License

[MIT](LICENSE)
