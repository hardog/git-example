#!/usr/bin/env node
'use strict';

const fs = require('fs');
let args = Array.prototype.slice.call(process.argv, 2);

let get_dirs = function(path){
	return new Promise((resolve, reject) => {
		fs.readdir(path, (err, files) => {
			if(err){ reject(err); }
			resolve(files);
		});
	});
};

let path = './units';
get_dirs(path)
.then((files) => {
	let results = [];
	let len = files.length;

	for(let i = 0; i < len; i++){
		let mark = files[i].replace(/\.js/, '');
		
		if(args.length === 0 || args.indexOf(mark) !== -1){
			results.push(new Promise((resolve, reject) => {
				require(`${path}/${files[i]}`)()
				.then((content) => {
					if(typeof content === 'object'){
						content = JSON.stringify(content);
					}
					resolve(`${mark}:\t${content}`);
				})
				.catch((e) => resolve(`${mark}:\t-- execute failed --`));
			}));
		}
	}

	return Promise.all(results);
})
.then((rs) => console.log(rs.join('\n')))
.catch((e) => console.error(e));