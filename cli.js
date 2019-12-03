#! /usr/bin/env node

const mdlinks = require('./lib/index.js');
const path = process.argv[2];
const option = process.argv[3];

mdlinks(path, option)
  .then((result) => {
    if (option === '--validate') {
      result.map((item) => 
        console.log(`text: ${item.text}\nhref: ${item.href.substring(0, 50)}\nstatus: ${item.status === 200 ? 'valid' : 'invalid'}\n`)
      );
    } else {
      result.map((item) => 
        console.log(`text: ${item.text}\nhref: ${item.href.substring(0, 50)}\n`)
      );
    }  
  })
  .catch(console.error); 
  