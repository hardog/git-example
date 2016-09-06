'use strict';

const gm = require('gm');

module.exports = function(){
	return new Promise((resolve, reject) => {
		gm('imgs/earth.png')
		.trim()
		.write('imgs/earth_trim.png', (err) => {
			if(err){ reject(err); }

			resolve('trim earth.png to earth_trim.png');
		});
	});
};
