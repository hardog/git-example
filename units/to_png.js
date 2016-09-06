'use strict';

const gm = require('gm');

module.exports = function(){
	return new Promise((resolve, reject) => {
		gm('imgs/earth.jpg')
		.write('imgs/earth_to_png.png', (err) => {
			if(err){ reject(err); }

			resolve('convert to png imgs/earth_to_png.png');
		});
	});
};
