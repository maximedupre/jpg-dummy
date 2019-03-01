const jpeg = require('jpeg-js');

module.exports = (width, height) => {
	const data = new Buffer(width * height * 4);

	return jpeg.encode({ data, width, height }).data;
}