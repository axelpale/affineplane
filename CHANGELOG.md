# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.21.0] - 2025-10-30

### Added

- Implement `angleBetween` for `vec2` and `vec3` (#31).
- Write `CHANGELOG.md` for the full revision-controlled history of the project (#27).

### Fixed

- Repair `vec3.rotateTo` API docs name (#30).
- Ignore `.github` workflow files in NPM package (#29).


## [2.20.0] - 2025-01-15

### Added

- New box functions: `box2.equal`, `box3.equal`.
- New circle functions: `circle3.equal`, `sphere2.equal`, `sphere3.equal`.
- New direction functions: `dir2.equal`, `dir3.equal`.
- New orientation functions: `orient2.equal`.
- New ray functions: `ray3.equal`.
- New size functions: `size2.almostEqual`, `size2.equal`, `size3.almostEqual`, `size3.equal`.
- New vector functions: `vec4.equal`.
- GitHub Actions CI integration.

### Changed

- Improve README geometry listing: separate measures.
- Improve docs of `dir2.almostEqual`.
- Upgrade dev dependencies.

### Removed

- TravisCI integration


## [2.19.0] - 2024-07-07

### Added

- Implement `sphere2.tangentCircle`.
- Implement `sphere2.tangentCircles`.

### Changed

- Upgrade dev dependencies.


## [2.18.0] - 2023-12-13

### Added

- Implement `box2.getInnerSquare`.
- Implement `circle3.boundingCircle`.

### Changed

- Upgrade dev dependencies.


## [2.17.1] - 2023-10-16

### Fixed

- Add missing `segment3` entry in README (#22).
- Handle `sphere2.collisionArea` nested circle special case.


## [2.17.0] - 2023-10-15

### Added

- New `orient2` methods `fromPolar`, `fromVector`.
- New `sphere2` methods `fromPoints`, `collisionArea`.
- New `sphere3` methods `fromPoints`.
- New test utility: `almostEqualOrient`.

### Fixed

- Upgrade yamdog to 2.1.0 to strip extra source links.
- Repair `plane3.projectToPlane`.


## [2.16.0] - 2023-04-29

### Added

- New geometry: `ray3`.
- New `point3` functions: `distanceToLine`, `distanceToRay`.
- Document `UNIT` and `ZERO` constants.

### Fixed

- Correct docs for: `point3.offset`.


## [2.15.0] - 2023-04-27

### Added

- New `dir2` functions: `copy`, `validate`.
- New `dir3` functions: `copy`, `validate`.
- New `vec4` functions: `almostEqual`, `validate`.


## [2.14.1] - 2023-04-27

### Fixed

- Restore unintentionally removed alias: `point2.mean`.


## [2.14.0] - 2023-04-26

### Added

- New geometry `circle2`, alias of `sphere2`.
- New geometry `circle3`.
- New geometry `segment3`.
- Implement `helm2.projectToCameraTransform`.
- Implement `helm3.difference`.
- Implement `plane2.orientation`.
- Implement `plane3` functions `orientation`, `projectByDepth`.
- Implement `point2.projectByDistance`.
- Implement `point3` functions `projectByDistance`, `distanceToPlane`.
- Implement `scalar1.projectToPlane`.
- Implement `scalar2.projectToPlane`.
- Implement `scalar3.projectToPlane`.
- Implement `sphere2.boundingCircle`, alias `boundingSphere`.
- Implement `sphere3.boundingSphere`.
- New constants `ZERO` and `UNIT` for various geometries.
- New test utility: `almostEqualHelmert`.

### Changed

- Improve README.
- Improve `box3`, `point2`, `vec2`, `helm3` and `plane3` docs.

### Fixed

- Repair plane2.difference and plane3.difference. They had unintentionally inverted effect. This is a **breaking change** for code using the bad implementation.


## [2.13.0] - 2023-03-13

### Added

- New `sphere2` functions: `rotateBy`, `boundingBox`, `size`, `atCenter`, `polarOffset`.
- New `sphere3` functions: `rotateAroundLine`, `rotateBy`, `boundingBox`, `size`, `atCenter`, `polarOffset`.
- New `quat4` function `rotateVector`.
- New `point3` function `rotateAroundLine`.
- New `plane2` function `at`.
- New `plane3` function `at`.
- New `box3` function `collide`.

### Changed

- Allow `vec2` argument in `box3.translate`.
- Improve docs for `point3`, `vec3`.
- Upgrade dev dependencies.

### Fixed

- Repair broken `sphere2.translate` and `sphere3.translate`.


## [2.12.0] - 2023-03-11

In this version increment we introduce various collision detection methods.

### Added

- New geometry: `sphere2`, `sphere3`, `segment2`.
- New `box2` functions: `hasPoint`, `getCircle`, `getSegments`, `offset`, `translate`, `collide`.
- New `box3` functions: `getBasisInverse`, `hasPoint`, `getSphere`, `offset`, `translate`.
- New `scalar1` function: `validate`.
- New `scalar2` function: `validate`.
- New `scalar3` function: `validate`.
- New `dist2` function: `validate`.
- New `dist3` function: `validate`.
- New `line2` functions: `intersection`, `normal`.
- New `line3` function: `intersection`.
- New `path2` function: `validate`.
- New `path3` function: `validate`.

### Changed

- Improve API docs for `point2`, `box2`, `box3`, `line2`.
- Improve tests for `point2`.


## [2.11.0] - 2023-02-21

### Added

- New geometry: `scalar1`, `scalar2`, `scalar3`.
- New `orient2` function: `almostEqual`.
- New `box2` functions: `atBox`, `resizeBy`, `resizeTo`, `translateBy`, `rotateBy`, `getBasisInverse`.
- New `box3` functions: `atBox`, `resizeBy`, `resizeTo`, `translateBy`, `rotateBy`.
- New `plane3` functions: `projectToDepth`, `projectToScale`.
- New test utility: `almostEqualBasis`.

### Changed

- Upgrade `box3.projectToPlane` to do perspective projection.
- Upgrade `vec3.projectToPlane` to do perspective projection.
- Improve `box2` and `box3` documentation.
- Reveal `orient2` documentation.
- Use `projectToPlane` instead of `projectTo` alias in code examples.
- Mark `rect2` and `rect3` as deprecated.

### Removed

- Hide aliases `vector2` and `vector3` in documentation.


## [2.10.0] - 2023-01-31

### Added

- New rectangular cuboid geometry: `box2`, `box3` (#14).
- New size geometry `size3` (#15).
- New orientation geometry: `orient2`.
- New `dist2` functions: `equal`, `almostEqual`.
- New `dist3` functions: `equal`, `almostEqual`.
- New `size2` function: `validate`.
- New alias for all `projectTo` functions: `projectToplane`.
- New alias for `point2.difference`: `vectorTo`.
- New alias for `point3.difference`: `vectorTo`.

### Changed

- Migrate API docs to yamdog v2.

### Fixed

- Correct `point2.transformMany` parameter order.
- Use identity default in `helm2.fromFeatures`.
- Ensure non-negative size in `size2.scaleBy`.
- Correct `point2.homothety` documentation.


## [2.9.0] - 2022-12-04

### Added

- New function `helm2.fromPlane`.
- New function `helm3.fromPlane`.
- New function `helm2.limitDilation`.
- New function `helm3.limitDilation`.
- New function `plane2.limitScale`.
- New function `plane3.limitScale`.
- New function `plane2.transformInside`.
- New function `plane3.transformInside`.
- New function `plane2.almostEqual`.
- New function `plane3.almostEqual`.
- New alias for `plane3`: `basis2z`.
- Illustrate `plane2` in API docs.

### Changed

- Various small improvements to API docs.


## [2.8.0] - 2022-11-28

### Added

- New `helm2` functions: `fromVector`, `fromBasisVector`.
- New `helm3` functions: `fromVector`, `fromBasisVector`.
- New `plane2` function: `fromHelmert`. Creates passive transformations from active transformations.
- New `point2` function: `direction`. Get direction between a point pair.
- New `point3` function: `direction`. Get direction between a point pair.
- New `vec2` function: `projectToVector`.
- New `vec3` function: `projectToVector`.
- New alias for `vec2.projectTo`: `projectToPlane`.
- New alias for `vec3.projectTo`: `projectToPlane`.
- Add parameter `origin` to the transform methods of `plane2` and `plane3` in order to apply a helmertian to a plane at custom point.

### Changed

- Improve test assertion for vectors.
- Upgrade yamdog for better API docs.
- Small improvements to docs.

### Fixed

- Correct terminology in `fromPolar` and `toPolar` functions of `vec2` and `vec3`.


## [2.7.0] - 2022-10-28

### Added

- New geometry `vec4` for 4D vector geometry
- New geometry `quat4` for quaternion geometry
- New geometry `rect2` for 2D rectangle with place and orientation in 3D
- New geometry `rect3` for 2D rectangle with place and orientation in 3D
- New geometry `path3` for 3D point sequence in 3D space
- Implement `point3.round`.
- Implement `vec3.rotateAroundAxis`.
- Implement `path2` functions: combine, transitFrom, transitTo
- Alias helm3.translateBy = .addTranslation
- Alias basis2 = plane2
- Alias basis3 = plane3

### Changed

- Improved tests: `vec3`.
- Improved docs: `point2`, `helm3`.
- Change travis test environment from Ubuntu 16.04 to Ubuntu 20.04.
- Quicker test suite workflow with pessimistic test runs.


## [2.6.0] - 2022-10-05

### Added

- New `dir2` functions .almostEqual, .fromVector, .toPolar, .toVector
- New `dir3` geometry with various functions
- New `dist3` geometry with various functions
- New `angle` geometry helper functions
- Alias `point3.translate` = `point3.translateBy`.
- Alias `plane3.transform` = `plane3.transformBy`.

### Changed

- Added "See also" section to readme.
- Small corrections and improvements to docs.
- Switch deprecated test reporter module.
- Upgrade dev dependencies.

### Fixed

- Correct z-axis behaviour under scaling; make it scale uniformly with x and y. Geometry affected by the bug: plane3, helm3, point3, vec3
- Repair `plane3.translateTo`. Preserve z when dz not specified.
- Remodel `dir2` as unit vector instead of a number


## [2.5.1] - 2022-09-19

### Changed

- Update docs.

### Fixed

- Repair `helm2.projectTo`.
- Repair helm and plane validation: use manhattan distance.


## [2.5.0] - 2022-09-15

### Added

- New function: `point2.almostEqual`.
- New function: `vec2.independent`.
- New function: `vec3.independent`.
- New function: `vec2.transformBy`.
- New function: `vec3.transformBy`.
- Add documentation for `plane3.projectTo`.

### Changed

- Improve docs notation on optional params.


## [2.4.0] - 2022-09-13

### Added

- New function `plane3.getNormal`.
- New function for `vec2`, `vec3`: .divide
- Alias vec2 vec3 .unit .normalize
- Alias vec3 .norm .magnitude
- Alias vec2 vec3 .diff .difference .subtract
- Alias point2 point3 .diff .delta
- New images in the API docs.
- Add linked titles in API docs.

### Changed

- Improve vector test suites.
- Limit travis to main branch.

### Fixed

- Correct inverted `vec3.difference`.
- Repair missing export for `vec2.equal`.


## [2.3.0] - 2022-09-01

### Added

- New function `vec2.cross` - The cross product magnitude for 2D vectors.
- New function `vec3.dot` - The dot product for 3D vectors.
- New function `vec3.cross` - The cross product for 3D vectors.
- Add Travis CI integration and build badge.


## [2.2.0] - 2022-08-31

### Added

- New function `plane2.copy`
- New function `plane3.copy`
- New constant `plane2.IDENTITY`
- New constant `plane3.IDENTITY`
- New function `plane3.rotateToOrtho`

### Changed

- Improve docs slightly.
- Upgrade codebase to `standard` style v17.


## [2.1.0] - 2022-08-30

### Added

- New constant for `plane2`, `plane3`: `IDENTITY`.
- New function `plane3.rotateToOrtho`.

### Fixed

- Correct readme badge urls.


## [2.0.0] - 2022-08-29

Lots of breaking changes in every geometry. Only the major ones are listed here.

### Added

- New geometry: `plane2`, `plane3`.
- New geometry: `helm2`, `helm3`.
- New geometry: `line2`, `line3`.
- New geometry: `point3`, `vec3`.
- New perspective projections for multiple geometries: `projectTo`.

### Changed

- BREAKING `tran2` is replaced by `plane2` and `helm2` to separate passive and active transformations.
- BREAKING `proj2` is replaced by functions `transitFrom`, `transitTo`, and `projectTo` in each geometry.
- BREAKING `vector2` is renamed to `vec2`.
- Improve documentation, lots of fixes.
- Improve introduction with illustrations.
- Write more comprehensive test suite.


## [1.2.1] - 2022-07-19

### Changed

- Improve and correct docs.
- Generate API docs with `yamdog`.


## [1.2.0] - 2022-06-19

### Added

- New function `tran2.rotateToOrtho` to snap 90 deg turns.
- New alias `tran2.ROT0` for the constant `tran2.IDENTITY`.
- New alias `proj2.copy` for the function `proj2.clone`.

### Changed

- Extend `tran2.fromPolar` parameters: x and y params become optional.
- Improve API docs


## [1.1.0] - 2022-06-19

### Added

- New geometry `dir2`: a data structure and functions for direction and for its orthogonal projection.
- New function `proj2.size2`: orthogonal projection for `size2`.

### Changed

- Improve docs
- Streamline test suite.


## [1.0.1] - 2022-05-07

### Added

- New function `vector2.toPolar`.

### Changed

- Improve and correct API documentation.


## [1.0.0] - 2022-04-17

### Added

- New geometry:
  - `dist2`
  - `linear2`
  - `path2`
  - `point2`
  - `point3`
  - `poly2`
  - `proj2`
  - `proj3`
  - `size2`
  - `tran2`
  - `vector2`
  - `vector3`
- New constant: `epsilon`

