#! /usr/bin/env node

const mdlinks = require('./lib/index.js');
const fetch = require('node-fetch');
const path = process.argv[2];
const option = process.argv[3];

mdlinks(path, option)
  .then((result) => { 
    if (option === '--validate') {
      result.map((item) =>
        fetch(item.href)
          .then((link) => link.status === 200 ? 
            console.log(`text: ${item.text}\nhref: ${item.href.substring(0, 50)}\nstatus: valid\n`) : 
            console.log(`text: ${item.text}\nhref: ${item.href.substring(0, 50)}\nstatus: invalid\n`))    
      );
    } else {
      result.map((item) =>        
        console.log(`text: ${item.text}\nhref: ${item.href.substring(0, 50)}\n`)             
      );
    }
  })
  .catch(console.error); 
  