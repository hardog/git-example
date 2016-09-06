'use strict';

const gm = require('gm');

module.exports = function(){
	return new Promise((resolve, reject) => {
		gm('imgs/png.png')
		.depth((err, value) => {
			if(err){ reject(err); }
			
			resolve(value);
		});
	});
};
