'use strict';

const gm = require('gm');

module.exports = function(){
	return new Promise((resolve, reject) => {
		gm('imgs/rgb_1.jpg')
		.paint(20)
		.write('imgs/rgb_paint.jpg', (err) => {
			if(err){ reject(err); }
			
			resolve('paint to imgs/rgb_paint.jpg by radius 20');
		});
	});
};
