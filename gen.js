#!/usr/bin/env node
'use strict';

const fs = require('fs');

let tpl = fs.readFileSync('./tpl');
let args = Array.prototype.slice.call(process.argv, 2);
let len = args.length;

if(len <= 0){
	console.log('no file to generate!');
	process.exit(0);
}

// if file exists
let exists = (path) => {
	let bool = true;

	try{
		fs.accessSync(path);
	}catch(e){
		bool = false;
	}

	return bool;
};

// start generate files
let all_files = [];
for(let i = 0; i < len; i++){
	all_files.push(new Promise((resolve, reject) => {
		let path = `./units/${args[i]}.js`;

		if(!exists(path)){
			fs.writeFile(path, tpl, (err) => {
				if(err){ resolve(`${path}\tgenerate failed!`); }
				resolve(`${path}\tgenerated!`);
			});
		}else{
			resolve(`${path}\texisted!`);
		}
	}));
}

Promise.all(all_files)
.then((r) => console.log(r.join('\n')))
.catch((e) => console.error(e));