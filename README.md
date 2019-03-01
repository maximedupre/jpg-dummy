Simple browser/node module to create a dummy jpg file of specific dimensions.

## Installation
    $ npm install jpg-dummy

## Usage
    const jpgDummy = require('jpg-dummy');

	// Generates a 100 x 100 jpg file
	const jpgFile = jpgDummy(100, 100)

## API
    jpgDummy(width: number, height: number): ArrayBuffer