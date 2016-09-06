'use strict';

const gm = require('gm');

module.exports = function(){
	return new Promise((resolve, reject) => {
		gm('imgs/rgb.jpg')
		.chop(10, 10, 10, 10)
		.write('imgs/rgb_chop.jpg', (err) => {
			if(err){ reject(err); }

			resolve('chop to imgs/rgb_chop.jpg 10,10,10,10');
		});
	});
};
