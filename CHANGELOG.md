# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.21.0] - 2025-xx-xx

### Added

- Implement `angleBetween` for `vec2` and `vec3` (#31).
- Write `CHANGELOG.md` for the full revision-controlled history of the project (#27).

### Fixed

- Repair vec3.rotateTo API docs name (#30).
- Ignore .github workflow files in NPM package (#29).


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

- Add missing `segment3` entry in README.
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

