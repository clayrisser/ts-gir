# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [0.3.0] - 2026-08-12

Preservation revive. The project builds and runs again on current Node and
TypeScript; the architecture is unchanged. `ts-for-gir` supersedes this project
— see the readme.

### Changed

- Ship ESM and build with `tsc` instead of Babel
- Replace the deprecated oclif v1 stack with `commander`
- Replace `ts-optchain.macro` with native optional chaining, removing the last
  reason to run Babel over the source
- Move to `fast-xml-parser` 5, Babel 8, `glob` 13, `cosmiconfig` 10 and
  TypeScript 7
- Swap prettier and eslint for oxfmt and oxlint, and npm for pnpm
- Adopt the standard `Makefile` / `make.mk` layout and pin the toolchain in
  `.tool-versions`

### Fixed

- Vendor `babel-parser-generator`, whose published build requires
  `@babel/runtime` without depending on it and therefore cannot resolve under
  pnpm
- Expand wildcards in every `--inputs` value; previously only the built-in
  default was globbed, so an explicit `-i '*.gir'` was passed to the file reader
  verbatim and always failed
- Parse `<constructor>` elements, which `fast-xml-parser` 5 rejects outright as
  a prototype-pollution risk
- Create the output directory when it does not already exist
- Track Babel 8's AST changes: enum members moved under `TSEnumBody`,
  `TSFunctionType.parameters` became `params`, and declaration-file syntax now
  needs the parser's `dts` mode
- Look up class members as own properties, so a class without a `<constructor>`
  no longer resolves to `Object.prototype.constructor`

### Removed

- Dead `--silent` and `--verbose` flags are now implemented rather than declared
  and ignored
- The unreachable parent-class lookup in `getClassIdentifiers`, which could
  never match because of a `typeof === 'object'` guard on a string comparison

## [0.2.0] - 2020-01-21

- Add a new cli `input` flag for support for multiple gir files
- Add a new cli `dir` flag for destination directory
- Fix a bug that led to an infinite recursion
- Fix classnames if the classname is a reserved keywords (see https://github.com/codejamninja/babel-parser-generator/pull/1)
- Upgrade dependencies
- Added generated types as an example for those interested

## [0.0.1] - 2019-08-17

### Added

- Initial release
