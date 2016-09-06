'use strict';

const gm = require('gm');

module.exports = function(){
	return new Promise((resolve, reject) => {
		gm('imgs/rgb.jpg')
		.bitdepth(2)
		.write('imgs/rgb_bitdepgth.jpg', (err) => {
			if(err){ reject(err); }

			resolve('generate imgs/rgb_bitdepgth.jpg set bit depth to 2');
		});
	});
};
