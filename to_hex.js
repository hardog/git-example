'use strict';

const fs = require('fs');

fs.readFile('imgs/png.png', (err, buf) => {
	let len = buf.length;
	let data = [], tmp = [];
	let index = 0;

	for(let i = 0; i < len; i++){
		if(index++ >= 16){
			index = 0;
			data.push(tmp.join('\t'));
			tmp = [];
		}

		tmp.push(buf[i].toString(16));
	}
	fs.writeFile('./img_meta_data', data.join('\n'));
});