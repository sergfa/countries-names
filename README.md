# countries-names

## A-Z list of countries

## Works in node and browser


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

```javascript

//Returns an array of all country names and their codes. [{name:'Afghanistan', code: 'AF'},...]
### all()


//Returns an array of  country names ['Afghanistan', 'Albania', ...]
### names()

////Returns an array of  country names ['AF', 'AL', ...]
### codes()

//Returns the country name which matches the country code, or undefined if no country matches.
### countryByCode(code)

//Returns the country code which matches the country name, or undefined if no code matches.
### codeByCountry(country)
```

