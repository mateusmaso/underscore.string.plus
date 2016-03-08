underscore.string.plus [![Build Status](https://travis-ci.org/mateusmaso/underscore.string.plus.svg?branch=master)](https://travis-ci.org/mateusmaso/underscore.string.plus)
======================

This library is an extension for Underscore which provides more useful methods to the string library.

## Features

* Methods for string manipulation.

## Dependencies

* underscore.js (>= 1.8.3)
  * underscore.string (>= 3.3.4)

## Node

```javascript
var _ = require("underscore");
var s = require('underscore.string');
_.extend(s, require('../src/underscore.string.plus'));
```

## Examples

```javascript
s.lowerize("FooBar") == "fooBar" // true
s.isUrl("http://www.foo.bar") == true // true
s.splitInTwoSentences("Hello. World") == ["Hello. ", "World"] // true
```

## License

Copyright (c) 2013-2016 Mateus Maso. Released under an MIT license.
