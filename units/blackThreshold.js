'use strict';

const gm = require('gm');

module.exports = function(){
	return new Promise((resolve, reject) => {
		gm('imgs/jpg.jpg')
		.blackThreshold(0,0,0)
		.write('imgs/jpg_blackThreshold.jpg', (err) => {
			if(err){ reject(err); }

			resolve('generate imgs/png_blackThreshold.png by 0,0,0');
		});
	});
};
