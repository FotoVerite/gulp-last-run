# Changelog

## 1.0.0 (2026-10-04)


### ⚠ BREAKING CHANGES

* Normalize repository, dropping node <10.13 support ([#8](https://github.com/FotoVerite/gulp-last-run/issues/8))

### Features

* Remove default-resolution dependency since platform has consistent resolution ([50a17d8](https://github.com/FotoVerite/gulp-last-run/commit/50a17d874923dafc5c00fbfff23c935424c79df0))
* Support non-extensible functions by removing WeakMap shim ([50a17d8](https://github.com/FotoVerite/gulp-last-run/commit/50a17d874923dafc5c00fbfff23c935424c79df0))


### Bug Fixes

* Avoid es6-weak-map ponyfill where not needed ([f9aa337](https://github.com/FotoVerite/gulp-last-run/commit/f9aa337ee89de6ee0a0fd588d114b7b0e9e96018))
* Ensure timeResolution is an integer always ([425ae66](https://github.com/FotoVerite/gulp-last-run/commit/425ae6612617eeff94757a2997bfd95e1f876102))
* Improve native WeakMap check for newer node versions ([a2f85d7](https://github.com/FotoVerite/gulp-last-run/commit/a2f85d74c83803ed4b6155f7c1f54b2fe0a1e276))
* Use custom WeakMap check until es6-weak-map PR is accepted ([ee90fe7](https://github.com/FotoVerite/gulp-last-run/commit/ee90fe79a082497352123850eca68ed77384b2aa))


### Miscellaneous Chores

* Normalize repository, dropping node &lt;10.13 support ([#8](https://github.com/FotoVerite/gulp-last-run/issues/8)) ([50a17d8](https://github.com/FotoVerite/gulp-last-run/commit/50a17d874923dafc5c00fbfff23c935424c79df0))

## [2.0.0](https://www.github.com/gulpjs/last-run/compare/v1.1.1...v2.0.0) (2022-01-10)


### ⚠ BREAKING CHANGES

* Normalize repository, dropping node <10.13 support (#8)

### Features

* Remove default-resolution dependency since platform has consistent resolution ([50a17d8](https://www.github.com/gulpjs/last-run/commit/50a17d874923dafc5c00fbfff23c935424c79df0))
* Support non-extensible functions by removing WeakMap shim ([50a17d8](https://www.github.com/gulpjs/last-run/commit/50a17d874923dafc5c00fbfff23c935424c79df0))


### Miscellaneous Chores

* Normalize repository, dropping node <10.13 support ([#8](https://www.github.com/gulpjs/last-run/issues/8)) ([50a17d8](https://www.github.com/gulpjs/last-run/commit/50a17d874923dafc5c00fbfff23c935424c79df0))
