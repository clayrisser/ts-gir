# Contributing

This project is preserved rather than actively developed — see the
[status section](README.md#status-2026) of the readme. New feature work almost
certainly belongs in [`ts-for-gir`](https://github.com/gjsify/ts-for-gir)
instead. Bug fixes, documentation and build repairs are still welcome.

## Getting set up

The source lives on [GitLab](https://gitlab.com/bitspur/misc/ts-gir) and changes
are taken through merge requests.

```sh
make prepare   # asdf toolchain from .tool-versions, cloc, pnpm install
make build
make test
make lint
```

Use **pnpm**, never npm or yarn. Formatting and linting are **oxfmt** and
**oxlint**; run `make format` before pushing and `make lint` to check.

## Workflow

- `main` is always stable.
- Branch off `main` with a descriptive name (`fix-enum-members`, `issue-32`).
- Rebase regularly against `main`.
- Open a merge request when you want feedback or think you are ready.

Make sure your editor respects the [EditorConfig](http://editorconfig.org) file
at the root of the repository, and follow
[these guidelines](http://who-t.blogspot.de/2009/12/on-commit-messages.html) for
commit messages. You do not need to add [CHANGELOG.md](CHANGELOG.md) entries —
that is our responsibility.

## Tests

`tests/unit` runs against the checked-in `tests/fixtures/Demo-1.0.gir`, which is
deliberately small and exercises the shapes the generator special-cases. If you
fix a generation bug, add the triggering construct to that fixture and assert on
the output.

`tests/integration` generates declarations for every `.gir` installed on the host
and reparses each result to prove it is valid TypeScript. It skips itself when no
`gir-1.0` directory is present, so install `gobject-introspection` locally if you
want that coverage.

## Reading List

- [GObject Introspection](https://gi.readthedocs.io/)
- [Keep a Changelog](http://keepachangelog.com/)
- [On Commit Messages](http://who-t.blogspot.de/2009/12/on-commit-messages.html)
- [Semantic Versioning](http://semver.org/)
