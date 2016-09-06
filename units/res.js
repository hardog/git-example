'use strict';

const gm = require('gm');

module.exports = function(){
	return new Promise((resolve, reject) => {
		gm('imgs/png.png')
		.res((err, value) => {
			if(err){ reject(err); }

			resolve(value);
		});
	});
};
