'use strict';

const gm = require('gm');

module.exports = function(){
	return new Promise((resolve, reject) => {
		gm('imgs/earth_has_white.png')
		.fill('#0000')
		.opaque('#fff')
		.write('imgs/earth_opaque.png', (err) => {
			if(err){ reject(err); }

			resolve('generate imgs/heart_opaque.png replace rgba(255,0,0,1) to #bd986e');
		});
	});
};
