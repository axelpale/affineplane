# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.21.0] – 2025-xx-xx

### Added

- Implement `angleBetween` for `vec2` and `vec3`.
- Write `CHANGELOG.md` for the full revision-controlled history of the project (#27).

### Fixed

- Repair vec3.rotateTo API docs name (#30).
- Ignore .github workflow files in NPM package (#29).


## [2.20.0] – 2025-01-15

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


## [2.19.0] – 2024-07-07

### Added

- Implement `sphere2.tangentCircle`.
- Implement `sphere2.tangentCircles`.

### Changed

- Upgrade dev dependencies.


## [2.18.0] – 2023-12-13

### Added

- Implement `box2.getInnerSquare`.
- Implement `circle3.boundingCircle`.

### Changed

- Upgrade dev dependencies.
