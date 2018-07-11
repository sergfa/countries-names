# countries-names

## A-Z list of countries for JavaScript Programmers. Supports NodeJS and all browsers

[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![version][version-badge]][package]
[![MIT License][license-badge]][license]
[![Code of Conduct][coc-badge]][coc]





Installation
------------

To use with node:

```bash
npm install countries-names
```

Then in the console:

```javascript
const countriesNames = require('countries-names');
```

To use directly in the browser:

```html

<script src="path/to/yourCopyOf/countries-names.js"></script>

<script>

  console.log(Cnames.all());
  
</script>
```

or the minified version:

```html
<script src="path/to/path/to/yourCopyOf/countries-names.min.js"></script>
```

## Usage

Returns an array of all country names and their codes. [{name:'Afghanistan', code: 'AF'},...]

**all()**



Returns an array of  country names ['Afghanistan', 'Albania', ...]

**names()**


Returns an array of country codes ['AF', 'AL', ...]

**codes()**


Returns the country name which matches the country code, or undefined if no country matches.

**nameByCode(code)**


Returns the country code which matches the country name, or undefined if no code matches.

**codeByName(country)**


[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/travis/sergfa/countries-names.svg?style=flat-square
[build]: https://travis-ci.org/sergfa/countries-names
[coverage-badge]: https://img.shields.io/codecov/c/github/sergfa/countries-names.svg?style=flat-square
[coverage]: https://codecov.io/github/sergfa/countries-names
[version-badge]: https://img.shields.io/npm/v/countries-names.svg?style=flat-square
[package]: https://www.npmjs.com/package/countries-names
[downloads-badge]: https://img.shields.io/npm/dm/countries-names.svg?style=flat-square
[npmcharts]: https://npmcharts.com/compare/countries-names
[license-badge]: https://img.shields.io/npm/l/countries-names.svg?style=flat-square
[license]: https://github.com/sergfa/countries-names/blob/master/LICENSE
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/sergfa/countries-names/blob/master/CODE_OF_CONDUCT.md
