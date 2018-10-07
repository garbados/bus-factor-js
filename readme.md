# bus-factor-js

[![Build Status](https://img.shields.io/travis/garbados/bus-factor-js/master.svg?style=flat-square)](https://travis-ci.org/garbados/bus-factor-js)
[![Coverage Status](https://img.shields.io/coveralls/github/garbados/bus-factor-js/master.svg?style=flat-square)](https://coveralls.io/github/garbados/bus-factor-js?branch=master)
[![Stability](https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square)](https://nodejs.org/api/documentation.html#documentation_stability_index)
[![JS Standard Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)

[npm]: https://www.npmjs.com/

A tool for analysing the [bus factor](https://en.wikipedia.org/wiki/Bus_factor) of open-source projects on [npm][npm] and their dependencies.

For example:

```bash
$ npm i -g bus-factor
$ busfactor preact

preact has 1 author(s) and 3 maintainer(s).
Authors:
- Jason Miller <jason@developit.ca>
Maintainers:
- developit <jason@developit.ca>
- lukeed <luke@lukeed.com>
- marvinhagemeister <marvin@marvinhagemeister.de>
```

Many projects are under-maintained, often for want of funding. This tool is intended to help identify those projects in order to organize labor and materials to support them.

## Install

Use [npm][npm]:

```bash
$ npm i -g bus-factor
$ busfactor -h

busfactor <project> [options]

...
```

## Usage

```bash
$ busfactor --help

busfactor <project>

Tool for analysing the bus factor of projects and their dependencies.

Positionals:
  project  Name of the project on NPM.                                  [string]

Options:
  --registry, -r   URL to the NPM registry to use.
                                  [default: "https://skimdb.npmjs.com/registry"]
  --json, -j       Output analysis as JSON. Useful for aggregation.
                                                                [default: false]
  --recursive, -R  Analyse project dependencies too.            [default: false]
  -h, --help       Show help                                           [boolean]
  -v, --version    Show version number                                 [boolean]
```

## Development

To work on the source code, download it with [git](https://git-scm.com/) and build it with [Node.js](https://nodejs.org/en/):

```bash
$ git clone https://github.com/garbados/bus-factor-js
$ cd bus-factor-js
$ npm install
```

To run the test suite, use `npm test`:

```bash
$ npm test
```

## Contributions

All contributions are welcome but will be moderated at the discretion of the project's maintainers. This section will update as governance policies emerge and evolve.

To report a bug or request a feature, please [file and issue](https://github.com/garbados/bus-factor-js/issues).

To share a patch, please [submit a pull request](https://github.com/garbados/bus-factor-js/pulls).

## License

[Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0)
