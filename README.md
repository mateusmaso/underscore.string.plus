underscore.string.plus [![Build Status](https://travis-ci.org/mateusmaso/underscore.string.plus.svg?branch=master)](https://travis-ci.org/mateusmaso/underscore.string.plus)
======================
This library is an extension for Underscore which provides more useful methods to the string library.

## Features

* Methods for string manipulation.

## Dependencies

* underscore.js (>= 1.5)
  * underscore.string

## Node

```javascript
var _ = require("underscore");
_.string = _.str = require('underscore.string');
_.extend(_.string, require('../src/underscore.string.plus'));
```

## Examples

```javascript
_.string.lowerize("FooBar") == "fooBar" // true
_.string.isUrl("http://www.foo.bar") == true // true
_.string.splitInTwoSentences("Hello. World") == ["Hello. ", "World"] // true
```

## License

Copyright (c) 2013-2014 Mateus Maso. Released under an MIT license.
