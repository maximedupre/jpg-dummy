const jpeg = require('jpeg-js');

module.exports = (width, height) => {
	const data = new Buffer(width * height * 4);
	let i = 0;

	while (i < data.length) {
		data[i++] = 0xFF;
		data[i++] = 0x00;
		data[i++] = 0x00;
		data[i++] = 0xFF;
	}

	return jpeg.encode({ data, width, height }).data;
}