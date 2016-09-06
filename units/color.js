'use strict';

const gm = require('gm');

module.exports = function(){
	return new Promise((resolve, reject) => {
		gm('imgs/jpg.jpg')
		.color((err, value) => {
			if(err){ reject(err); }

			resolve(`there has ${value} colors`);
		});
	});
};
