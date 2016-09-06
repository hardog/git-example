'use strict';

const gm = require('gm');

module.exports = function(){
	return new Promise((resolve, reject) => {
		gm('imgs/jpg.jpg')
		.identify((err, value) => {
			if(err){ reject(err); }

			resolve(value);
		});
	});
};
