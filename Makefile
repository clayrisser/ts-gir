.POSIX:
export ROOTDIR ?= $(eval ROOTDIR := $(shell git rev-parse --show-toplevel))$(ROOTDIR)
include $(ROOTDIR)/make.mk

.DEFAULT_GOAL := build

ASDF_VERSION ?= v0.18.0
.PHONY: prepare prepare/asdf prepare/cloc
prepare: sudo
	@command -v asdf >/dev/null 2>&1 || $(MAKE) prepare/asdf
	@command -v cloc >/dev/null 2>&1 || $(MAKE) prepare/cloc
	@awk '!/^#/ && NF {print $$1}' .tool-versions | \
		while read t; do asdf plugin add "$$t" 2>/dev/null || true; done
	@rcfile=$$(mktemp); \
		{ asdf install 2>&1; echo $$? >$$rcfile; } | grep --line-buffered -v 'is already installed' || true; \
		rc=$$(cat $$rcfile); rm -f $$rcfile; exit $$rc
	@$(PNPM) install
prepare/asdf:
	@command -v brew >/dev/null 2>&1 && brew install asdf || { \
		o=$$(uname | tr A-Z a-z); a=$$(uname -m | sed 's/x86_64/amd64/;s/aarch64/arm64/'); \
		curl -fsSL "https://github.com/asdf-vm/asdf/releases/download/$(ASDF_VERSION)/asdf-$(ASDF_VERSION)-$$o-$$a.tar.gz" \
			| $(SUDO) tar -xz -C /usr/local/bin asdf; \
	}
prepare/cloc:
	@$(PKG_INSTALL) cloc

.PHONY: configure
configure:
	@for cmd in asdf $(NODE) $(PNPM) $(CLOC); do \
		command -v $$cmd >/dev/null 2>&1 || { echo "$$cmd is missing, run \`make prepare\`"; exit 1; }; \
	done

.PHONY: deps ~deps
~deps: node_modules/.modules.yaml
node_modules/.modules.yaml: pnpm-lock.yaml package.json
	@$(MAKE) deps
deps: FORCE
	@$(PNPM) install

.PHONY: build
build: configure ~deps
	@$(TSC) -p tsconfig.build.json

.PHONY: typecheck
typecheck: configure ~deps
	@$(TSC) --noEmit

# A single vitest invocation covers both tiers so one coverage/lcov.info lands
# for Sonar; the split targets stay available for focused local runs.
COVERAGE_ARGS ?= --coverage --coverage.reporter=text --coverage.reporter=lcov

.PHONY: test test/unit test/integration
test: configure ~deps
	@$(VITEST) run $(COVERAGE_ARGS)
test/unit: configure ~deps
	@$(VITEST) run tests/unit $(COVERAGE_ARGS)
test/integration: configure ~deps
	@$(VITEST) run tests/integration $(COVERAGE_ARGS)

# First readable gir directory wins; brew and the distros disagree on where
# gobject-introspection drops its data.
GIR_DIR ?= $(eval GIR_DIR := $(shell for d in /usr/share/gir-1.0 /opt/homebrew/share/gir-1.0 /usr/local/share/gir-1.0; do [ -d "$$d" ] && echo "$$d" && break; done))$(GIR_DIR)
GENERATE_DIR ?= @types

.PHONY: generate
generate: build
	@[ -n "$(GIR_DIR)" ] || { echo "no gir-1.0 directory found, install gobject-introspection"; exit 1; }
	@$(NODE) bin/bin.js -i '$(GIR_DIR)/*.gir' -d $(GENERATE_DIR)

.PHONY: format
format: configure ~deps
	@$(OXFMT) .

.PHONY: lint
lint: configure ~deps
	@$(OXFMT) --check .
	@$(OXLINT)
	@$(TSC) --noEmit

# @types is generated output, not source, so it would drown the real numbers.
.PHONY: count
count: configure
	@$(CLOC) $(shell $(GIT) ls-files -- . ':!:@types')

.PHONY: clean
clean:
	@rm -rf lib coverage *.tsbuildinfo
	@rm -rf $(MAKEDIR)

.PHONY: purge
purge: clean
	@$(GIT) clean -fxd
