# ts-gir

> generate typescript from gir

![](assets/ts-gir.png)

`ts-gir` reads [GObject Introspection](https://gi.readthedocs.io/) `.gir` XML and
emits a TypeScript declaration file plus a small JavaScript shim for each
namespace it finds, so GJS code can be written against real types.

## Status (2026)

**This project is preserved, not actively developed. Use
[`ts-for-gir`](https://github.com/gjsify/ts-for-gir) for new work.**

`ts-gir` was written in 2019 and is one of several early attempts at the
GIR-to-TypeScript problem. That problem is now solved properly by `ts-for-gir`,
which has real GJS/node-gtk module support, correct signal and property typing,
promisified async methods, and an actively maintained release train. Bitspur's
own [`react-gtk`](https://gitlab.com/bitspur/react-gnome/react-gtk) generates its
types with `@ts-for-gir/cli`, not with this package.

This repository is kept because it still runs, it is small enough to read in one
sitting, and it documents an approach worth understanding: rather than
templating strings, it builds a Babel AST by parsing tiny code snippets and
splicing the resulting nodes into a growing program. If you want a working
GIR-to-TypeScript generator for production, go use `ts-for-gir`.

It was unarchived and modernized in 2026 so that it builds and runs on current
Node and TypeScript. See the [changelog](CHANGELOG.md) for what changed.

## Installation

```sh
pnpm add -g ts-gir
```

Requires Node 20.19 or newer.

## Usage

```
Usage: ts-gir [options]

generate typescript from gir

Options:
  -v, --version            output the version number
  -i, --inputs <globs...>  paths to GIR files to generate type definitions from
                           (with wild card support)
                           (default: ["/usr/share/gir-1.0/*.gir"])
  -d, --dir <dir>          output dir
  -o, --output <basename>  output basename, if not set, the namespace is used
  -m, --module <name>      wrap declarations in a module declaration
  -s, --silent             suppress all output
      --verbose            report every warning instead of deduplicating them
  -h, --help               display help for command
```

Generate declarations for every namespace installed on the system:

```sh
ts-gir -i '/usr/share/gir-1.0/*.gir' -d @types
```

GIR data comes from `gobject-introspection`: `brew install gobject-introspection`
on macOS (which installs into `/opt/homebrew/share/gir-1.0`), or
`apt install libgirepository1.0-dev gir1.2-gtk-3.0` on Debian and Ubuntu.

For each namespace `Gtk`, two files are written:

- `gtk.d.ts` — the declarations
- `gtk.js` — a shim that re-exports `imports.gi.Gtk` and aliases any identifier
  that had to be renamed to avoid a reserved word

## Configuration

Settings are read with [cosmiconfig](https://github.com/cosmiconfig/cosmiconfig),
so a `tsgir` key in `package.json`, a `.tsgirrc`, or a `tsgir.config.js` all
work. Command line flags win over config file values.

| key                | type                     | meaning                                                                   |
| ------------------ | ------------------------ | ------------------------------------------------------------------------- |
| `dir`              | `string`                 | output directory                                                          |
| `ignoreDuplicates` | `boolean`                | drop members a parent class already declares instead of widening to `any` |
| `importMap`        | `Record<string, string>` | override the import path for a namespace, keyed by its kebab-case name    |
| `moduleName`       | `string`                 | wrap declarations in `declare module '<name>'`                            |
| `output`           | `string`                 | output basename                                                           |

```json
{
  "tsgir": {
    "dir": "@types",
    "importMap": { "g-object": "@girs/gobject-2.0" }
  }
}
```

## Known limitations

These are inherent to the 2019 design and are not being fixed here. Every one of
them is handled properly by `ts-for-gir`.

- Method and function parameters are emitted, but **overloads are not**. When a
  class and its parent both declare the same member, it collapses to
  `(...args: any[]): any`.
- Only **one level** of the class hierarchy is consulted when detecting
  duplicates. Walking the full ancestor chain reintroduces an infinite recursion
  on cyclic GIR parent references.
- **GObject signals, `connect` overloads and construct properties** are not
  modelled at all.
- Namespaces are keyed by name, not by version, so `GIRepository-2.0.gir` and
  `GIRepository-3.0.gir` both write `gi-repository.d.ts` and the last one wins.
- Unrecognised types degrade to `any` with a warning rather than failing.

## `@types/`

The checked-in `@types/` directory is sample output generated in 2020 from
GTK 3-era GIR files. It is kept as a historical artifact and is **not** published
to npm and **not** kept up to date. Regenerate against your own system with
`make generate` (or the `ts-gir` command above) rather than importing it.

## Development

```sh
make prepare   # one-time: asdf toolchain, cloc, pnpm install
make build     # tsc -> lib/
make test      # vitest, unit + integration, with coverage
make lint      # oxfmt --check, oxlint, tsc --noEmit
make format    # oxfmt
make generate  # run the built CLI against this machine's gir files
```

The integration suite generates declarations for every `.gir` on the host and
reparses each result to prove it is valid TypeScript. It skips itself when no
`gir-1.0` directory is present.

## License

[MIT License](LICENSE)

[Clay Risser](https://clayrisser.com) © 2019

## Related projects

- [ts-for-gir](https://github.com/gjsify/ts-for-gir) — the maintained successor; use this
- [gi.ts](https://github.com/ewlsh/gi.ts) — another modern generator
- [node-gtk](https://github.com/romgrk/node-gtk) — GNOME bindings for Node rather than GJS
- [gjs](https://gitlab.gnome.org/GNOME/gjs) — the GNOME JavaScript runtime itself
